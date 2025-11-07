"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Scale, Lock, Plane, Building2, CheckCircle2 } from "lucide-react"

export function HeroValorados() {
  const scrollToContacto = () => {
    const contacto = document.getElementById("contacto")
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" })
    }
  }

  const whatsappUrl = "https://wa.me/51972094730?text=Hola,%20solicito%20cotización%20confidencial%20para%20exportación%20de%20valorados"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
            src="https://www.youtube.com/embed/y3MI2MWL0qk?autoplay=1&mute=1&loop=1&playlist=y3MI2MWL0qk&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="GTL Background"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>
      
      {/* Overlay oscuro con gradiente oro */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Badges principales */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/20 to-brand-primary/10 border border-brand-primary/30 backdrop-blur-sm">
              <Lock className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-white">Confidencialidad Garantizada</span>
            </div>
            <a
              href="/blog/exportacion-oro-peru"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/10 border border-yellow-500/40 backdrop-blur-sm hover:border-yellow-500/60 transition-all group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">📚</span>
              <span className="text-sm font-medium text-white">Guía Exportación Oro 2025</span>
            </a>
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white drop-shadow-2xl">Especialistas en</span><br/>
              <span className="bg-gradient-to-r from-brand-primary via-red-400 to-brand-primary bg-clip-text text-transparent drop-shadow-2xl">
                Exportación de Valorados
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl text-brand-primary/90 font-semibold">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
              <span>ORO</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            </div>
          </motion.div>

          {/* Carta de Presentación - Elemento Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-red-500 to-brand-primary rounded-2xl blur opacity-20" />
              
              {/* Carta principal */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 border border-brand-primary/30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl">
                
                {/* Header de la carta */}
                <div className="text-center mb-8">
                  <div className="inline-block px-6 py-2 bg-gradient-to-r from-brand-primary/20 to-red-600/20 rounded-lg border border-brand-primary/40 mb-4">
                    <p className="text-brand-primary font-semibold tracking-wide">CARTA DE PRESENTACIÓN</p>
                  </div>
                </div>

                {/* Contenido de la carta */}
                <div className="space-y-6 text-gray-100">
                  <p className="text-lg font-medium text-white">Estimados señores,</p>
                  
                  <p className="text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-brand-primary">GTL CONSULTING</span>, somos una empresa especializada en 
                    <span className="font-semibold text-white"> Logística y Gestión Aduanera</span>, con amplia experiencia en el proceso de 
                    <span className="font-bold text-brand-primary"> exportación de Valorados (oro)</span>.
                  </p>
                  
                  <p className="text-base sm:text-lg leading-relaxed">
                    Estaríamos complacidos de ponernos en contacto con usted de manera presencial o virtual para explorar la posibilidad de trabajar juntos.
                  </p>

                  {/* Servicios */}
                  <div className="bg-gradient-to-br from-brand-primary/10 to-transparent rounded-xl p-6 border border-brand-primary/20 my-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                      En GTL CONSULTING ofrecemos:
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                        <span className="text-base sm:text-lg">
                          <span className="font-semibold text-white">Servicio de logística interna y agenciamiento de carga</span> (fletes terrestres o aéreos: KLM, AIR FRANCE, LATAM, entre otras).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                        <span className="text-base sm:text-lg">
                          <span className="font-semibold text-white">Servicio de agenciamiento de aduanas</span>, hacemos seguimiento de su carga desde que arriba al almacén aduanero (SAASA o TALMA), hasta que arriba al destino elegido por ustedes.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Garantías */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-transparent rounded-xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-brand-primary" />
                      Lo que garantizamos:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="font-medium text-white">Seguimiento constante</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="font-medium text-white">Asesoría legal permanente</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="font-medium text-white">Calidad de servicio</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="font-medium text-white">Confidencialidad</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs principales */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-brand-primary/20">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg text-base sm:text-lg font-semibold transition-all px-8 py-4 bg-gradient-to-r from-brand-primary to-red-500 text-white hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotización Confidencial
                  </a>
                  
                  <Button 
                    size="lg" 
                    onClick={scrollToContacto}
                    className="flex-1 text-base sm:text-lg px-8 py-4 border-2 border-brand-primary bg-transparent text-white hover:bg-brand-primary/10"
                  >
                    Más Información
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Credenciales y Certificaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {/* Aerolíneas Certificadas */}
            <div className="backdrop-blur-sm bg-white/5 border border-brand-primary/20 rounded-xl p-6 hover:border-brand-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-primary/20 rounded-lg">
                  <Plane className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Aerolíneas Certificadas</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/50 rounded-lg text-white text-sm font-medium border border-gray-700">KLM</span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-lg text-white text-sm font-medium border border-gray-700">Air France</span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-lg text-white text-sm font-medium border border-gray-700">LATAM</span>
              </div>
            </div>

            {/* Almacenes Aduaneros */}
            <div className="backdrop-blur-sm bg-white/5 border border-brand-primary/20 rounded-xl p-6 hover:border-brand-primary/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-primary/20 rounded-lg">
                  <Building2 className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-white">Almacenes Aduaneros</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800/50 rounded-lg text-white text-sm font-medium border border-gray-700">SAASA</span>
                <span className="px-4 py-2 bg-gray-800/50 rounded-lg text-white text-sm font-medium border border-gray-700">TALMA</span>
              </div>
            </div>
          </motion.div>

          {/* Stats actualizados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <div className="backdrop-blur-sm bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-primary via-red-400 to-brand-primary bg-clip-text text-transparent mb-2">
                22+
              </div>
              <div className="text-sm font-medium text-gray-300">Años de Experiencia</div>
              <div className="text-xs text-gray-400 mt-1">Especializada en Valorados</div>
            </div>
            
            <div className="backdrop-blur-sm bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-primary via-red-400 to-brand-primary bg-clip-text text-transparent mb-2">
                108+
              </div>
              <div className="text-sm font-medium text-gray-300">Empresas Corporativas</div>
              <div className="text-xs text-gray-400 mt-1">Clientes B2B Activos</div>
            </div>
            
            <div className="backdrop-blur-sm bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/30 rounded-xl p-6 text-center transform hover:scale-105 transition-all">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-primary via-red-400 to-brand-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm font-medium text-gray-300">Confidencialidad</div>
              <div className="text-xs text-gray-400 mt-1">Garantizada en Cada Operación</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
