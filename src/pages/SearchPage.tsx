/**
 * A page that renders a search form and a list of search results.
 *
 * It fetches a list of Star Wars characters from the SWAPI API when the user enters a search term
 * and displays the results in an ordered list. The list is interactive—when a character is clicked,
 * the user is navigated to that character's details page.
 *
 * The search results are cached for 5 minutes to avoid redundant API calls.
 *
 * Props and state management are handled for the search term, search form submission, and errors.
 *
 * @returns {JSX.Element} The rendered page with the search form and results list.
 */

import { useStarWarsSearch } from "../hooks/useStarWarsSearch";
import SearchForm from "../components/search/SearchForm";
import ResultsList from "../components/list/ResultsList";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { Card } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { StarWarsPerson } from "types";

const MotionBox = motion(Box);

function SearchPage() {
  const { searchTerm, setSearchTerm, data, isLoading, error, handleSearch } =
    useStarWarsSearch();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowError(false);
  };

  const handlePersonClick = (id: string) => {
    const person = data?.find((p: StarWarsPerson) => p.url.includes(id)); // Find the person by ID
    if (person) {
      navigate(`/character-details/${id}`, {
        state: { personName: person.name, data },
      }); // Pass personName and data
    } else {
      console.error("Person not found");
    }
  };

  return (
    <>
      <Card
        borderTop="8px"
        borderColor="brand.800"
        borderRadius="md"
        marginTop={8}
      >
        <Box border="1px" borderColor="gray.200" padding="3">
          <SearchForm
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
            showError={showError}
            setShowError={setShowError}
            isLoading={isLoading}
          />

          {error && <p style={{ color: "red" }}>{error.message}</p>}

          <AnimatePresence>
            {data && (
              <MotionBox
                key="results-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                borderColor="gray.200"
                padding="0"
                borderRadius="md"
              >
                <ResultsList
                  results={data}
                  handlePersonClick={handlePersonClick}
                />
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Card>
    </>
  );
}

export default SearchPage;
