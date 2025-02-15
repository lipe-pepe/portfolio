import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialMediaIconProps {
  size: string;
  icon: ReactNode;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  size,
  icon,
}: SocialMediaIconProps) => {
  return (
    <Box
      cursor={"pointer"}
      color={"gray.base"}
      boxSize={size}
      _hover={{
        color: "white",
        transform: "scale(1.05)",
        transition:
          "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
      }}
    >
      {icon}
    </Box>
  );
};

export default SocialMediaIcon;
