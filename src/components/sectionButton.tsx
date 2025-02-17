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
      fontWeight={"normal"}
      textTransform={"uppercase"}
      letterSpacing={"widest"}
      _hover={{
        color: "text",
        fontWeight: "semibold",
        transition: "color 0.2s ease-in-out, font-weight 0.2s ease-in-out",
      }}
    >
      {text}
    </Text>
  );
};

export default SectionButton;
