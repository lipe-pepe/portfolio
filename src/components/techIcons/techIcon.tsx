import React, { useState } from "react";

interface TechIconProps {
  name: string;
  icon: React.ReactNode;
  hoverColor: string;
}
const TechIcon: React.FC<TechIconProps> = ({
  name,
  icon,
  hoverColor,
}: TechIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex relative justify-center items-center w-6 h-6 transition-colors duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? hoverColor : undefined }}
    >
      {icon}

      <p
        className={`text-white text-xs font-light absolute top-8 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default TechIcon;
