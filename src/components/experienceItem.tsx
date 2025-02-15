import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ExperienceItemProps {
  name: string;
  start: string;
  end: string;
  company: string;
  place: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  name,
  start,
  end,
  company,
  place,
  description,
}: ExperienceItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8}>
      <Text flex={1} textTransform={"uppercase"}>
        {start} — {end}
      </Text>
      <VStack flex={3} alignItems={"start"}>
        <Text>
          {name} • {company}
        </Text>
        <Text>{place}</Text>
        <Text>{description}</Text>
      </VStack>
    </HStack>
  );
};

export default ExperienceItem;
