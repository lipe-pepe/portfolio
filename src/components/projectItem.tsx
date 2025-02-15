import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ProjectItemProps {
  image: string;
  name: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  image,
  name,
}: ProjectItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"}>
      <Box flex={1}>
        <Image src={`/images/${image}`} alt={`${name} example image`} />
      </Box>

      <VStack flex={3} alignItems={"start"}>
        <Text>{name}</Text>
      </VStack>
    </HStack>
  );
};

export default ProjectItem;
