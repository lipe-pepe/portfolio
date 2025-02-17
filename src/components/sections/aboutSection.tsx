import { useTranslations } from "next-intl";
import Section from "./section";
import { Text } from "@chakra-ui/react";

const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <Section title={t("title")}>
      <Text fontSize={"sm"}>
        {t("about_0")}
        {t("about_1")}
        <Text as={"span"} fontWeight={"semibold"} color={"white"}>
          {t("things")}
        </Text>
      </Text>
      <Text fontSize={"sm"}>
        {t("about_2")}
        <Text as={"span"} fontWeight={"semibold"} color={"white"}>
          {t("creativity")}
        </Text>
        {t("about_3")}
        <Text as={"span"} fontWeight={"semibold"} color={"white"}>
          {t("happen")}
        </Text>
        {t("about_4")}
      </Text>
      <Text fontSize={"sm"}>{t("about_5")}</Text>
    </Section>
  );
};

export default AboutSection;
