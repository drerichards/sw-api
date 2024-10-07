import { Container, Heading, Center, Text } from "@chakra-ui/react";
import { colors } from "../../../utils";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  background-color: white;
`;

export const StyledHeading = styled(Heading)`
  margin-top: 32px;
  margin-bottom: 8px;
`;

export const StyledCenter = styled(Center)`
  background-color: ${colors.brand[800]};
  height: 100px;
  border-radius: 8px;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled(Text)`
  font-size: 2.5rem;
`;

export const StyledSubtitle = styled(Text)`
  font-size: 1.25rem;
  margin-top: 8px;
`;
