'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Page from "../components/Page";
import Space from "../styles/Space";
import Radius from "../styles/Radius";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const radius = Radius();
  const space = Space();
  const theme = createTheme({
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
    radius: radius.radius,
    space: space.space,
  });

  return (
    <html lang="en">
      <head>
        <title>Marvel Sample App</title>
        <meta name="description" content="A sample app to discover marvel heroes" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Page>
              {children}
            </ Page>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
