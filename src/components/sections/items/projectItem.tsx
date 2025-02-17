import { AspectRatio, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface ProjectItemProps {
  image: string;
  name: string;
  description: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  image,
  name,
  description,
}: ProjectItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8}>
      <AspectRatio ratio={16 / 9} flex={1}>
        <Image
          objectFit="cover"
          borderRadius={6}
          src={`/images/${image}`}
          alt={`${name} example image`}
        />
      </AspectRatio>

      <VStack flex={3} alignItems={"start"}>
        <Text fontSize={"lg"}>{name}</Text>
        {description.map((d, index) => (
          <Text key={`project_item_${name}_${index}`}>{d}</Text>
        ))}
      </VStack>
    </HStack>
  );
};

export default ProjectItem;
