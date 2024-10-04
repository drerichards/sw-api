/**
 * Renders a page layout with a fixed heading and a main content area.
 *
 * Props:
 * - `children`: The content to display inside the main content area.
 *
 * @param {PageLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered page layout component.
 */

import { Container, Heading, Center, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container bg="white">
      <Heading marginTop={8} marginBottom={2}>
        <Center
          bg="brand.800"
          h="100px"
          borderRadius="md"
          color="white"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text as="h1" fontSize="4xl">
            Swapi
          </Text>
          <Text as="h3" fontSize="lg" marginTop={2}>
            Search Star Wars Characters
          </Text>
        </Center>
      </Heading>
      <main>{children}</main>
    </Container>
  );
};

export default PageLayout;
