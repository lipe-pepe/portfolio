import AcademicItem from "./items/academicItem";
import { useTranslations } from "next-intl";
import Section from "./section";

const AcademicSection = () => {
  const t = useTranslations("Academic");
  return (
    <Section title={t("title")}>
      <AcademicItem
        start="2023"
        end="2025 (previsão)"
        name={t("eci")}
        type={t("graduation")}
        place={t("ufrj")}
      />
      <AcademicItem
        start="2018"
        end="2022 (incompleto)"
        name={t("eletronic")}
        type={t("graduation")}
        place={t("ufrj")}
      />
      <AcademicItem
        start="2015"
        end="2017"
        name={t("highschool")}
        place={t("anglo")}
      />
    </Section>
  );
};

export default AcademicSection;
