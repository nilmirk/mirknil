import { IBM_Plex_Mono, Montserrat, Unbounded } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const fontHeading = Unbounded({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "600"],
});
const fontBody = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["700", "600", "500", "400"],
});
const fontCaption = IBM_Plex_Mono({
  variable: "--font-caption",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
});

export const metadata = {
  title: "Nilmirk",
  description: "My website",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="ru">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${fontCaption.variable}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
