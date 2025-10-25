"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const equipo = [
  {
    nombre: "Director General",
    cargo: "CEO & Fundador",
    descripcion: "Especialista en comercio exterior con más de 10 años de experiencia",
    iniciales: "DG"
  },
  {
    nombre: "Gerente de Operaciones",
    cargo: "COO",
    descripcion: "Experto en logística internacional y optimización de procesos",
    iniciales: "GO"
  },
  {
    nombre: "Jefe de Aduanas",
    cargo: "Gerente Aduanero",
    descripcion: "Especialista en normativa aduanera y compliance internacional",
    iniciales: "JA"
  },
  {
    nombre: "Gerente Comercial",
    cargo: "Director Comercial",
    descripcion: "Enfocado en desarrollo de negocios y relaciones estratégicas",
    iniciales: "GC"
  },
]

export function Equipo() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales comprometidos con tu éxito internacional
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {equipo.map((miembro, index) => (
            <motion.div
              key={miembro.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32 sm:w-40 sm:h-40">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {miembro.iniciales}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {miembro.nombre}
              </h3>
              
              <p className="text-brand-primary font-medium mb-3">
                {miembro.cargo}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {miembro.descripcion}
              </p>
              
              <a href="#" className="inline-flex items-center text-gray-400 hover:text-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}