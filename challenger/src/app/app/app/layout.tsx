import type { Metadata } from "next";
import Header from "../app/Header/page";
import Footer from "../app/Footer/page"


export const metadata: Metadata = {
  title: "FOCVS",
  description: "Site FOCVS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
