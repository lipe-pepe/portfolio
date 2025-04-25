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
          size="sm"
          icon={<FaLinkedin size={"100%"} />}
          link="https://www.linkedin.com/in/felipe-pepe/"
        />
        <SocialMediaIcon
          size="sm"
          icon={<FaGithub size={"100%"} />}
          link="https://github.com/lipe-pepe"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <SocialMediaIcon
          size="sm"
          icon={<MdEmail size={"100%"} />}
          link="mailto:felipepepe21@gmail.com"
        />
        <p>felipepepe21@gmail.com</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <MdPlace />
        <p>{t("location")}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
