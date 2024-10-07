/**
 * Fetches a Star Wars person from the SWAPI API, given their name.
 *
 * @param {string} name - The name of the person to fetch.
 * @returns {Promise<StarWarsPerson[]>} A promise that resolves with an array of person objects, or rejects with an error.
 * @throws {Error} If the name is missing, or if there is a problem fetching the person details.
 */

import { ErrorMessages, SWAPI_PEOPLE_URL } from "../constants";
import { StarWarsPerson } from "../types";

export const fetchStarWarsPerson = async (name: string) => {
  if (!name) {
    throw new Error(ErrorMessages.FETCH_DETAILS_FAILED_TEXT);
  }

  try {
    const response = await fetch(`${SWAPI_PEOPLE_URL}${name}`);

    if (!response.ok) {
      throw new Error(
        ErrorMessages.FETCH_PERSON_FAIL_TEXT.replace(
          "{statusText}",
          response.statusText,
        ),
      );
    }

    const { results } = await response.json();

    if (!results?.length) {
      throw new Error(
        ErrorMessages.NO_PERSON_FOUND_TEXT.replace("{name}", name),
      );
    }

    // API doesn't provide the ids, extract it from the URL and make another more unique
    const resultWithIDs = results.map((person: StarWarsPerson) => {
      // .filter(Boolean) removes empty strings, then get last element which is the id
      const idFromUrl = person.url.split("/").filter(Boolean).pop();

      // fill empty spaces with hyphen
      const uniqueId = `${idFromUrl}-${person.name.replace(/\s+/g, "")}-${person.mass}`;
      return { ...person, id: idFromUrl, uniqueId };
    });

    return resultWithIDs;
  } catch (error) {
    console.error(
      `Error fetching Star Wars person details: ${(error as Error).message}`,
      ErrorMessages.FETCH_PERSON_ERROR_MESSAGE.replace(
        "{errorMessage}",
        (error as Error).message,
      ),
    );
    throw error;
  }
};
