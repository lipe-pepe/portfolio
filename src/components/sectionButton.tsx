import React from "react";

interface SectionButtonProps {
  text: string;
  onClick: () => void;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  text,
  onClick,
}: SectionButtonProps) => {
  return (
    <button onClick={onClick}>
      <p className="text-white-dark text-sm uppercase font-normal tracking-widest transition-colors duration-200 ease-in-out hover:text-highlight hover:font-semibold cursor-pointer">
        {text}
      </p>
    </button>
  );
};

export default SectionButton;
