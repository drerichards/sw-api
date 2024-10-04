/**
 * A button component that triggers a search action and animates to show "Searching..." when in a loading state.
 *
 * Props:
 * - `handleSearch`: Function to execute when the button is clicked.
 * - `isLoading`: Controls the loading state and animation of the button.
 * - `searchTerm`: The current value of the search input.
 * - `setShowError`: Sets an error state if the search term is empty.
 *
 * @param {SearchButtonProps} props
 * @returns {JSX.Element} The animated search button.
 */

import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, FormEvent } from "react";

interface SearchButtonProps {
  handleSearch: (e: FormEvent) => void;
  isLoading: boolean;
  searchTerm: string;
  setShowError: (showError: boolean) => void;
}

const MotionButton = chakra(motion(Button));

const SearchButton: FC<SearchButtonProps> = ({
  handleSearch,
  isLoading,
  searchTerm,
  setShowError,
}) => {
  const handleSearchClick = (e: FormEvent) => {
    e.preventDefault();

    const hasError = !searchTerm.trim();
    setShowError(hasError);

    if (!hasError) {
      handleSearch(e);
    }
  };

  return (
    <MotionButton
      onClick={handleSearchClick}
      colorScheme="blue"
      borderStartRadius={0}
      paddingX={isLoading ? 8 : 4}
      initial={{ width: 48, paddingX: 4 }}
      animate={{ width: isLoading ? 150 : 48, paddingX: isLoading ? 8 : 4 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden", whiteSpace: "nowrap" }}
    >
      {isLoading ? <span>Searching...</span> : <SearchIcon />}
    </MotionButton>
  );
};

export default SearchButton;
