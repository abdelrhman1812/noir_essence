import WebsiteHeader from "@/src/components/layout/website_header/WebsiteHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <WebsiteHeader />
      {children}
    </>
  );
}
