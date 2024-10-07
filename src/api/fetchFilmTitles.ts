/**
 * Fetches an array of film titles from the SWAPI API, given an array of URLs
 * pointing to the film resources.
 *
 * @param {string[]} filmUrls - An array of URLs pointing to the film resources.
 * @returns {Promise<string[]>} A promise that resolves with an array of film titles.
 * @throws {Error} If there is a problem fetching the film titles.
 */

import { ErrorMessages } from "../constants";

export const fetchFilmTitles = async (filmUrls: string[]) => {
  try {
    const filmPromises = filmUrls.map((url) =>
      fetch(url).then((res) => res.json()),
    );
    const films = await Promise.all(filmPromises); // Wait for all promises to resolve
    return films.map((film) => film.title);
  } catch (error) {
    console.error(
      ErrorMessages.FETCH_FILM_TITLES_MESSAGE.replace(
        "{errorMessage}",
        (error as Error).message,
      ),
    );
    throw error;
  }
};
