import "./globals.css";
import { ReactNode } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Lê Công Hậu - Giải Pháp Website & Hệ Thống",
  description: "Fullstack Freelancer chuyên giải pháp web cho SME",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${beVietnam.className} bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-primary selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
