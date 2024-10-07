import { Card, Box, Flex, Heading, Text, Container } from "@chakra-ui/react";
import { colors } from "../../../utils";
import styled from "styled-components";

export const StyledDetailsTextContainer = styled(Container)`
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-top: ${({ marginY }) => marginY || 0}px;
`;

export const StyledDetailsText = styled(Text)`
  font-size: 1.125rem;
`;

export const StyledDetailsFlex = styled(Flex)`
  align-items: center;
`;

export const StyledDetailsCard = styled(Card)`
  border-top: 8px solid ${colors.brand[800]};
  border-radius: 8px;
`;

export const StyledBox = styled(Box)`
  border: 1px solid ${colors.brand[200]};
  padding: 12px;
`;

export const StyledHeading = styled(Heading)`
  font-size: 1.25rem;
`;

export const StyledDetailsCardFlex = styled(Flex)`
  align-items: center;
  margin-left: 8px;
`;

export const StyledDetailsCardText = styled(Text)`
  margin-left: 8px;
  font-size: 1rem;
`;
