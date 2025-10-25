"use client"

import { motion } from "framer-motion"
import { Award, Users, Globe, TrendingUp, Shield, Clock } from "lucide-react"

// TODO: ACTUALIZAR ESTOS DATOS CON INFORMACIÓN REAL DE GTL
const estadisticas = [
  {
    icon: Award,
    numero: "7+",
    label: "Años de Experiencia",
    descripcion: "Desde 2018 en comercio exterior"
  },
  {
    icon: Users,
    numero: "200+",
    label: "Clientes Satisfechos",
    descripcion: "Empresas que confían en nosotros"
  },
  {
    icon: TrendingUp,
    numero: "1,500+",
    label: "Operaciones Exitosas",
    descripcion: "Despachos procesados anualmente"
  },
  {
    icon: Globe,
    numero: "15",
    label: "Países Conectados",
    descripcion: "Red de agentes internacionales"
  },
  {
    icon: Shield,
    numero: "98%",
    label: "Sin Incidencias",
    descripcion: "Tasa de despachos exitosos"
  },
  {
    icon: Clock,
    numero: "24/7",
    label: "Atención Continua",
    descripcion: "Disponibles cuando nos necesites"
  },
]

export function Estadisticas() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestra Trayectoria en Números
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Datos que respaldan nuestro compromiso con la excelencia
          </p>
          <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {estadisticas.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-blue-900/20 p-8">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg">
                    <stat.icon className="w-8 h-8 text-amber-400" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Number */}
                <div className="text-center mb-2">
                  <h3 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-2">
                    {stat.numero}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-3 rounded-full" />
                </div>
                
                {/* Label */}
                <h4 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {stat.label}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 text-center">
                  {stat.descripcion}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-900/5 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for updating */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Datos actualizados a octubre 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
