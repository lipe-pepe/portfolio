import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "../providers";

import { Inter } from "next/font/google";

import LanguageMenu from "@/components/languageMenu";

import "../globals.css";

export const metadata = {
  title: "Felipe Pêpe",
  icons: {
    icon: "/favicon.png", // Caminho do favicon dentro da pasta public/
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // Aguarde `params` antes de acessar `locale`

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="min-h-screen bg-fixed bg-gradient-to-r from-[var(--background-1)] to-[var(--background-2)]">
              <div className="fixed top-6 right-0 mr-[1rem] sm:mr-[4rem] md:mr-[8rem] lg:mr-[12rem] xl:mr-[18rem] 2xl:mr-[24rem]">
                <LanguageMenu />
              </div>
              {children}
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
