import React from "react";

interface AcademicItemProps {
  start: string;
  end: string;
  type?: string;
  place: string;
  name: string;
}

const AcademicItem: React.FC<AcademicItemProps> = ({
  type,
  place,
  name,
  start,
  end,
}: AcademicItemProps) => {
  return (
    <div className="flex items-start w-full gap-8 text-white-darkest">
      <p className="flex-1 text-sm">
        {start} — {end}
      </p>
      <div className="flex flex-col justify-center flex-3 items-start text-md">
        <div className="flex items-center gap-1">
          <p className="text-white font-medium" color={"white"}>
            {name}
          </p>
          {type && <p>• {type}</p>}
        </div>
        <p className="text-sm">{place}</p>
      </div>
    </div>
  );
};

export default AcademicItem;
