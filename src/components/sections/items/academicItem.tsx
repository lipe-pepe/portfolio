import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface AcademicItemProps {
  start: string;
  end: string;
  type?: string;
  place: string;
  name: string;
}

const AcademicItem: React.FC<AcademicItemProps> = ({
  type,
  place,
  name,
  start,
  end,
}: AcademicItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8} color={"white.darkest"}>
      <Text flex={1} textTransform={"uppercase"} fontSize={"sm"}>
        {start} — {end}
      </Text>
      <VStack flex={3} alignItems={"start"} fontSize={"md"}>
        <HStack>
          <Text color={"white"} fontWeight={"medium"}>
            {name}
          </Text>
          {type && <Text>• {type}</Text>}
        </HStack>

        <Text fontSize={"sm"}>{place}</Text>
      </VStack>
    </HStack>
  );
};

export default AcademicItem;
