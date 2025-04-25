"use client";

import { useRouter } from "@/i18n/routing";
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
    setSelected(locale);
    router.replace("/", { locale: locale });
  };

  return (
    <div className="flex items-center justify-center gap-2 tracking-widest text-white-darkest text-sm">
      <MdLanguage />
      <button onClick={() => changeLanguage("pt")} disabled={selected === "pt"}>
        <p
          className={`transition-colors ${
            selected === "pt"
              ? "text-white cursor-default"
              : "text-white/80 hover:text-highlight cursor-pointer"
          }`}
        >
          PT
        </p>
      </button>
      <p>|</p>
      <button onClick={() => changeLanguage("en")} disabled={selected === "en"}>
        <p
          className={`transition-colors ${
            selected === "en"
              ? "text-white cursor-default"
              : "text-white/80 hover:text-highlight cursor-pointer"
          }`}
        >
          EN
        </p>
      </button>
    </div>
  );
};

export default LanguageMenu;
