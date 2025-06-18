import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';
// import ThemeRegistry from '@/components/ThemeRegistry';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEA International Entrepreneurs Alliance",
  description: "国际企业家联合会官方网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className} suppressHydrationWarning={true}>
        <LanguageProvider>
          {/* <ThemeRegistry> */}
            {children}
          {/* </ThemeRegistry> */}
        </LanguageProvider>
      </body>
    </html>
  );
}
