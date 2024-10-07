/**
 * A component for rendering a single search result.
 *
 * Props:
 * - `result`: A Star Wars person object with a name and a URL.
 * - `handlePersonClick`: A function to execute when the component is clicked.
 *    It's passed the ID of the person in the URL.
 *
 * Renders a styled box with a chevron icon and the person's name.
 * When clicked, it calls `handlePersonClick` with the ID of the person.
 */

import {
  StyledBoxContainer,
  StyledFlex,
  ChevronIcon,
  StyledText,
} from "./styled/List.styled";
import { StarWarsPerson } from "types";

interface ResultItemProps {
  result: StarWarsPerson;
  handlePersonClick: (person: StarWarsPerson) => void;
}

const ResultItem = ({ result, handlePersonClick }: ResultItemProps) => {
  const handleClick = () => {
    handlePersonClick(result);
  };

  return (
    <StyledBoxContainer onClick={handleClick}>
      <StyledFlex>
        <ChevronIcon />
        <StyledText>{result.name}</StyledText>
      </StyledFlex>
    </StyledBoxContainer>
  );
};

export default ResultItem;
