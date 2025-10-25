"use client"

import { motion } from "framer-motion"
import { Truck, Briefcase, Forklift, MonitorCheck } from "lucide-react"

const servicios = [
  {
    icon: Truck,
    title: "Agencia de Aduanas",
    description: "Te ofrecemos servicios de agencia de aduana para todos los regímenes aduaneros; te garantizamos una gestión profesional, cero errores"
  },
  {
    icon: Briefcase,
    title: "Operador Logístico Integral",
    description: "Contamos con los servicios de agencia de aduana, transporte de carga, almacenaje, asesoramiento legal, especialistas en rediseño de la cadena logística para reducir costos logísticos"
  },
  {
    icon: Forklift,
    title: "Consultoría en Comercio Exterior",
    description: "Internacionalizamos a tu empresa. Te ayudamos a lograr la tan ansiada exportación. Tus importaciones no tendrán dificultades con nosotros"
  },
  {
    icon: MonitorCheck,
    title: "Asesoría Aduanera",
    description: "Logramos la devolución del DRAWBACK, SFMB (salida a favor material de beneficio) o la RESTITUCIÓN de mercancías en franquicia arancelaria. Asesoría legal, contable y empresarial"
  },
]

export function Servicios() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Qué le ofrecemos
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900/20">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900" />
                
                <div className="p-8 sm:p-10">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg group-hover:shadow-xl transition-shadow">
                      <servicio.icon className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-amber-400/10 rounded-full blur-xl" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {servicio.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mb-5 rounded-full" />
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-900/5 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}