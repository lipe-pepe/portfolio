import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialMediaIconProps {
  size: string[] | string;
  icon: ReactNode;
  link: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  size,
  icon,
  link,
}: SocialMediaIconProps) => {
  return (
    <Box
      cursor={"pointer"}
      boxSize={size}
      color={"white.darkest"}
      _hover={{
        color: "white.base",
        transform: "scale(1.05)",
        transition:
          "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
      }}
    >
      <a href={link} target="_blank">
        {icon}
      </a>
    </Box>
  );
};

export default SocialMediaIcon;
