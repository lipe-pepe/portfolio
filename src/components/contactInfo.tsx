import { HStack, Text, VStack } from "@chakra-ui/react";
import SocialMediaIcon from "./socialMediaIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("Contact");

  return (
    <VStack alignItems={"start"} gap={8}>
      <HStack gap={6}>
        <SocialMediaIcon
          size="24px"
          icon={<FaLinkedin size={"100%"} />}
          link="https://www.linkedin.com/in/felipe-pepe/"
        />
        <SocialMediaIcon
          size="24px"
          icon={<FaGithub size={"100%"} />}
          link="https://github.com/lipe-pepe"
        />
      </HStack>
      <HStack>
        <SocialMediaIcon
          size="24px"
          icon={<MdEmail size={"100%"} />}
          link="mailto:felipepepe21@gmail.com"
        />
        <Text>felipepepe21@gmail.com</Text>
      </HStack>
      <HStack>
        <MdPlace />
        <Text>{t("location")}</Text>
      </HStack>
    </VStack>
  );
};

export default ContactInfo;
