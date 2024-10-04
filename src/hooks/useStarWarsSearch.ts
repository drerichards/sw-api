/**
 * Hook that fetches a Star Wars person from the SWAPI API and caches it.
 *
 * The hook takes no arguments.
 *
 * It returns an object with the following properties:
 * - `searchTerm`: The current search term. Can be updated with `setSearchTerm`.
 * - `setSearchTerm`: Updates `searchTerm` to the given value.
 * - `data`: The fetched data, or undefined if not fetched yet.
 * - `isLoading`: A boolean indicating if the data is being fetched, or if it was
 *   fetched recently (i.e., within the last 5 minutes).
 * - `error`: An error if the fetch failed. The error is cleared when a new search
 *   term is entered.
 * - `handleSearch`: A function to execute when the search form is submitted.
 *   It fetches the person with the current `searchTerm` and updates the URL with
 *   the search term to persist it when navigating back.
 */

import { fetchStarWarsPerson } from "../api/fetchStarWarsPerson";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
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
    queryKey: ["starWarsPerson", searchTerm],
    queryFn: () => fetchStarWarsPerson(searchTerm),
    enabled: false, // Only fetch when triggered manually
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    if (!trimmedSearchTerm) {
      alert("Please enter a valid search term.");
      return;
    }
    setSearchParams({ search: trimmedSearchTerm });
    refetch();
  };

  return {
    searchTerm,
    setSearchTerm,
    data,
    isLoading: isLoading || isFetching,
    error,
    handleSearch,
  };
};
