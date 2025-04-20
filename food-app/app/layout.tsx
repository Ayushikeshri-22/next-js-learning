import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata = {
  title: "Food App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <MainHeader />
        {children}
      </body>
    </html>
  );
}
