import ExperienceItem from "@/components/experienceItem";
import Hero from "@/components/hero";
import SectionButton from "@/components/sectionButton";
import SocialMediaIcon from "@/components/socialMediaIcon";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      {/* Hero */}
      <Center
        scrollSnapAlign="start" // Define o ponto de snap
      >
        <Box h={"100vh"} w={"50%"}>
          <Hero />
        </Box>
      </Center>
      {/* Content */}
      <HStack
        w={"100%"}
        alignItems={"start"}
        gap={12}
        color={"white.darkest"}
        height="auto"
        scrollSnapAlign="start" // Define que este elemento será o próximo snap
      >
        {/* Indexes */}
        <VStack
          paddingY={24}
          h={"100vh"}
          flex={1}
          alignItems={"start"}
          justifyContent={"space-between"}
          position="sticky" // Mantém fixo ao rolar
          top="0" // Fixa no topo da págin
        >
          <VStack alignItems={"start"}>
            <SectionButton text={t("about")} />
            <SectionButton text={t("experience")} />
            <SectionButton text={t("projects")} />
          </VStack>
          <VStack alignItems={"start"}>
            <HStack>
              <SocialMediaIcon
                size="24px"
                icon={<MdEmail size={"100%"} />}
                link="mailto:felipepepe21@gmail.com"
              />
              <Text>felipepepe21@gmail.com</Text>
            </HStack>

            <HStack gap={6}>
              <SocialMediaIcon
                size="24px"
                icon={<FaLinkedin size={"100%"} />}
                link="https://www.linkedin.com/in/felipe-pepe/"
              />
              <SocialMediaIcon
                size="24px"
                icon={<FaGithub size={"100%"} />}
                link="https://github.com/lipe-pepe"
              />
            </HStack>
          </VStack>
        </VStack>
        {/* Sections */}
        <VStack
          paddingY={24}
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
