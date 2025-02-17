import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectItemProps {
  image: string;
  name: string;
  description: string[];
  link?: string;
  github?: string;
  children: React.ReactNode;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  image,
  name,
  description,
  link,
  github,
  children,
}: ProjectItemProps) => {
  return (
    <HStack w={"100%"} alignItems={"start"} gap={8}>
      <Flex flex={1}>
        <Image
          w={"100%"}
          objectFit="cover"
          borderRadius={6}
          src={`/images/${image}`}
          alt={`${name} example image`}
        />
      </Flex>

      <VStack flex={3} alignItems={"start"}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          {link ? (
            <Link
              href={link}
              isExternal
              _hover={{
                color: "text",
                transform: "scale(1.05)",
                transition:
                  "transform 0.2s ease-in-out, color 0.2s ease-in-out",
              }}
            >
              <HStack>
                <Text fontWeight={"medium"} color={"white"} fontSize={"md"}>
                  {name}
                </Text>
                {link && <ExternalLinkIcon />}
              </HStack>
            </Link>
          ) : (
            <Text fontWeight={"medium"} color={"white"} fontSize={"md"}>
              {name}
            </Text>
          )}

          {github && (
            <Link
              target="_blank"
              href={github}
              color={"white.darkest"}
              _hover={{ color: "white" }}
            >
              <FaGithub size={"24px"} />
            </Link>
          )}
        </HStack>

        {description.map((d, index) => (
          <Text my={2} key={`project_item_${name}_${index}`} fontSize={"sm"}>
            {d}
          </Text>
        ))}
        <HStack gap={4}>{children}</HStack>
      </VStack>
    </HStack>
  );
};

export default ProjectItem;
