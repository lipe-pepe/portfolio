import { Text } from "@chakra-ui/react";
import SocialMediaIcon from "./socialMediaIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";
import { useTranslations } from "next-intl";

const ContactInfo = () => {
  const t = useTranslations("Contact");

  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex justify-center gap-6">
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
      </div>
      <div className="flex justify-center items-center gap-2">
        <SocialMediaIcon
          size="24px"
          icon={<MdEmail size={"100%"} />}
          link="mailto:felipepepe21@gmail.com"
        />
        <Text>felipepepe21@gmail.com</Text>
      </div>
      <div className="flex justify-center items-center gap-2">
        <MdPlace />
        <Text>{t("location")}</Text>
      </div>
    </div>
  );
};

export default ContactInfo;
