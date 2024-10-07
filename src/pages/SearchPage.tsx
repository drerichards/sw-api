/**
 * A page component that renders a search form and a list of results.
 *
 * The search form takes a search term as input and fetches a list of Star Wars
 * characters from the SWAPI API that match the search term. The results are
 * then displayed in a list below the search form.
 *
 * If the user clicks on one of the results, it navigates to the details page
 * for that character.
 *
 * @returns {JSX.Element} A JSX element rendering the search page.
 */

import {
  StyledPageContainer,
  StyledBox,
  StyledErrorText,
  StyledMotionBox,
} from "./styled/SearchPage.styled";
import { useStarWarsSearch } from "../hooks/useStarWarsSearch";
import SearchForm from "../components/search/SearchForm";
import ResultsList from "../components/list/ResultsList";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { StarWarsPerson } from "types";

function SearchPage() {
  const { searchTerm, setSearchTerm, data, isLoading, error, handleSearch } =
    useStarWarsSearch();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    if (searchTerm.trim() !== "") setShowError(false);
  };

  const handlePersonClick = (person: StarWarsPerson): void => {
    person &&
      navigate(`/character-details/${person.id}`, {
        state: { data: person },
      });
  };

  return (
    <StyledPageContainer>
      <StyledBox>
        <SearchForm
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          showError={showError}
          setShowError={setShowError}
          isLoading={isLoading}
        />

        {error && <StyledErrorText>{error.message}</StyledErrorText>}

        <AnimatePresence>
          {data && (
            <StyledMotionBox
              key="resultsList"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultsList
                results={data}
                handlePersonClick={handlePersonClick}
              />
            </StyledMotionBox>
          )}
        </AnimatePresence>
      </StyledBox>
    </StyledPageContainer>
  );
}

export default SearchPage;
