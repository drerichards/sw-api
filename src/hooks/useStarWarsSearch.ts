/**
 * It fetches the person data from the SWAPI API if the person is not provided
 * in the state from the search page, and returns the data and a function to
 * trigger the search.
 *
 * The search term is persisted in the URL using react-router's
 * `useSearchParams`.
 *
 * @returns An object with the following properties:
 * - `searchTerm`: The current search term.
 * - `setSearchTerm`: A function to update the search term.
 * - `data`: The fetched data, or `undefined` if there was an error.
 * - `isLoading`: A boolean indicating whether the hook is currently
 *   fetching data.
 * - `error`: An error object if there was an error fetching data, or
 *   `undefined` otherwise.
 * - `handleSearch`: A function to trigger the search, which updates the
 *   URL and refetches the data.
 */

import { fetchStarWarsPerson } from "../api/fetchStarWarsPerson";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AlertMessages } from "../constants";
import { useState, useEffect } from "react";
import { StarWarsPerson } from "../types";

export const useStarWarsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const termFromURL = searchParams.get("search") || "";
    setSearchTerm(termFromURL);
  }, [searchParams]);

  const { data, error, isLoading, refetch, isFetching } = useQuery<
    StarWarsPerson[],
    Error
  >({
    queryKey: ["starWarsPerson", searchTerm], // caches the term to "starWarsPerson" like localStorage
    queryFn: () => fetchStarWarsPerson(searchTerm),
    enabled: false, // Only fetch when triggered manually
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Doesn't need to refetch since the data won't change
    retry: false, // No retries if errs out
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    if (!trimmedSearchTerm) {
      alert(AlertMessages.VALID_SEARCH_TERM_TEXT);
      return;
    }
    setSearchParams({ search: trimmedSearchTerm });
    refetch();
  };

  return {
    searchTerm,
    setSearchTerm,
    data,
    isLoading: isLoading || isFetching, // isLoading = initial || isFetching = refetch
    error,
    handleSearch,
  };
};
