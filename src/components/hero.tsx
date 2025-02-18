import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialMediaIcon from "./socialMediaIcon";
import { useTranslations } from "next-intl";
import ScrollIndicator from "./scrollIndicator";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <VStack
      position={"relative"}
      height={"100%"}
      width={"100%"}
      gap={12}
      justifyContent={"center"}
    >
      <VStack width={"100%"} gap={[8, 12]}>
        <Text
          fontSize={["xl", "xl", "2xl"]}
          fontWeight={"bold"}
          color={"white.base"}
        >
          {t("heading")}
        </Text>
        <Text
          fontWeight="normal"
          fontSize={["md", "md", "lg"]}
          color="white.darkest"
        >
          {t("intro")}
          <Text as="span" color="white" fontWeight="bold">
            {t("dev")}
          </Text>
          {t("intro_2")}
        </Text>
        <HStack width={"75%"} justifyContent={"space-evenly"}>
          <SocialMediaIcon
            size={["24px", "24px", "32px"]}
            icon={<FaLinkedin size={"100%"} />}
            link="https://www.linkedin.com/in/felipe-pepe/"
          />
          <SocialMediaIcon
            size={["24px", "24px", "32px"]}
            icon={<FaGithub size={"100%"} />}
            link="https://github.com/lipe-pepe"
          />
          <SocialMediaIcon
            size={["24px", "24px", "32px"]}
            icon={<MdEmail size={"100%"} />}
            link="mailto:felipepepe21@gmail.com"
          />
        </HStack>
      </VStack>
      <Center position={"absolute"} bottom={12}>
        <ScrollIndicator />
      </Center>
    </VStack>
  );
};

export default Hero;
