/**
 * A list of search results.
 *
 * Each result is rendered as a clickable card which calls the `handlePersonClick` function
 * with the person's ID when clicked, if the function is provided.
 *
 * @param {ResultsListProps} props
 * @returns {JSX.Element} The rendered list of results
 */

import { StyledCardContainer, StyledCardBody } from "./styled/List.styled";
import { StarWarsPerson } from "../../types/index";
import ResultItem from "./ResultItem";

interface ResultsListProps {
  results: StarWarsPerson[];
  handlePersonClick: (person: StarWarsPerson) => void;
}

const ResultsList = ({ results, handlePersonClick }: ResultsListProps) => {
  return (
    <StyledCardContainer>
      <StyledCardBody>
        {results.map((result) => (
          <ResultItem
            key={result.uniqueId}
            result={result}
            handlePersonClick={handlePersonClick}
          />
        ))}
      </StyledCardBody>
    </StyledCardContainer>
  );
};

export default ResultsList;
