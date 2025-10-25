import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-brand-primary">GTL</span> Consulting
            </h3>
            <p className="text-gray-300 mb-4">
              Consultoría especializada en comercio exterior con 7 años conectando negocios entre Perú y el mundo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/gtlconsulting" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/gtlconsultingperu" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galería</Link></li>
              <li><Link href="/#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Agencia de Aduanas</li>
              <li>Operador Logístico Integral</li>
              <li>Consultoría Comercio Exterior</li>
              <li>Asesoría Aduanera</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-brand-primary" />
                <div>
                  <p className="font-medium text-white">Oficina Principal</p>
                  <p className="text-sm">Lima, Perú</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-primary" />
                <a href="tel:+51972094730" className="hover:text-white transition-colors">
                  +51 972 094 730
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-primary" />
                <a href="mailto:operacionescallao@gtl.pe" className="hover:text-white transition-colors">
                  operacionescallao@gtl.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 GTL Consulting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}