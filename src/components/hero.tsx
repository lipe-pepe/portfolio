import { HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialMediaIcon from "./socialMediaIcon";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <VStack width={"100%"} my={32} gap={12}>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={"white.base"}>
        {t("heading")}
      </Text>
      <Text fontWeight="normal" fontSize="lg" color="white.dark">
        {t("intro")}
        <Text as="span" color="white" fontWeight="bold">
          {t("dev")}
        </Text>
        {t("intro_2")}
      </Text>
      <HStack width={"75%"} justifyContent={"space-evenly"}>
        <SocialMediaIcon size="32px" icon={<FaLinkedin size={"100%"} />} />
        <SocialMediaIcon size="32px" icon={<FaGithub size={"100%"} />} />
        <SocialMediaIcon size="32px" icon={<MdEmail size={"100%"} />} />
      </HStack>
    </VStack>
  );
};

export default Hero;
