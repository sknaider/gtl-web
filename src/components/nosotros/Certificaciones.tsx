"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const certificaciones = [
  "ISO 9001:2015 - Gestión de Calidad",
  "BASC - Business Alliance for Secure Commerce",
  "OEA - Operador Económico Autorizado",
  "Agente de Aduana Certificado por SUNAT",
  "Miembro de APECA",
  "Certificación en Comercio Exterior",
]

export function Certificaciones() {
  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Certificaciones y Acreditaciones
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Respaldados por las principales instituciones del sector
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {certificaciones.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">{cert}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Nuestras certificaciones garantizan los más altos estándares de calidad y seguridad
          </p>
        </div>
      </div>
    </section>
  )
}