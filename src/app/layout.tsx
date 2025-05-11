import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Ou a fonte que você estiver usando
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider"; // Ajuste o caminho se necessário

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prodsy",
  description: "Criado com a stack recomendada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      {/* O <head> é preenchido automaticamente pelo Next.js com base no `export const metadata`
        e outros <Head> tags em componentes filhos (se usar o Pages Router, o que não é o caso aqui).
        Para o App Router, a API de Metadados é a principal forma de popular o <head>.
        Evite adicionar uma tag <head></head> vazia ou com espaços se o Next.js já está cuidando disso.
      */}
      <body>
        <QueryProvider>
          {/* Aqui você pode adicionar outros providers globais se necessário */}
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}