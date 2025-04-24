import { Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialMediaIcon from "./socialMediaIcon";
import { useTranslations } from "next-intl";
import ScrollIndicator from "./scrollIndicator";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col items-center relative h-full w-full gap-12 justify-center">
      <div className="flex flex-col items-center justify-center w-full sm:gap-8 md:gap-12">
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
        <div className="flex justify-evenly items-center w-3/4">
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
        </div>
      </div>
      <div className="flex justify-center items-center absolute bottom-12">
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Hero;
