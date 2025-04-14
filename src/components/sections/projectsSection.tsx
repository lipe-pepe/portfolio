import { useTranslations } from "next-intl";
import Section from "./section";
import ProjectItem from "./items/projectItem";
import NextIcon from "../techIcons/nextjs";
import JavascriptIcon from "../techIcons/javascript";
import NodeIcon from "../techIcons/node";
import MongoIcon from "../techIcons/mongo";
import TailwindIcon from "../techIcons/tailwind";

const ProjectsSection = () => {
  const t = useTranslations("Projects");
  return (
    <Section title={t("title")}>
      <ProjectItem
        image={"server-components.png"}
        name={"Server Components"}
        description={[t("sc_desc1"), t("sc_desc2")]}
        link="https://nextjs-server-components-wine.vercel.app/"
        github="https://github.com/lipe-pepe/nextjs-server-components"
      >
        <NextIcon />
        <TailwindIcon />
      </ProjectItem>
      <ProjectItem
        image={"stiks.png"}
        name={"Stiks!"}
        description={[t("stiks_desc1"), t("stiks_desc2")]}
        link="https://stiks-frontend-production.up.railway.app"
        github="https://github.com/lipe-pepe/stiks-backend"
      >
        <JavascriptIcon /> <NodeIcon /> <NextIcon /> <MongoIcon />
      </ProjectItem>
      <ProjectItem
        image={"criasound.png"}
        name={"Criasound"}
        description={[t("criasound_desc1")]}
        link="https://www.criasound.com/music"
      >
        <NextIcon />
      </ProjectItem>
      <ProjectItem
        image={"personal_site.png"}
        name={t("personal_site")}
        description={[t("personal_site_desc1")]}
        github="https://github.com/lipe-pepe/personal-site"
      >
        <JavascriptIcon />
        <NextIcon />
        <TailwindIcon />
      </ProjectItem>
    </Section>
  );
};

export default ProjectsSection;
