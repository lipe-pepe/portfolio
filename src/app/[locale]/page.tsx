import ExperienceItem from "@/components/experienceItem";
import Hero from "@/components/hero";
import SectionButton from "@/components/sectionButton";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  const paddingX = ["24rem"];

  return (
    <VStack
      px={paddingX}
      textAlign={"center"}
      overflowY="scroll"
      height="100vh"
      scrollSnapType="y mandatory" // Ativa o scroll snap no eixo Y
    >
      <Center
        scrollSnapAlign="start" // Define o ponto de snap
      >
        <Box h={"100vh"} w={"50%"}>
          <Hero />
        </Box>
      </Center>
      <HStack
        w={"100%"}
        alignItems={"start"}
        gap={12}
        color={"white.darkest"}
        height="auto"
        scrollSnapAlign="start" // Define que este elemento será o próximo snap
      >
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
        >
          <Box>
            <Text>{t("about_1")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
            <Text>{t("about_2")}</Text>
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
          {/* <VStack>
            <ProjectItem name="Stiks!" image="example.jpg" />
          </VStack> */}
        </VStack>
      </HStack>
    </VStack>
  );
}
