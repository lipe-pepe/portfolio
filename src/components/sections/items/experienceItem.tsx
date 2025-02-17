import {
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface ExperienceItemProps {
  name: string;
  start: string;
  end: string;
  company: string;
  place: string;
  description: string[];
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
    <HStack w={"100%"} alignItems={"start"} gap={8} color={"white.darkest"}>
      <Text flex={1} textTransform={"uppercase"} fontSize={"sm"}>
        {start} — {end}
      </Text>
      <VStack flex={3} gap={2} alignItems={"start"}>
        <Text fontSize={"md"} color={"white"}>
          {name} • {company}
        </Text>
        <Text fontSize={"sm"}>{place}</Text>
        <UnorderedList fontSize={"sm"} mt={4} spacing={4}>
          {description.map((d, index) => (
            <ListItem key={`exp_item_${name}_${index}`}>{d}</ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </HStack>
  );
};

export default ExperienceItem;
