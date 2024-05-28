import React from "react";

import PaginaPagar from "@/components/pagar/pagar";

import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: " Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
    description:
      "Bienvenido(a) al sitio oficial de Fz Premium Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
    url: `${process.env.URL_DOMINIO}`,
    siteName: "Fz Premium",
    images: [
      {
        url: `/ecommerce-share.jpg`,
        width: 800,
        height: 600,
        alt: `Fz Premium share Imagen`,
      },
      {
        url: `/ecommerce-share.jpg`,

        width: 1200,
        height: 630,
        alt: `Fz Premium share Imagen`,
      },
    ],
  },
};
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <PaginaPagar></PaginaPagar>
    </div>
  );
}
