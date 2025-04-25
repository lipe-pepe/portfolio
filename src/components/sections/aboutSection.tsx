import { useTranslations } from "next-intl";
import Section from "./section";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <Section title={t("title")}>
      <p className="text-sm">
        {t("about_0")}
        {t("about_1")}
        <span className="font-semibold text-white">{t("things")}</span>
      </p>
      <p className="text-sm">
        {t("about_2")}
        <span className="font-semibold text-white">{t("creativity")}</span>

        {t("about_3")}

        <span className="font-semibold text-white">{t("happen")}</span>

        {t("about_4")}
      </p>
      <p className="text-sm">{t("about_5")}</p>
    </Section>
  );
};

export default AboutSection;
