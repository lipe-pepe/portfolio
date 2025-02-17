"use client";

import AcademicSection from "@/components/sections/academicSection";
import Hero from "@/components/hero";
import SectionButton from "@/components/sectionButton";
import SocialMediaIcon from "@/components/socialMediaIcon";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";
import CoursesSection from "@/components/sections/coursesSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ProjectsSection from "@/components/sections/projectsSection";
import AboutSection from "@/components/sections/aboutSection";

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
      scrollBehavior={"smooth"}
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
          <VStack alignItems={"start"} gap={8}>
            <SectionButton text={t("about")} />
            <SectionButton text={t("experience")} />
            <SectionButton text={t("projects")} />
            <SectionButton text={t("academic")} />
            <SectionButton text={t("courses")} />
          </VStack>
          <VStack alignItems={"start"} gap={8}>
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
            <HStack>
              <SocialMediaIcon
                size="24px"
                icon={<MdEmail size={"100%"} />}
                link="mailto:felipepepe21@gmail.com"
              />
              <Text>felipepepe21@gmail.com</Text>
            </HStack>
            <HStack>
              <MdPlace />
              <Text>{t("location")}</Text>
            </HStack>
          </VStack>
        </VStack>
        {/* Sections */}
        <VStack
          paddingY={24}
          gap={32}
          flex={2}
          textAlign={"start"}
          fontSize={"md"}
          fontWeight={"normal"}
          alignItems={"start"}
        >
          {/* About */}
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AcademicSection />
          <CoursesSection />
        </VStack>
      </HStack>
    </VStack>
  );
}
