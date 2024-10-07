# Star Wars Search API (SW-API)

A React application that allows users to search for Star Wars characters using the SWAPI (Star Wars API) https://swapi.dev/. The application fetches data from the SWAPI and displays a list of search results, with the ability to navigate to detailed information about each character.

## Features

- **Search Characters**: Enter a name to search for Star Wars characters.
- **Character Details**: View detailed information about a character, including their height, weight, and films they appeared in.
- **Responsive Design**: The application is styled using Chakra UI, providing a responsive and accessible design.
- **Cached Searches**: Search results are cached for 5 minutes to reduce redundant API calls.

## Technologies Used

- **React**: Core framework for building the UI.
- **React Router**: For navigation between the search and details pages.
- **Tanstack React Query**: Handles data fetching and caching.
- **Chakra UI**: For styling the components with ease.
- **Framer Motion**: Adds animations to enhance the user experience.
- **Styled Components**: Enables dynamic, scoped CSS keeping styles modular and tied to the component logic.
- **SWAPI (Star Wars API)**: The external API for retrieving Star Wars data.

## Installation

### 1. Clone the repository

    git clone https://github.com/yourusername/sw-api.git

### 2. Navigate into the project directory

    cd sw-api

### 3. Install the dependencies

    npm install

### 4. Start the application

    npm start

The app will be available at http://localhost:3000.

## How It Works

1. The user enters a search term (character name) in the search form.
2. The application fetches data from the SWAPI based on the search term.
3. The results are displayed in a list, sorted by character name.
4. Clicking on a character navigates the user to a details page that shows more information about that character.

## Components

### SearchPage

- Renders the search form and list of results.
- Caches search results for 5 minutes.

### DetailsPage

- Displays the character’s details based on the ID provided in the URL.

### SearchForm

- Handles user input for searching characters.

### ResultsList

- Displays the list of search results.

### DetailsCard

- Shows the character’s information in a structured format.

### Custom Hooks

- **useStarWarsSearch**: Custom hook for fetching and caching Star Wars characters.
- **useFetchFilmTitles**: Custom hook for fetching film titles based on a Star Wars person’s film URLs.
