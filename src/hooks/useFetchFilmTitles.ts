/**
 * Fetches the film titles for a given Star Wars person and adds them to the
 * person's data.
 *
 * @returns {Promise<void>} A promise that resolves when the film titles have
 * been fetched and added to the person, or rejects if there is an error.
 */

import { fetchFilmTitles } from "../api/fetchFilmTitles";
import { ErrorMessages } from "../constants";
import { StarWarsPerson } from "../types";
import { useState } from "react";

export const useFetchFilmTitles = (person: StarWarsPerson | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filmError, setFilmError] = useState<string | null>(null);

  const fetchAndAddFilmTitles = async () => {
    if (!person) return;

    setIsLoading(true);
    setFilmError(null);

    try {
      const filmTitles = await fetchFilmTitles(person.films);
      person.filmTitles = filmTitles; // Add film titles to the person data
      setIsLoading(false);
    } catch (error) {
      setFilmError(ErrorMessages.FETCH_FILMS_FAIL_TEXT);
      setIsLoading(false);
    }
  };

  return { fetchAndAddFilmTitles, isLoading, filmError };
};
