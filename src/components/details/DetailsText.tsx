/**
 * A component that renders a text with a title and an attribute.
 *
 * @param {string} attributeTitle - The title of the attribute.
 * @param {string} [attribute] - The value of the attribute.
 * @param {number} [marginTop] - The margin at the top of the component.
 * @param {number} [marginBottom] - The margin at the bottom of the component.
 * @param {number} [marginY] - The margin at the top and bottom of the component.
 *
 * @returns {JSX.Element} A JSX element with the attribute title and value.
 */

import {
  StyledDetailsTextContainer,
  StyledDetailsText,
  StyledDetailsFlex,
} from "./styled/Details.styled";

interface DetailsTextProps {
  attributeTitle: string;
  attribute?: string;
  marginTop?: number;
  marginBottom?: number;
  marginY?: number;
}

const DetailsText = ({
  attributeTitle,
  attribute,
  marginTop,
  marginBottom,
  marginY,
}: DetailsTextProps) => {
  return (
    <StyledDetailsTextContainer
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginY={marginY}
    >
      <StyledDetailsFlex>
        <b>{attributeTitle}:</b>
        {attribute && (
          <StyledDetailsText marginLeft={2}>{attribute}</StyledDetailsText>
        )}
      </StyledDetailsFlex>
    </StyledDetailsTextContainer>
  );
};

export default DetailsText;
