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
      color={"gray.lightest"}
      cursor={"pointer"}
      fontSize={"sm"}
      fontWeight={"semibold"}
      textTransform={"uppercase"}
      letterSpacing={"widest"}
    >
      {text}
    </Text>
  );
};

export default SectionButton;
