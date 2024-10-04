/**
 * A component that displays a link to an internal page.
 *
 * It takes in a `name` prop which is the name of the internal page.
 *
 * The component displays the name of the page with a chevron right icon
 * preceding it, and a pointer cursor when hovered.
 *
 * @param {{ name: string }} props - The props to pass to the component.
 * @returns {JSX.Element} The JSX element to render.
 */

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface InternalLinkItemProps {
  name: string;
}
const InternalLinkItem = ({ name }: InternalLinkItemProps) => {
  return (  <Flex alignItems="center" cursor="pointer">
    <ChevronRightIcon marginRight={2} />
    <Text fontSize="lg" cursor="pointer">
      {name}
    </Text>
  </Flex>)
}



export default InternalLinkItem;
