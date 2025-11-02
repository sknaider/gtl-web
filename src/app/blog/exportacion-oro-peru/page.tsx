import { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"
import { ExportacionOroContent } from "@/components/blog/ExportacionOroContent"

export const metadata: Metadata = {
  title: "Exportación de Oro en Perú 2025: Guía Completa Legal y Logística | GTL Consulting",
  description: "Guía completa para exportar oro desde Perú en 2025. Requisitos SUNAT, aerolíneas certificadas (KLM, Air France, LATAM), almacenes SAASA/TALMA, seguros y logística especializada. 22 años de experiencia.",
  keywords: [
    "exportacion oro peru",
    "exportar oro peru 2025",
    "logistica oro lima",
    "agente aduanero oro",
    "requisitos exportacion oro sunat",
    "transporte oro internacional",
    "valorados exportacion peru",
    "metales preciosos export",
    "KLM exportacion oro",
    "Air France carga oro",
    "SAASA almacen oro",
    "TALMA valorados"
  ],
  alternates: {
    canonical: "https://gtl.pe/blog/exportacion-oro-peru"
  },
  openGraph: {
    title: "Exportación de Oro en Perú 2025: Guía Completa",
    description: "Todo lo que necesitas saber para exportar oro desde Perú. Requisitos legales, aerolíneas certificadas, logística especializada.",
    type: "article",
    locale: "es_PE",
    url: "https://gtl.pe/blog/exportacion-oro-peru"
  }
}

export default function ExportacionOroPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <ExportacionOroContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
