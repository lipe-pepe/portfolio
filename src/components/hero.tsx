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
        <p className="text-3xl sm:text-3xl md:text-4xl  font-bold text-white">
          {t("heading")}
        </p>
        <p className="text-md md:text-lg text-white-darkest">
          {t("intro")}
          <span className="text-white font-bold">{t("dev")}</span>
          {t("intro_2")}
        </p>
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
