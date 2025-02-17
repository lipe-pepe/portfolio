import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface CoursesItemProps {
  name: string;
  place: string;
}

const CoursesItem: React.FC<CoursesItemProps> = ({
  place,
  name,
}: CoursesItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8} color={"white.darkest"}>
      <VStack flex={3} alignItems={"start"}>
        <Text fontSize={"lg"} color={"white.dark"}>
          {name}
        </Text>
        <Text fontSize={"sm"}>{place}</Text>
      </VStack>
    </HStack>
  );
};

export default CoursesItem;
