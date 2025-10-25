import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TrackingHero } from "@/components/tracking/TrackingHero"
import { TrackingForms } from "@/components/tracking/TrackingForms"

export const metadata = {
  title: "Seguimiento de Operaciones | GTL Consulting",
  description: "Consulta el estado de tus operaciones aduaneras en tiempo real con GTL Consulting.",
}

export default function TrackingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <TrackingHero />
        <TrackingForms />
      </main>
      <Footer />
    </>
  )
}
