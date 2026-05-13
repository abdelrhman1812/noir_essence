import { routing } from "@/src/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import "../styles/globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noir Essence",
  description: "Luxury Men's Fragrances",
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
