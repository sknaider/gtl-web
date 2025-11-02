import { Header } from "@/components/layout/Header"
import { HeroValorados } from "@/components/layout/HeroValorados"
import { ServiciosValorados } from "@/components/layout/ServiciosValorados"
import { Servicios } from "@/components/layout/Servicios"
import { FormularioCotizacion } from "@/components/forms/FormularioCotizacion"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GTL Consulting | Especialistas en Exportación de Valorados (Oro) | 22 Años Experiencia",
  description: "GTL Consulting SACS: 22 años especializados en exportación de valorados (oro), logística y gestión aduanera. KLM, Air France, LATAM. Confidencialidad garantizada. 108+ empresas corporativas. RUC: 20610565451",
  keywords: [
    "exportacion oro peru",
    "logistica valorados",
    "agente aduanero oro",
    "exportacion metales preciosos",
    "drawback peru",
    "SFMB peru",
    "GTL Consulting",
    "agencia aduanas oro",
    "KLM exportacion oro",
    "Air France carga valorados",
    "SAASA almacen oro",
    "TALMA exportacion",
    "operador logistico b2b",
    "consultoria comercio exterior"
  ],
  openGraph: {
    title: "GTL Consulting | Especialistas en Exportación de Valorados (Oro)",
    description: "22 años de experiencia en exportación de valorados, logística especializada y gestión aduanera. Confidencialidad garantizada. 108+ empresas corporativas.",
    type: "website",
    locale: "es_PE",
    siteName: "GTL Consulting SACS",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTL Consulting | Exportación de Valorados (Oro) en Perú",
    description: "22 años especializados en exportación de oro, logística y gestión aduanera B2B",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://gtl.pe",
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero con carta de presentación - PRINCIPAL */}
        <HeroValorados />
        
        {/* Servicios especializados en valorados */}
        <ServiciosValorados />
        
        {/* Servicios complementarios (drawback, SFMB, etc) */}
        <Servicios />
        
        {/* Formulario de contacto */}
        <FormularioCotizacion />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
