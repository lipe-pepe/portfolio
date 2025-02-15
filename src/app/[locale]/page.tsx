import ExperienceItem from "@/components/experienceItem";
import ProjectItem from "@/components/projectItem";
import SectionButton from "@/components/sectionButton";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return (
    <VStack textAlign={"center"} gap={32}>
      <VStack width={"50%"}>
        <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>
          {t("heading")}
        </Text>
        <Text fontWeight={"normal"} fontSize={"lg"} color={"gray.light"}>{`${t(
          "intro"
        )}${t("dev")}${t("intro_2")}`}</Text>
      </VStack>
      <HStack w={"100%"} alignItems={"start"} gap={12}>
        <Box flex={1}>
          <VStack alignItems={"start"}>
            <SectionButton text={t("about")} />
            <SectionButton text={t("experience")} />
            <SectionButton text={t("projects")} />
          </VStack>
        </Box>
        <VStack
          gap={40}
          flex={2}
          textAlign={"start"}
          fontSize={"md"}
          fontWeight={"normal"}
          color={"gray.base"}
        >
          <Box>
            <Text>{t("about_1")}</Text>
            <Text>{t("about_2")}</Text>
          </Box>
          <VStack w={"100%"}>
            <ExperienceItem
              name={t("experience_2_name")}
              start="2024"
              end="2025"
              place="São Paulo"
              company="Exame Corporate Education"
              description="FAZER AQUIIII"
            />
            <ExperienceItem
              name={t("experience_1_name")}
              start="2021"
              end="2024"
              place="Rio de Janeiro"
              company="Witseed"
              description="FAZER AQUIIII"
            />
          </VStack>
          <VStack>
            <ProjectItem name="Stiks!" image="example.jpg" />
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
