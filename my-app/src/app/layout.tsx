import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { Poppins } from "next/font/google";
import { homeMetaData } from "@/siteData/metaData";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: homeMetaData.title,
  description: homeMetaData.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} grid grid-rows-[60px,1fr,auto] min-h-screen`}
      >
        <header className="px-10 py-[10px] border border-b-[1px] border-gray-400">
          <Header />
        </header>
        <main className="px-10">{children}</main>
        <footer className="px-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
