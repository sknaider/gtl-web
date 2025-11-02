"use client"

import { motion } from "framer-motion"
import { Package, FileCheck, Shield, TrendingUp, ArrowRight } from "lucide-react"

export function ServiciosValorados() {
  const servicios = [
    {
      icon: Package,
      titulo: "Exportación de Valorados (Oro)",
      descripcion: "Especialización en logística y despacho aduanero de metales preciosos con seguimiento 24/7 desde origen hasta destino internacional.",
      features: [
        "Manipulación segura y certificada",
        "Seguimiento GPS en tiempo real",
        "Custodia especializada",
        "Documentación completa SUNAT",
        "📚 Ver Guía Completa 2025 →"
      ],
      color: "from-yellow-500 to-amber-600",
      link: "/blog/exportacion-oro-peru"
    },
    {
      icon: FileCheck,
      titulo: "Drawback & SFMB",
      descripcion: "Recuperación de aranceles en exportaciones de valorados. Maximizamos tu restitución del 3% con expertise de 22 años.",
      features: [
        "Auditoría previa gratuita",
        "Gestión 100% digital",
        "Seguimiento personalizado",
        "Casos $300K+ recuperados"
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      titulo: "Asesoría Legal Permanente",
      descripcion: "Cumplimiento normativo SUNAT, Banco Central y regulaciones internacionales para operaciones de alto valor.",
      features: [
        "Abogados especializados",
        "Auditorías preventivas",
        "Resolución de contingencias",
        "Actualizaciones regulatorias"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      titulo: "Logística Integral B2B",
      descripcion: "Fletes terrestres y aéreos con aerolíneas certificadas. Almacenes aduaneros SAASA y TALMA.",
      features: [
        "KLM, Air France, LATAM",
        "Almacenes certificados",
        "Consolidación de carga",
        "Tarifas corporativas"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ]

  const whatsappUrl = "https://wa.me/51972094730?text=Hola,%20solicito%20información%20sobre%20servicios%20especializados"

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full mb-4">
            <span className="text-brand-primary font-semibold text-sm">SERVICIOS ESPECIALIZADOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Soluciones Corporativas<br/>
            <span className="bg-gradient-to-r from-brand-primary via-red-400 to-brand-primary bg-clip-text text-transparent">
              Para Exportadores de Valorados
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            22 años de experiencia manejando operaciones de alto valor con confidencialidad y expertise técnico
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${servicio.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity`} />
                
                <div className="relative h-full backdrop-blur-sm bg-gray-800/50 border border-gray-700/50 group-hover:border-brand-primary/30 rounded-2xl p-8 transition-all">
                  {/* Icono */}
                  <div className={`inline-flex p-3 bg-gradient-to-br ${servicio.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <servicio.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                    {servicio.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {servicio.features.map((feature, idx) => {
                      const isLastFeature = idx === servicio.features.length - 1
                      const hasLink = servicio.link && isLastFeature
                      
                      if (hasLink) {
                        return (
                          <li key={idx}>
                            <a href={servicio.link} className="flex items-start gap-3 text-brand-primary hover:text-red-400 transition-colors group/link">
                              <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover/link:translate-x-1 transition-transform" />
                              <span className="text-sm font-semibold">{feature}</span>
                            </a>
                          </li>
                        )
                      }
                      
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200 text-sm">{feature}</span>
                        </li>
                      )
                    })}
                  </ul>

                  {/* Línea decorativa */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${servicio.color} transition-all duration-500 rounded-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-red-500 to-brand-primary rounded-lg blur opacity-30" />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-red-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Consultoría Especializada
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            Reunión confidencial • Sin compromiso • Respuesta en 24 horas
          </p>
        </motion.div>

      </div>
    </section>
  )
}
