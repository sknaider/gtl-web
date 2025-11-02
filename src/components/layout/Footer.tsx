import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Facebook, Lock, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-brand-primary/20">
      {/* Banner especialización */}
      <div className="bg-gradient-to-r from-brand-primary/10 via-transparent to-brand-primary/10 border-b border-brand-primary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-primary" />
              <span className="text-brand-primary font-bold">Especialistas en Exportación de Valorados (Oro)</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-brand-primary/30" />
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <span>22 Años de Experiencia</span>
              <span>•</span>
              <span>108+ Empresas Corporativas</span>
              <span>•</span>
              <span>Confidencialidad Garantizada</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Columna 1: Empresa */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo GTL */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="GTL Consulting Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Texto Logo */}
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-brand-primary to-red-400 bg-clip-text text-transparent">GTL</span>
                <span className="text-white"> Consulting</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-2 leading-relaxed text-sm">
              <span className="font-semibold text-white">Especialistas en Logística y Gestión Aduanera</span> con 22 años de experiencia en exportación de valorados (oro).
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <Shield className="w-4 h-4 text-brand-primary" />
              <span>RUC: 20610565451</span>
            </div>
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

          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="font-bold mb-4 text-lg border-b border-brand-primary/20 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  <span className="text-brand-primary">→</span> Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  <span className="text-brand-primary">→</span> Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  <span className="text-brand-primary">→</span> Blog
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  <span className="text-brand-primary">→</span> Tracking
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-center gap-2">
                  <span className="text-brand-primary">→</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos y Guías */}
          <div>
            <h4 className="font-bold mb-4 text-lg border-b border-brand-primary/20 pb-2">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/exportacion-oro-peru" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-start gap-2 group">
                  <span className="text-brand-primary mt-0.5 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-sm">Exportación de Oro Perú 2025</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/drawback-peru" className="text-gray-300 hover:text-brand-primary transition-colors inline-flex items-start gap-2 group">
                  <span className="text-brand-primary mt-0.5 group-hover:translate-x-1 transition-transform">→</span>
                  <span className="text-sm">Drawback Perú 2025</span>
                </Link>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="font-semibold text-white text-sm mb-3">Servicios Destacados</h5>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li className="flex items-center gap-2">
                  <span className="text-brand-primary">💎</span>
                  <span>Exportación Valorados</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-primary">📋</span>
                  <span>Drawback & SFMB</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-primary">✈️</span>
                  <span>KLM, Air France, LATAM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-lg border-b border-brand-primary/20 pb-2">Contacto</h4>
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
                <a href="tel:+51972094730" className="hover:text-brand-primary transition-colors">
                  +51 972 094 730
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-primary" />
                <a href="mailto:operacionescallao@gtl.pe" className="hover:text-brand-primary transition-colors text-sm">
                  operacionescallao@gtl.pe
                </a>
              </li>
            </ul>

            {/* WhatsApp destacado */}
            <div className="mt-4">
              <a
                href="https://wa.me/51972094730?text=Hola,%20solicito%20cotización%20confidencial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-105 text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Cotización Confidencial
              </a>
            </div>
          </div>
        </div>

        {/* Copyright y garantías */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400">
              © 2025 <span className="text-white font-semibold">GTL Consulting SACS</span>. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-primary" />
                Confidencialidad
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-primary" />
                22 Años Experiencia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
