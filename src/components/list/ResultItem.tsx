import ExternalLinkItem from "./ExternalLinkItem";
import InternalLinkItem from "./InternalLinkItem";
import { Box } from "@chakra-ui/react";

interface ResultItemProps {
  result: string | { name: string; url: string };
  handlePersonClick?: (id: string) => void;
}

const ResultItem = ({ result, handlePersonClick }: ResultItemProps) => {
  const isStringResult = typeof result === "string";

  // Extract ID if result is an object
  const handleClick = () => {
    if (!isStringResult && handlePersonClick) {
      const id = extractIdFromUrl(result.url); // Use the utility function here
      handlePersonClick(id); // Pass only the ID
    }
  };

  return (
    <Box
      _hover={{
        bg: "brand.600",
        transition: "background-color 0.3s ease",
      }}
      borderRadius="md"
      bg="brand.200"
      boxShadow="base"
      onClick={handleClick} // Call the handler on click
      paddingLeft="3"
      paddingY="2"
      mb="1"
    >
      {isStringResult ? (
        <ExternalLinkItem link={result} />
      ) : (
        <InternalLinkItem name={result.name} />
      )}
    </Box>
  );
};

export default ResultItem;

// Utility function to extract the ID from the URL
const extractIdFromUrl = (url: string): string => {
  const matches = url.match(/\/people\/(\d+)\//); // Regex to match and extract ID
  return matches ? matches[1] : "";
};