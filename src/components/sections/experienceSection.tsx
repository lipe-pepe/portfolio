import { useTranslations } from "next-intl";
import Section from "./section";
import ExperienceItem from "./items/experienceItem";

const ExperienceSection = () => {
  const t = useTranslations("Experience");
  return (
    <Section title={t("title")}>
      <ExperienceItem
        name={t("3_name")}
        start="feb. 2026"
        end="oct. 2026"
        place={t("rj")}
        company="Digital Republic_ / Azzas 2154"
        companyLink="https://www.digitalrepublic.com.br/"
        description={[t("3_desc1"), t("3_desc2"), t("3_desc3"), t("3_desc4"), t("3_desc5")]}
      />
      <ExperienceItem
        name={t("2_name")}
        start="2023"
        end="2025"
        place={t("sp")}
        company="Exame Corporate Education"
        companyLink="https://corporate.exame.com/"
        description={[t("2_desc1"), t("2_desc2"), t("2_desc3"), t("2_desc4")]}
      />
      <ExperienceItem
        name={t("1_name")}
        start="2021"
        end="2022"
        place={t("rj")}
        company="Witseed"
        companyLink="https://play.witseed.com"
        description={[t("1_desc1"), t("1_desc2"), t("1_desc3")]}
      />
    </Section>
  );
};

export default ExperienceSection;
