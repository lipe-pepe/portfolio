import Image from "next/image";
import Link from "next/link";
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
          src={`/images/${image}`}
          alt={`${name} example image`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-md object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-start flex-3 gap-2">
        <div className="flex items-center gap-2 justify-between w-full">
          {link ? (
            <Link href={link} target="_blank">
              <div className="flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-highlight">
                <p className="font-medium text-white text-md">{name}</p>
                {link && <FiExternalLink />}
              </div>
            </Link>
          ) : (
            <p className="font-medium text-white text-md">{name}</p>
          )}

          {github && (
            <Link target="_blank" href={github}>
              <div className="text-white-darkest hover:text-white transition-colors duration-100">
                <FaGithub size={"24px"} />
              </div>
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
