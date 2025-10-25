"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

export function ContactoHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/contacto-hero.jpg"
          alt="Oficina GTL Consulting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-blue-900/70 to-gray-900/80" />
        {/* Patrón adicional */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full mb-6"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Respuesta en menos de 24 horas</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Conecta con <span className="text-amber-500">GTL Consulting</span>
          </h1>
          
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-amber-400 to-amber-600" />
          
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-lg">
            Estamos disponibles para resolver tus dudas, cotizar tu próxima operación aduanera 
            y asesorarte en comercio exterior. Múltiples formas de contactarnos.
          </p>

          {/* Quick Contact Buttons */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.a
              href="tel:+51972094730"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-300 mb-1">Llamar Ahora</div>
                <div className="text-white font-semibold">+51 972 094 730</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/51972094730?text=Hola%20GTL%20Consulting,%20quisiera%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-300 mb-1">WhatsApp</div>
                <div className="text-white font-semibold">Chat Directo</div>
              </div>
            </motion.a>

            <motion.a
              href="mailto:operacionescallao@gtl.pe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-300 mb-1">Email</div>
                <div className="text-white font-semibold text-sm">operacionescallao@gtl.pe</div>
              </div>
            </motion.a>
          </div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
          >
            <Clock className="w-5 h-5 text-amber-400" />
            <div className="text-white text-sm">
              <span className="font-semibold">Atención:</span> Lun-Vie 8:00-18:00 | 
              <span className="text-amber-400 ml-2">Emergencias 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
