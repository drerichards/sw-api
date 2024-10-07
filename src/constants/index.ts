export const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people/?search=";
export enum ErrorMessages {
  UNKNOWN_PERSON_TEXT = 'No details available for "Unknown Person"',
  FETCH_DETAILS_FAILED_TEXT = "Not able to fetch Star Wars person details",
  FETCH_FILMS_FAIL_TEXT = "Failed to fetch Star Wars film titles.",
  FETCH_PERSON_FAIL_TEXT = "Failed to fetch Star Wars person details: {statusText}",
  NO_PERSON_FOUND_TEXT = "No person found with the name {name}",
  FETCH_PERSON_ERROR_MESSAGE = "Error fetching Star Wars person details: {errorMessage}",
  FETCH_FILM_TITLES_MESSAGE = "Error fetching film titles: {errorMessage}",
}

export enum AlertMessages {
  VALID_SEARCH_TERM_TEXT = "Please enter a valid search term.",
}

export enum FormText {
  PLACEHOLDER_TEXT = "May the Force be with you...",
  HELPER_TEXT = "Enter a character name (e.g., Luke Skywalker)",
  ERROR_TEXT = "A name is required",
}

export enum LoadingText {
  SEARCHING_TEXT = "Searching...",
  FETCHING_DETAILS_TEXT = "One moment please...",
}
