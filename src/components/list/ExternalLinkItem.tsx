/**
 * A component that displays a link to an external URL.
 *
 * It takes in a `link` prop which is the URL to link to.
 * The component renders a Chakra UI Flex component with an ExternalLinkIcon
 * and a Text component containing the link.
 *
 * The component also sets the `target` prop to `_blank` and the `rel` prop to
 * `noopener noreferrer` to prevent the page from being opened in a new tab and
 * to prevent the new page from having access to the current page's data.
 *
 * @prop {string} link - The URL to link to.
 * @returns {JSX.Element} The element to render.
 */

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Text, Link } from "@chakra-ui/react";

const ExternalLinkItem = ({ link }: { link: string }) => (
  <Link
    bg="brand.200"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Flex alignItems="center">
      <ExternalLinkIcon marginRight={2} />
      <Text fontSize="md">{link}</Text>
    </Flex>
  </Link>
);

export default ExternalLinkItem;
