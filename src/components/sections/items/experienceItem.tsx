import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
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
    <div className="flex justify-center items-start w-full gap-8 text-white-darkest">
      <p className="uppercase flex-1 text-xs sm:text-sm">
        {start} — {end}
      </p>
      <div className="flex flex-col items-start flex-3 gap-2">
        <div className="flex gap-2 items-center font-medium text-md flex-wrap">
          <p className="text-white">{name} •</p>
          <Link
            href={companyLink}
            isExternal
            _hover={{ color: "text", textDecoration: "underline" }}
          >
            <div className="flex gap-2 items-center flex-wrap">
              <p className="text-md">{company}</p>
              <FiExternalLink />
            </div>
          </Link>
        </div>

        <p className="text-sm">{place}</p>
        <UnorderedList fontSize={"sm"} mt={4} spacing={4}>
          {description.map((d, index) => (
            <ListItem key={`exp_item_${name}_${index}`}>{d}</ListItem>
          ))}
        </UnorderedList>
      </div>
    </div>
  );
};

export default ExperienceItem;
