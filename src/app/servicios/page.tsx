import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ServiciosHero } from "@/components/servicios/ServiciosHero"
import { ServiciosGrid } from "@/components/servicios/ServiciosGrid"

export const metadata = {
  title: "Servicios | GTL Consulting",
  description: "Soluciones integrales en comercio exterior: Importación, Exportación, Regímenes Aduaneros, Asesoría Aduanera y Comercio Exterior.",
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <ServiciosHero />
        <ServiciosGrid />
      </main>
      <Footer />
    </>
  )
}
