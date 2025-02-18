import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "../providers";
import { fonts } from "../fonts";
import { Box } from "@chakra-ui/react";
import LanguageMenu from "@/components/languageMenu";

export const metadata = {
  title: "Felipe Pêpe",
  icons: {
    icon: "/favicon.png", // Caminho do favicon dentro da pasta public/
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params; // Aguarde `params` antes de acessar `locale`

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const paddingX = ["1rem", "4rem", "8rem", "12rem", "18rem", "24rem"];

  return (
    <html lang={locale} className={fonts.inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Box
              fontFamily={"inter"}
              minH={"100vh"}
              bgAttachment={"fixed"}
              bgGradient={"linear(to-r, background.1, background.2)"}
            >
              <Box position={"fixed"} top={6} right={0} mr={paddingX}>
                <LanguageMenu />
              </Box>
              {children}
            </Box>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
