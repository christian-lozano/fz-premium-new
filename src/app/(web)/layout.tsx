import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";

// import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/Header/site-header";
import IconWhatapp from "@/components/icon-whatsapp/icon-whatapp";
import { client } from "@/sanity/lib/client";
import { SanitySlider } from "@/config/inventory";
import { groq } from "next-sanity";

const raleway = Raleway({
  weight: ["800"],
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
  description:
    "Bienvenido(a) al sitio oficial de Fz Premium Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
  openGraph: {
    title: " Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
    description:
      "Bienvenido(a) al sitio oficial de Fz Premium Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
    url: `${process.env.URL_DOMINIO}`,
    siteName: "Fz Premium",
    images: [
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,
        width: 800,
        height: 600,
        alt: `Fz Premium share Imagen`,
      },
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,

        width: 1200,
        height: 630,
        alt: `Fz Premium share Imagen`,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const urlWhatsApp = await client.fetch<
    SanitySlider[]
  >(groq`*[_type == "home"] {
whatsapp
}`);
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen bg-background  antialiased", raleway)}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              {/* <Header /> */}
              <SiteHeader />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
        <IconWhatapp urlWhatsApp={urlWhatsApp[0]}></IconWhatapp>
      </body>
    </html>
  );
}
