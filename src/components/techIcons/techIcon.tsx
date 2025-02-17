import { Center, Tooltip } from "@chakra-ui/react";
import React from "react";

interface TechIconProps {
  name: string;
  icon: React.ReactNode;
  hoverColor: string;
}
const TechIcon: React.FC<TechIconProps> = ({
  name,
  icon,
  hoverColor,
}: TechIconProps) => {
  return (
    <Center w={6} h={6} _hover={{ color: hoverColor }}>
      <Tooltip
        bgColor={"transparent"}
        shadow={"none"}
        fontSize={"xs"}
        fontWeight={"normal"}
        label={name}
      >
        {icon}
      </Tooltip>
    </Center>
  );
};

export default TechIcon;
