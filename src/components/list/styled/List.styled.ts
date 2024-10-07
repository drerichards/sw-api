import { Box, Flex, Text, Card, CardBody } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "styled-components";

export const StyledCardContainer = styled(Card)`
  margin-top: 8px;
  box-shadow: none;
`;

export const StyledCardBody = styled(CardBody)`
  padding: 0px;
`;

export const StyledBoxContainer = styled(Box)`
  background-color: #e2e8f0;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  padding-left: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 4px;
  transition: background-color 0.3s ease;

  /* &:hover {
    background-color: #2b6cb0;
    cursor: pointer;
  } */
`;

export const StyledFlex = styled(Flex)`
  align-items: center;
  cursor: pointer;
`;

export const StyledText = styled(Text)`
  font-size: 18px;
  cursor: pointer;
  margin-right: 8px;
`;

export const ChevronIcon = styled(ChevronRightIcon)`
  margin-right: 8px;
`;
