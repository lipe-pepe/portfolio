import { Text } from "@chakra-ui/react";
import React from "react";

interface SectionButtonProps {
  text: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  text,
}: SectionButtonProps) => {
  return (
    <Text
      color={"white.dark"}
      cursor={"pointer"}
      fontSize={"sm"}
      fontWeight={"regular"}
      textTransform={"uppercase"}
      letterSpacing={"widest"}
      _hover={{
        color: "text",
        fontWeight: "semibold",
        transform: "scale(1.05)",
        transition:
          "transform 0.2s ease-in-out, color 0.2s ease-in-out, font-weight 0.2s ease-in-out",
      }}
    >
      {text}
    </Text>
  );
};

export default SectionButton;
