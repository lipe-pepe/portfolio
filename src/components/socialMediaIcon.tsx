import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialMediaIconProps {
  icon: ReactNode;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  icon,
}: SocialMediaIconProps) => {
  return (
    <Box
      cursor={"pointer"}
      color={"gray.base"}
      boxSize={"20px"}
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
