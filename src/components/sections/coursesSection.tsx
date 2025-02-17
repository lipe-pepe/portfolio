import { useTranslations } from "next-intl";
import Section from "./section";
import CoursesItem from "./items/coursesItem";

const CoursesSection = () => {
  const t = useTranslations("Courses");
  return (
    <Section title={t("title")}>
      <CoursesItem name={t("eci")} place={"teste"} />
      <CoursesItem name={t("eletronic")} place={"teste"} />
      <CoursesItem name={t("highschool")} place={"teste"} />
    </Section>
  );
};

export default CoursesSection;
