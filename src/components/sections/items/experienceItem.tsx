import { FiExternalLink } from "react-icons/fi";
import React from "react";
import Link from "next/link";

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
          <Link href={companyLink} target="_blank">
            <div className="flex gap-2 items-center flex-wrap hover:text-highlight hover:underline">
              <p className="text-md">{company}</p>
              <FiExternalLink />
            </div>
          </Link>
        </div>

        <p className="text-sm">{place}</p>
        <ul className="text-sm mt-4 space-y-4 list-disc list-inside">
          {description.map((d, index) => (
            <li key={`exp_item_${name}_${index}`}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
