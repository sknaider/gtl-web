"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContacto = () => {
    const contacto = document.getElementById("contacto")
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" })
    }
  }

  const whatsappUrl = "https://wa.me/51972094730?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización"

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
      
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-white drop-shadow-2xl">Conectando</span><br/>
              <span className="text-brand-primary drop-shadow-2xl">negocios</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg mb-6 sm:mb-8">
              Entre Perú y el Mundo
            </h2>
            
            <div className="w-24 sm:w-32 h-1 mb-6 sm:mb-8 bg-gradient-to-r from-brand-primary to-brand-secondary" />
            
            <p className="text-base sm:text-lg md:text-xl text-white drop-shadow-lg mb-8 sm:mb-12 max-w-3xl">
              Consultoría especializada en comercio exterior y operaciones logísticas. 
              Te garantizamos una gestión profesional, cero errores en todos tus procesos aduaneros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContacto}
                className="text-base sm:text-lg px-6 sm:px-8 bg-brand-primary hover:bg-brand-primary/90 shadow-2xl w-full sm:w-auto"
              >
                Solicitar Cotización
              </Button>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base sm:text-lg font-medium transition-colors px-6 sm:px-8 h-12 border-2 border-white text-white hover:bg-white/20 backdrop-blur-sm shadow-2xl w-full sm:w-auto"
              >
                Contactar por WhatsApp
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary drop-shadow-lg mb-2">7+</div>
                <div className="text-sm text-white drop-shadow">Años de Experiencia</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary drop-shadow-lg mb-2">2000+</div>
                <div className="text-sm text-white drop-shadow">Clientes Atendidos</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="backdrop-blur-sm bg-white/10 p-4 rounded-lg text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary drop-shadow-lg mb-2">100%</div>
                <div className="text-sm text-white drop-shadow">Gestión Profesional</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}