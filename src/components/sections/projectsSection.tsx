import { useTranslations } from "next-intl";
import Section from "./section";
import ProjectItem from "./items/projectItem";

const ProjectsSection = () => {
  const t = useTranslations("Projects");
  return (
    <Section title={t("title")}>
      <ProjectItem
        image={"stiks.png"}
        name={"Stiks!"}
        description={[t("stiks_desc1"), t("stiks_desc2")]}
      />
    </Section>
  );
};

export default ProjectsSection;
