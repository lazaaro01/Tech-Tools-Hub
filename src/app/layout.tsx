import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SuggestionModal from "@/components/SuggestionModal";
import { FavoritesProvider } from "@/context/FavoritesContext";

export const metadata = {
  title: "Tech Tools Hub",
  description: "Catálogo de ferramentas para desenvolvedores",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <FavoritesProvider>
          <Navbar />
          <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-8">{children}</main>
          <SuggestionModal />
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}