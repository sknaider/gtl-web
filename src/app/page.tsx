import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/layout/Hero"
import { Servicios } from "@/components/layout/Servicios"
import { FormularioCotizacion } from "@/components/forms/FormularioCotizacion"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <FormularioCotizacion />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}