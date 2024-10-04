/**
 * A component that displays a list of search results.
 *
 * Props:
 * - `results`: An array of search results, where each result is either a string or a `StarWarsPerson` object with an `id`.
 * - `handlePersonClick`: An optional function that takes the ID of a person and navigates to their details page.
 *
 * The component renders a list of `ResultItem` components for each result. If `handlePersonClick` is provided,
 * it will be passed to each `ResultItem` to handle clicks on the search results.
 *
 * @param {ResultsListProps} props - The props for the component.
 * @returns {JSX.Element} The rendered list of search results.
 */

import { StarWarsPerson } from "../../types/index";
import { Card, CardBody } from "@chakra-ui/react";
import ResultItem from "./ResultItem";

interface ResultsListProps {
  results: StarWarsPerson[] | string[];
  handlePersonClick?: (id: string) => void;
}

const ResultsList = ({ results, handlePersonClick }: ResultsListProps) => {
  return (
    <Card marginTop={2} boxShadow="none">
      <CardBody padding="0">
        {results.map((result) => (
          <ResultItem
            key={typeof result === "string" ? result : result.id}
            result={result}
            handlePersonClick={handlePersonClick}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default ResultsList;
