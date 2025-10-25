"use client"

import { motion } from "framer-motion"
import { Ship, Package, FileText, Scale, Globe, CheckCircle2 } from "lucide-react"

const servicios = [
  {
    icon: Package,
    titulo: "Importación",
    descripcion: "Gestión completa de despacho de mercancías extranjeras. Trámites ante SUNAT, clasificación arancelaria, valoración aduanera y coordinación con almacenes. Canales verde, naranja y rojo con seguimiento personalizado.",
    caracteristicas: [
      "Clasificación arancelaria precisa",
      "Gestión documental completa",
      "Coordinación con almacenes aduaneros",
      "Seguimiento canal SUNAT"
    ],
    destacado: "Más solicitado",
    color: "from-blue-900 to-blue-800"
  },
  {
    icon: Ship,
    titulo: "Exportación",
    descripcion: "Facilitamos la salida de tus productos al mercado internacional. Gestión de DUA, certificados de origen, coordinación logística y cumplimiento de requisitos sanitarios o fitosanitarios según destino.",
    caracteristicas: [
      "Despacho anticipado disponible",
      "Certificados de origen",
      "Cumplimiento regulatorio internacional",
      "Coordinación con navieras/aéreas"
    ],
    destacado: "Proceso ágil",
    color: "from-blue-800 to-blue-700"
  },
  {
    icon: FileText,
    titulo: "Otros Regímenes Aduaneros",
    descripcion: "Especialistas en regímenes especiales: Drawback (recuperación arancelaria), Admisión Temporal, Reimportación, Reexportación, Depósito Aduanero. Maximiza beneficios tributarios de forma legal.",
    caracteristicas: [
      "Drawback - Restitución arancelaria",
      "Admisión Temporal (18-36 meses)",
      "Reimportación en mismo estado",
      "Depósito y Tránsito Aduanero"
    ],
    destacado: "Ahorro tributario",
    color: "from-blue-700 to-blue-600"
  },
  {
    icon: Scale,
    titulo: "Asesoría Aduanera",
    descripcion: "Consultoría especializada en normativa SUNAT. Análisis de riesgos, planificación fiscal aduanera, resolución de observaciones, defensa ante fiscalizaciones y optimización de procesos de importación/exportación.",
    caracteristicas: [
      "Análisis normativo SUNAT",
      "Defensa en fiscalizaciones",
      "Resolución de observaciones",
      "Planificación tributaria aduanera"
    ],
    destacado: "Expertise legal",
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: Globe,
    titulo: "Asesoría en Comercio Exterior",
    descripcion: "Acompañamiento integral para ingresar o expandir en mercados internacionales. Estudios de mercado, estrategias de internacionalización, Incoterms, medios de pago internacional y gestión de riesgos comerciales.",
    caracteristicas: [
      "Estrategia de internacionalización",
      "Selección de Incoterms óptimos",
      "Medios de pago internacional",
      "Gestión de riesgos comerciales"
    ],
    destacado: "Visión global",
    color: "from-blue-500 to-blue-400"
  }
]

export function ServiciosGrid() {
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
            Soluciones Especializadas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Cada operación requiere expertise específico. Conoce nuestros servicios diseñados para 
            optimizar tu cadena de comercio exterior.
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${servicio.color}`} />
                
                <div className="p-6 sm:p-8">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${servicio.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <servicio.icon className="w-7 h-7 text-amber-400" strokeWidth={2} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-amber-400/10 rounded-full blur-lg" />
                    </div>
                    
                    {/* Badge */}
                    <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full">
                      <span className="text-xs font-semibold text-amber-700">{servicio.destacado}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {servicio.titulo}
                    </h3>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 mb-4 rounded-full group-hover:w-16 transition-all duration-300" />
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {servicio.descripcion}
                    </p>

                    {/* Características */}
                    <div className="space-y-2">
                      {servicio.caracteristicas.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Icon decorative */}
                <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <servicio.icon className="w-20 h-20 text-blue-900" />
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
                ¿Necesitas un servicio específico o asesoría personalizada?
              </p>
              <p className="text-blue-200 text-sm sm:text-base">
                Contáctanos y te ayudamos a encontrar la mejor solución para tu operación
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
