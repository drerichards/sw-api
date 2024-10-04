/**
 * Displays a card with detailed information about a Star Wars character.
 * Renders the character's name, height, weight, and films, or shows a fallback message if no details are available.
 *
 * Props:
 * - `person`: The Star Wars character object (optional).
 * - `searchedPersonName`: The fallback name if the character is not found.
 *
 * @param {DetailsCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered card with the character details or a fallback message.
 */

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { metricToImperialHeight, metricToImperialWeight } from "../../helpers";
import ResultsList from "../../components/list/ResultsList";
import { StarWarsPerson } from "../../types";
import DetailsText from "./DetailsText";

interface DetailsCardProps {
  person?: StarWarsPerson;
  searchedPersonName: string;
}

const DetailsCard = ({ person, searchedPersonName }: DetailsCardProps) => {
  return (
    <Card borderTop="8px" borderColor="brand.800" borderRadius="md">
      <Box border="1px" borderColor="gray.200" padding="3">
        <CardHeader>
          <Heading size={"md"}>
            Details of {person?.name || searchedPersonName || "Unknown Person"}
          </Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          {person ? (
            <Box>
              <DetailsText
                attributeTitle="Name"
                attribute={person.name}
                marginTop={1}
                marginBottom={3}
              />
              <DetailsText
                attributeTitle="Height"
                attribute={metricToImperialHeight(person.height)}
                marginY={3}
              />
              <DetailsText
                attributeTitle="Weight"
                attribute={metricToImperialWeight(person.mass)}
                marginY={3}
              />
              <DetailsText
                attributeTitle="Film(s)"
                marginTop={3}
                marginBottom={1}
              />
              <ResultsList results={person.films} />
            </Box>
          ) : (
            <Text fontSize="lg" marginY={3}>
              No details available for {searchedPersonName || "Unknown Person"}
            </Text>
          )}
        </CardBody>
      </Box>
    </Card>
  );
};

export default DetailsCard;
