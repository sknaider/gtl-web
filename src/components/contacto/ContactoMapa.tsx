"use client"

import { motion } from "framer-motion"

export function ContactoMapa() {
  return (
    <section className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Encuéntranos
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nuestra oficina principal está ubicada en el Callao, cerca del Puerto. 
            Visítanos o agenda una cita previa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.062763477886!2d-77.14046842415937!3d-12.046373988150516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfa6e8a1a6b9%3A0x4b9c5c4d5f5e6f7a!2sCallao%2C%20Peru!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-0 hover:grayscale-0 transition-all duration-300"
            />
            
            {/* Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white px-6 py-4 rounded-xl shadow-2xl">
              <div className="text-sm font-semibold text-gray-500 mb-1">Oficina Principal</div>
              <div className="text-lg font-bold text-gray-900">GTL Consulting</div>
              <div className="text-sm text-gray-600 mt-1">Av. Argentina 2345, Callao</div>
            </div>
          </div>

          {/* Instrucciones de Llegada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 font-bold mb-2">🚗 En Auto</div>
              <p className="text-gray-300 text-sm">
                Desde el Centro de Lima: 25 min por Av. Argentina. 
                Estacionamiento disponible en el edificio.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 font-bold mb-2">🚌 Transporte Público</div>
              <p className="text-gray-300 text-sm">
                Línea Azul del Metropolitano, estación Quilca. 
                Buses directos desde Plaza Bolognesi.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-amber-400 font-bold mb-2">📍 Referencias</div>
              <p className="text-gray-300 text-sm">
                A 2 cuadras del Terminal Portuario del Callao. 
                Frente a Plaza Grau.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
