"use client";

import { useRouter } from "@/i18n/routing";
import {
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { MdLanguage } from "react-icons/md";

const LanguageMenu = () => {
  const { locale } = useParams();
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.replace("/", { locale: locale });
  };

  return (
    <Menu>
      <MenuButton
        borderRadius={6}
        borderWidth={1}
        borderColor={"white.dark"}
        color={"white.dark"}
        px={2}
        py={1}
        _hover={{
          color: "white",
          borderWidth: 2,
          borderColor: "white",
          transform: "scale(1.05)",
          transition:
            "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
        }}
      >
        <HStack>
          <MdLanguage />
          <Text
            letterSpacing={"wide"}
            fontFamily={"inter"}
            textTransform={"uppercase"}
            fontSize={"sm"}
          >
            {locale}
          </Text>
        </HStack>
      </MenuButton>
      <MenuList bg={"background.2"}>
        <MenuItem bg={"none"} onClick={() => changeLanguage("en")}>
          EN
        </MenuItem>
        <MenuItem bg={"none"} onClick={() => changeLanguage("pt")}>
          PT
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageMenu;
