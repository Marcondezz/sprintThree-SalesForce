import type { Metadata } from "next";
import Header from "./Header/page"
import Footer from "./Footer/page"
import Personagens from "./Personagens/page";
import Pagina_Inicial from "./Pagina_Inicial/page"
import TrailFinder from "./TrailFinder/Trailfinder"
import Questionario from "./Questionario/Questionario";



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
        <Questionario />
        <Footer />
      </body>
    </html>
  );
}
