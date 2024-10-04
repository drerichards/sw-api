/**
 * A form for searching Star Wars characters by name.
 *
 * It includes an input field for the search term, a button to submit the form, and helper text or error messages
 * depending on the state.
 *
 * Props:
 * - `searchTerm`: The current value of the search input.
 * - `handleSearch`: Function to handle form submission.
 * - `handleInputChange`: Function to handle changes in the search input.
 * - `showError`: Boolean that indicates whether an error is shown.
 * - `setShowError`: Function to update the error state.
 * - `isLoading`: Boolean indicating whether the search is in progress.
 *
 * @param {SearchFormProps} props - The props for the component.
 * @returns {JSX.Element} The rendered search form.
 */

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/react";
import SearchButton from "../button/SearchButton";

interface SearchFormProps {
  searchTerm: string;
  handleSearch: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showError: boolean;
  setShowError: (showError: boolean) => void;
  isLoading: boolean;
}

const SearchForm = ({
  searchTerm,
  handleSearch,
  handleInputChange,
  showError,
  setShowError,
  isLoading,
}: SearchFormProps) => {
  return (
    <FormControl
      marginTop={8}
      isInvalid={showError}
      onSubmit={handleSearch}
      marginY={4}
    >
      <Flex>
        <Input
          type="text"
          value={searchTerm}
          variant="filled"
          borderEndRadius={0}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
            setShowError(false); // Resets error as user types
          }}
          placeholder="May the Force be with you..."
        />
        <SearchButton
          handleSearch={handleSearch}
          setShowError={setShowError}
          searchTerm={searchTerm}
          isLoading={isLoading}
        />
      </Flex>
      {!showError ? (
        <FormHelperText>
          Enter a character name (e.g., Luke Skywalker)
        </FormHelperText>
      ) : (
        <FormErrorMessage>A name is required</FormErrorMessage>
      )}
    </FormControl>
  );
};
export default SearchForm;
