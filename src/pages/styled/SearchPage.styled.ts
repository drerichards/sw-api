import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "../../utils";

export const StyledErrorText = styled.p`
  color: red;
  font-size: 1rem;
`;

export const StyledBox = styled(Box)`
  border: 1px solid ${colors.brand[200]};
  padding: 12px;
`;

export const StyledPageContainer = styled.div`
  border-top: 8px solid ${colors.brand[800]};
  border-radius: 8px;
  margin-top: 32px;
`;

export const StyledMotionBox = styled(motion(Box))`
  border-color: ${colors.brand[200]};
  padding: 0;
  border-radius: 8px;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.brand[600]};
  }
`;
