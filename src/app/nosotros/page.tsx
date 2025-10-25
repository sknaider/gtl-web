import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { NosotrosHero } from "@/components/nosotros/NosotrosHero"
import { Estadisticas } from "@/components/nosotros/Estadisticas"
import { MisionVision } from "@/components/nosotros/MisionVision"
import { PorQueElegirnos } from "@/components/nosotros/PorQueElegirnos"
import { Testimonios } from "@/components/nosotros/Testimonios"
import { Valores } from "@/components/nosotros/Valores"
import { Equipo } from "@/components/nosotros/Equipo"

export const metadata = {
  title: "Nosotros | GTL Consulting",
  description: "Conoce a GTL Consulting, especialistas en comercio exterior con mÃ¡s de 15 aÃ±os conectando negocios entre PerÃº y el mundo.",
}

export default function NosotrosPage() {
  return (
    <>
      <Header />
      <main>
        <NosotrosHero />
        <Estadisticas />
        <MisionVision />
        <PorQueElegirnos />
        <Testimonios />
        <Valores />
        <Equipo />
      </main>
      <Footer />
    </>
  )
}