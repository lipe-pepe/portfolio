"use client";

import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Animação para a setinha (pulsar para baixo)
const bounceAnimation = keyframes`
  0% { transform: translateY(0); opacity: 0.8; }
  50% { transform: translateY(10px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.8; }
`;

const ScrollIndicator = () => {
  return (
    <Box
      as={motion.div} // Chakra + Framer Motion
      animation={`${bounceAnimation} 1.5s infinite`} // Aplica animação
    >
      <ChevronDownIcon boxSize={16} color="white" />
    </Box>
  );
};

export default ScrollIndicator;
