"use client"

import { motion } from "framer-motion"
import { Shield, Users, Lightbulb, Award, Heart, TrendingUp } from "lucide-react"

const valores = [
  {
    icon: Shield,
    titulo: "Integridad",
    descripcion: "Actuamos con transparencia y ética en todas nuestras operaciones",
  },
  {
    icon: Users,
    titulo: "Compromiso",
    descripcion: "Nos dedicamos al éxito de cada cliente como si fuera propio",
  },
  {
    icon: Lightbulb,
    titulo: "Innovación",
    descripcion: "Buscamos constantemente mejorar nuestros procesos y servicios",
  },
  {
    icon: Award,
    titulo: "Excelencia",
    descripcion: "Mantenemos los más altos estándares de calidad en cada proyecto",
  },
  {
    icon: Heart,
    titulo: "Pasión",
    descripcion: "Amamos lo que hacemos y eso se refleja en nuestros resultados",
  },
  {
    icon: TrendingUp,
    titulo: "Crecimiento",
    descripcion: "Impulsamos el desarrollo continuo de nuestros clientes y equipo",
  },
]

export function Valores() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Valores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Los principios que guían nuestro trabajo diario y relaciones con clientes
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {valores.map((valor, index) => (
            <motion.div
              key={valor.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
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
                      <valor.icon className="w-10 h-10 text-amber-400" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-amber-400/10 rounded-full blur-xl" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {valor.titulo}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mb-5 rounded-full" />
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {valor.descripcion}
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