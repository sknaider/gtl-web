"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Shield, Users, Zap, FileCheck } from "lucide-react"

// TODO: ACTUALIZAR CON VENTAJAS REALES DE GTL
const ventajas = [
  {
    icon: Zap,
    titulo: "Despachos Ágiles",
    descripcion: "Tiempo promedio de 18 horas para canal verde. Optimizamos cada etapa del proceso aduanero.",
    destacado: "18h promedio"
  },
  {
    icon: Clock,
    titulo: "Atención 24/7",
    descripcion: "Equipo disponible las 24 horas, los 7 días de la semana. Tu operación no se detiene, nosotros tampoco.",
    destacado: "Siempre disponibles"
  },
  {
    icon: Shield,
    titulo: "Cero Incidencias",
    descripcion: "99% de operaciones sin observaciones SUNAT. Experiencia y precisión en cada trámite.",
    destacado: "99% sin errores"
  },
  {
    icon: Users,
    titulo: "Atencion Personalizada",
    descripcion: "Consultoría especializada antes, durante y después de cada operación. Tu éxito es nuestro éxito.",
    destacado: "Acompañamiento total"
  },
  {
    icon: FileCheck,
    titulo: "Tracking Seguimiento 24/7",
    descripcion: "Seguimiento personalizado vía telefónica 24/7. Consulta el estado de tus operaciones directamente con tu ejecutivo asignado. Respuestas inmediatas, no bots ni sistemas automatizados.",
    destacado: "Sin sorpresas"
  },
  {
    icon: CheckCircle2,
    titulo: "Tarifas Competitivas",
    descripcion: "Tarifas justas sin costos ocultos. Más de 7 años de experiencia nos permiten optimizar procesos y ofrecer precios competitivos sin comprometer la calidad del servicio.",
    
    destacado: "7+ años experiencia"
  },
]

export function PorQueElegirnos() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Ventajas competitivas que nos distinguen en el mercado de comercio exterior
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {ventajas.map((ventaja, index) => (
            <motion.div
              key={ventaja.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900">
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900" />
                
                <div className="p-6 sm:p-8">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <ventaja.icon className="w-7 h-7 text-amber-400" strokeWidth={2} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-amber-400/10 rounded-full blur-lg" />
                    </div>
                    
                    {/* Badge */}
                    <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
                      <span className="text-xs font-semibold text-amber-700">{ventaja.destacado}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {ventaja.titulo}
                    </h3>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mb-4 rounded-full group-hover:w-16 transition-all duration-300" />
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {ventaja.descripcion}
                    </p>
                  </div>
                </div>

                {/* Check icon decorative */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CheckCircle2 className="w-20 h-20 text-blue-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-2xl">
            <div className="text-white">
              <p className="text-lg sm:text-xl font-semibold mb-2">
                ¿Listo para optimizar tus operaciones de comercio exterior?
              </p>
              <p className="text-blue-200 text-sm sm:text-base">
                Contáctanos y descubre cómo podemos ayudarte
              </p>
            </div>
            <a 
              href="/#contacto"
              className="flex-shrink-0 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
