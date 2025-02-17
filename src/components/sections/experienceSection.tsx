import { useTranslations } from "next-intl";
import Section from "./section";
import ExperienceItem from "./items/experienceItem";

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  return (
    <Section title={t("title")}>
      <ExperienceItem
        name={t("2_name")}
        start="2024"
        end="2025"
        place={t("sp")}
        company="Exame Corporate Education"
        companyLink="https://corporate.exame.com/"
        description={[t("2_desc1"), t("2_desc2"), t("2_desc3")]}
      />
      <ExperienceItem
        name={t("1_name")}
        start="2021"
        end="2024"
        place={t("rj")}
        company="Witseed"
        companyLink="https://play.witseed.com"
        description={[t("1_desc1")]}
      />
    </Section>
  );
};

export default ExperienceSection;
