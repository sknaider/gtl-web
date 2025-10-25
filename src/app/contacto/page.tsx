import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ContactoHero } from "@/components/contacto/ContactoHero"
import { ContactoInfo } from "@/components/contacto/ContactoInfo"
import { ContactoMapa } from "@/components/contacto/ContactoMapa"
import { ContactoEjecutivos } from "@/components/contacto/ContactoEjecutivos"
import { ContactoFAQ } from "@/components/contacto/ContactoFAQ"

export const metadata = {
  title: "Contacto | GTL Consulting",
  description: "Contacta con GTL Consulting. Teléfono, WhatsApp, Email y ubicación de nuestra oficina en Callao. Atención personalizada 24/7 para tus operaciones de comercio exterior.",
}

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <ContactoHero />
        <ContactoInfo />
        <ContactoMapa />
        <ContactoEjecutivos />
        <ContactoFAQ />
      </main>
      <Footer />
    </>
  )
}
