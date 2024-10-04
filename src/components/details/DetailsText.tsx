/**
 * A component for displaying a text attribute with optional margins.
 *
 * Props:
 * - `attributeTitle`: The title of the attribute.
 * - `attribute`: The value of the attribute (optional).
 * - `marginTop`, `marginBottom`, `marginY`: Control the component's margins.
 *
 * @param {DetailsTextProps} props - The props for the component.
 * @returns {JSX.Element} The rendered text for the attribute.
 */

import { Flex, Text } from "@chakra-ui/react";

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
    <Text
      fontSize="lg"
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginY={marginY}
    >
      <Flex alignItems="center">
        <b>{attributeTitle}:</b>
        {attribute && (
          <Text marginLeft={2} fontSize="md">
            {attribute}
          </Text>
        )}
      </Flex>
    </Text>
  );
};

export default DetailsText;
