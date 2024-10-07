import { StyledFlex, StyledText } from "./styled/LoadingSpinner.styled";
import { LoadingText } from "../../constants";
import { Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <StyledFlex>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <StyledText>{LoadingText.FETCHING_DETAILS_TEXT}</StyledText>
    </StyledFlex>
  );
};

export default LoadingSpinner;
