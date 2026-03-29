import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lê Công Hậu — Full Stack Developer',
  description: 'Xây dựng hệ thống website & quản lý chuyên sâu cho doanh nghiệp SME',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
