/**
 * If `person` is provided, it renders a card with the person's name, height,
 * weight, and a list of films they appear in. If `person` is not provided, it
 * renders a card with a message indicating that no details are available.
 *
 * @param {DetailsCardProps} props - An object with a `StarWarsPerson` property.
 *
 * @returns {JSX.Element} A JSX element representing the component.
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
import { ErrorMessages } from "../../constants";
import { StarWarsPerson } from "../../types";
import { Flex } from "@chakra-ui/react";
import DetailsText from "./DetailsText";

interface DetailsCardProps {
  person?: StarWarsPerson;
}

const DetailsCard = ({ person }: DetailsCardProps) => {
  return (
    <Card borderTop="8px" borderColor="brand.800" borderRadius="md">
      <Box border="1px" borderColor="gray.200" padding="3">
        <CardHeader>
          <Heading size={"md"}>
            {person?.name ? `Details for ${person?.name}` : "Unknown Person"}
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
                attribute={
                  person.mass !== "unknown"
                    ? metricToImperialWeight(person.mass)
                    : "Unknown"
                }
                marginY={3}
              />
              <DetailsText
                attributeTitle="Film(s)"
                marginTop={3}
                marginBottom={1}
              />
              <>
                {person.filmTitles &&
                  person.filmTitles.map((filmTitle) => (
                    <Flex
                      key={filmTitle.split(" ").join("-")}
                      alignItems="center"
                      marginLeft={6}
                    >
                      <span style={{ marginRight: "3px" }}>&#8226;</span>
                      <Text marginLeft={2} fontSize="md">
                        {filmTitle}
                      </Text>
                    </Flex>
                  ))}
              </>
            </Box>
          ) : (
            <Text fontSize="lg" marginY={3}>
              {ErrorMessages.UNKNOWN_PERSON_TEXT}
            </Text>
          )}
        </CardBody>
      </Box>
    </Card>
  );
};

export default DetailsCard;
