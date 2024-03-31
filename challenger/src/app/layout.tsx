import type { Metadata } from "next";
import Header from "./Header/page"
import Footer from "./Footer/page"
import Opcoes from "./Opcoes/page"




export const metadata: Metadata = {
  title: "AMR",
  description: "AMR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}
