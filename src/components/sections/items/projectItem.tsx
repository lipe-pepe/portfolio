import { Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

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
    <div className="flex items-start w-full gap-8">
      <div className="flex flex-1">
        <Image
          w={"100%"}
          objectFit="cover"
          borderRadius={6}
          src={`/images/${image}`}
          alt={`${name} example image`}
        />
      </div>

      <div className="flex flex-col justify-center items-start flex-3 gap-2">
        <div className="flex items-center gap-2 justify-between w-full">
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
              <div className="flex items-center gap-2">
                <p className="font-medium text-white text-md">{name}</p>
                {link && <FiExternalLink />}
              </div>
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
        </div>

        {description.map((d, index) => (
          <div key={`project_item_${name}_${index}`} className="my-2">
            <p className="text-sm">{d}</p>
          </div>
        ))}
        <div className="flex items-center gap-4">{children}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
