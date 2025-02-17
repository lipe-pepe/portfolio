import { useTranslations } from "next-intl";
import Section from "./section";
import { Text } from "@chakra-ui/react";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <Section title={t("title")}>
      <Text>
        {t("about_0")}
        {t("ufrj")}
        {t("about_1")}
      </Text>
      <Text>
        {t("about_2")}
        {t("creativity")}
        {t("about_3")}
      </Text>
      <Text>{t("about_4")}</Text>
    </Section>
  );
};

export default AboutSection;
