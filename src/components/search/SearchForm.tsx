/**
 * A form for searching Star Wars characters.
 *
 * Props:
 * - `searchTerm`: The current search term.
 * - `handleSearch`: A function to execute when the form is submitted.
 * - `handleInputChange`: A function to execute when the user types in the input field.
 * - `showError`: A boolean indicating whether an error message should be shown.
 * - `setShowError`: A function to execute to set `showError` to the given value.
 * - `isLoading`: A boolean indicating whether the component is in a loading state.
 *
 * When the form is submitted, it calls `handleSearch` with the current value of
 * `searchTerm`. When the user types in the input field, it calls `handleInputChange`
 * with the event. If `showError` is true, it renders an error message instead of
 * a help text. If `isLoading` is true, it renders a loading animation.
 */

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/react";
import SearchButton from "../button/SearchButton";
import { FormText } from "../../constants";

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
          }}
          placeholder={FormText.PLACEHOLDER_TEXT}
        />
        <SearchButton
          handleSearch={handleSearch}
          setShowError={setShowError}
          searchTerm={searchTerm}
          isLoading={isLoading}
        />
      </Flex>
      {!showError ? (
        <FormHelperText>{FormText.HELPER_TEXT}</FormHelperText>
      ) : (
        <FormErrorMessage>{FormText.ERROR_TEXT}</FormErrorMessage>
      )}
    </FormControl>
  );
};
export default SearchForm;
