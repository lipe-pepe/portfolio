import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  HStack,
  Link,
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
  companyLink: string;
  place: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  name,
  start,
  end,
  company,
  companyLink,
  place,
  description,
}: ExperienceItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8} color={"white.darkest"}>
      <Text flex={1} textTransform={"uppercase"} fontSize={["xs", "sm"]}>
        {start} — {end}
      </Text>
      <VStack flex={3} gap={2} alignItems={"start"}>
        <HStack wrap={"wrap"} fontWeight={"medium"} fontSize={"md"}>
          <Text color={"white"}>{name} •</Text>
          <Link
            href={companyLink}
            isExternal
            _hover={{ color: "text", textDecoration: "underline" }}
          >
            <HStack wrap={"wrap"}>
              <Text fontSize={"md"}>{company}</Text>
              <ExternalLinkIcon />
            </HStack>
          </Link>
        </HStack>

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
