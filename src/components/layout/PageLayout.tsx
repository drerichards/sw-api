/**
 * Renders a page layout with a fixed heading and a main content area.
 *
 * Props:
 * - `children`: The content to display inside the main content area.
 *
 * @param {PageLayoutProps} props
 * @returns {JSX.Element} The rendered page layout component.
 */

import {
  StyledContainer,
  StyledHeading,
  StyledCenter,
  StyledTitle,
  StyledSubtitle,
} from "./styled/PageLayout.styled";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <StyledContainer>
      <StyledHeading>
        <StyledCenter>
          <StyledTitle as="h1">Swapi</StyledTitle>
          <StyledSubtitle as="h3">Search Star Wars Characters</StyledSubtitle>
        </StyledCenter>
      </StyledHeading>
      <main>{children}</main>
    </StyledContainer>
  );
};

export default PageLayout;
