import { ReactNode } from "react";

interface SocialMediaIconProps {
  size: "sm" | "md";
  icon: ReactNode;
  link: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  size,
  icon,
  link,
}: SocialMediaIconProps) => {
  return (
    <div
      className={`cursor-pointer text-white/70 hover:text-white transition-transform duration-200 hover:scale-105`}
      style={{ width: size === "sm" ? "24px" : "32px" }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};

export default SocialMediaIcon;
