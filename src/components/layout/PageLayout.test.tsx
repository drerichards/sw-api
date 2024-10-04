/**
 * A mock for the ChakraProvider component from the @chakra-ui/react library.
 * This mock is required because the ChakraProvider component is a context
 * provider and Jest does not support mocking context providers.
 *
 * This mock wraps children components in a div with the data-testid "chakra-provider".
 * This helps test components that rely on ChakraProvider without dealing with the actual context.
 *
 * @param {React.ReactNode} props - The children components to render inside the mock.
 * @returns {JSX.Element} A div with the data-testid "chakra-provider" containing the children.
 */

import { render, screen } from "@testing-library/react";
import PageLayout from "./PageLayout";
import React from "react";

jest.mock("@chakra-ui/react", () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
  Heading: ({ children }: { children: React.ReactNode }) => <h1>{children}</h1>,
  Center: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Text: ({ children }: { children: React.ReactNode }) => (
    <span>{children}</span>
  ),
}));

describe("PageLayout component", () => {
  it("renders with children", () => {
    const children = <div>Test Children</div>;
    render(<PageLayout>{children}</PageLayout>);
    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("renders heading text correctly", () => {
    render(<PageLayout>{null}</PageLayout>);

    expect(screen.getByText("Swapi")).toBeInTheDocument();
    expect(screen.getByText("Search Star Wars Characters")).toBeInTheDocument();
  });
});
