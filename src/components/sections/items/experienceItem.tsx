import { HStack, List, ListItem, Text, VStack } from "@chakra-ui/react";
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
      <Text flex={1} textTransform={"uppercase"}>
        {start} — {end}
      </Text>
      <VStack flex={3} alignItems={"start"}>
        <Text fontSize={"lg"} color={"white.dark"}>
          {name} • {company}
        </Text>
        <Text fontSize={"sm"}>{place}</Text>
        <List>
          {description.map((d, index) => (
            <ListItem key={`exp_item_${name}_${index}`}>{d}</ListItem>
          ))}
        </List>
      </VStack>
    </HStack>
  );
};

export default ExperienceItem;
