"use client";

import AcademicSection from "@/components/sections/academicSection";
import Hero from "@/components/hero";
import SectionButton from "@/components/sectionButton";
import { useTranslations } from "next-intl";
import ExperienceSection from "@/components/sections/experienceSection";
import ProjectsSection from "@/components/sections/projectsSection";
import AboutSection from "@/components/sections/aboutSection";
import React, { useRef } from "react";
import ContactInfo from "@/components/contactInfo";

export default function HomePage() {
  const t = useTranslations();

  const aboutRef = useRef<HTMLDivElement>(null!); // Força que não será null
  const expRef = useRef<HTMLDivElement>(null!);
  const projectsRef = useRef<HTMLDivElement>(null!);
  const academicRef = useRef<HTMLDivElement>(null!);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-16 md:px-32 lg:px-48 xl:px-72 2xl:px-96 text-center overflow-y-scroll h-[100dvh] snap-y snap-mandatory scroll-smooth">
      {/* Hero */}
      <div className="flex justify-center items-center snap-start">
        <div className="h-screen w-full sm:w-[80%] md:w-[50%]">
          <Hero />
        </div>
      </div>
      {/* Content */}
      <div className="flex justify-center items-start gap-3 text-white-darkest w-full h-auto snap-start">
        {/* Indexes */}
        <div
          className="hidden md:flex flex-col py-24 h-screen flex-1 items-start justify-between sticky top-0" // 'Sticky' mantém fixo ao rolar
        >
          <div className="flex flex-col items-start gap-8">
            <SectionButton
              text={t("about")}
              onClick={() => scrollToSection(aboutRef)}
            />
            <SectionButton
              text={t("experience")}
              onClick={() => scrollToSection(expRef)}
            />
            <SectionButton
              text={t("projects")}
              onClick={() => scrollToSection(projectsRef)}
            />
            <SectionButton
              text={t("academic")}
              onClick={() => scrollToSection(academicRef)}
            />
          </div>
          <ContactInfo />
        </div>
        {/* Sections */}
        <div className="py-24 gap-32 flex-2 text-start text-md font-normal items-start">
          <div ref={aboutRef}>
            <AboutSection />
          </div>
          <div ref={expRef}>
            <ExperienceSection />
          </div>
          <div ref={projectsRef}>
            <ProjectsSection />
          </div>
          <div ref={academicRef}>
            <AcademicSection />
          </div>
          <div className="block md:hidden">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
