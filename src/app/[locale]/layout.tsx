import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Providers } from "../providers";
import { fonts } from "../fonts";
import { Box } from "@chakra-ui/react";
import LanguageMenu from "@/components/languageMenu";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
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
    <html lang={locale} className={fonts.inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Box
              fontFamily={"inter"}
              minH={"100vh"}
              bgAttachment={"fixed"}
              bgGradient={
                "linear(to-r, background.1, background.2, background.3)"
              }
            >
              <Box px={["20rem"]} pt={["6rem"]}>
                <LanguageMenu />
                {children}
              </Box>
            </Box>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
