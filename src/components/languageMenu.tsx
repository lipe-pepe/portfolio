"use client";

import { useRouter } from "@/i18n/routing";
import { HStack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";

const LanguageMenu = () => {
  const { locale } = useParams();
  const router = useRouter();

  const [selected, setSelected] = useState<string>("pt");

  useEffect(() => {
    if (locale) setSelected(String(locale));
  }, [locale]);

  const changeLanguage = (locale: string) => {
    router.replace("/", { locale: locale });
  };

  return (
    <HStack color={"white.darkest"} fontSize={"sm"} letterSpacing={"widest"}>
      <MdLanguage />
      <Text
        color={selected === "pt" ? "white" : "white.darkest"}
        cursor={selected === "pt" ? "default" : "pointer"}
        _hover={{ color: selected === "pt" ? "white" : "text" }}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </Text>
      <Text cursor={"default"}>|</Text>
      <Text
        color={selected === "en" ? "white" : "white.darkest"}
        cursor={selected === "en" ? "default" : "pointer"}
        _hover={{ color: selected === "en" ? "white" : "text" }}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Text>
    </HStack>
  );
};

export default LanguageMenu;
