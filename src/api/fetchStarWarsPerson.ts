/**
 * Fetches a Star Wars person from the SWAPI API, given their name.
 *
 * @param {string} name - The name of the person to fetch.
 * @returns {Promise<StarWarsPerson[]>} A promise that resolves with an array of person objects, or rejects with an error.
 * @throws {Error} If the name is missing, or if there is a problem fetching the person details.
 */

export const fetchStarWarsPerson = async (name: string) => {
  if (!name) {
    throw new Error("Name is required to fetch Star Wars person details.");
  }

  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${name}`,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Star Wars person details: ${response.statusText}`,
      );
    }

    const { results } = await response.json();

    if (!results?.length) {
      throw new Error(`No person found with the name "${name}"`);
    }

    return results;
  } catch (error) {
    console.error(
      `Error fetching Star Wars person details: ${(error as Error).message}`,
    );
    throw error;
  }
};
