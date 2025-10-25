"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    pregunta: "¿Qué documentos necesito para importar?",
    respuesta: "Los documentos básicos son: Factura comercial, packing list, conocimiento de embarque (B/L o AWB), certificado de origen (si aplica), y documentos específicos según el producto (sanitarios, fitosanitarios, etc.). Nuestro equipo te asesora sobre los requisitos exactos para tu mercancía."
  },
  {
    pregunta: "¿Cuánto tiempo demora un despacho de importación?",
    respuesta: "Depende del canal SUNAT asignado: Canal Verde 18-24 horas, Canal Naranja 3-5 días, Canal Rojo 7-10 días. El 70% de nuestros despachos son canal verde gracias a nuestra correcta clasificación arancelaria y presentación documental."
  },
  {
    pregunta: "¿Cómo se calculan los costos de importación?",
    respuesta: "Los costos incluyen: arancel de importación (0-20% según partida), IGV 18%, honorarios de agente de aduanas, gastos portuarios, almacenaje y transporte local. Te proporcionamos una cotización detallada con todos los conceptos antes de iniciar."
  },
  {
    pregunta: "¿Qué es el Drawback y cómo funciona?",
    respuesta: "Es un régimen que permite recuperar hasta el 4% del valor FOB exportado por los aranceles pagados en insumos importados. Nosotros gestionamos todo el proceso: verificación de requisitos, presentación de declaraciones y seguimiento ante SUNAT hasta el reintegro."
  },
  {
    pregunta: "¿Trabajan con carga peligrosa o refrigerada?",
    respuesta: "Sí, gestionamos todo tipo de carga: mercancías peligrosas (IMO), productos refrigerados, carga sobredimensionada y proyectos especiales. Contamos con la certificación y experiencia necesarias para operaciones complejas."
  },
  {
    pregunta: "¿Atienden emergencias fuera de horario?",
    respuesta: "Sí, tenemos atención 24/7 vía WhatsApp para emergencias. Esto incluye: llegadas inesperadas de carga, requeri mientos urgentes de SUNAT, problemas en puerto y coordinaciones fuera de horario comercial."
  },
  {
    pregunta: "¿En qué aduanas del Perú operan?",
    respuesta: "Operamos principalmente en Callao Marítimo y Aéreo (donde se concentra el 85% del comercio exterior). También gestionamos operaciones en Paita, Mollendo, Ilo, Tumbes y otras aduanas mediante nuestra red de corresponsales."
  },
  {
    pregunta: "¿Cómo puedo rastrear mi operación?",
    respuesta: "Una vez iniciada tu operación, te asignamos un ejecutivo dedicado que te mantiene informado vía WhatsApp, email o llamada. Recibes actualizaciones en cada etapa: numeración, canal asignado, aforo (si aplica), levante y retiro."
  }
]

export function ContactoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Preguntas Frecuentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Tienes Dudas?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Aquí encontrarás respuestas a las consultas más comunes sobre nuestros servicios
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.pregunta}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            ¿No encontraste respuesta a tu pregunta?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/51972094730?text=Hola%20GTL,%20tengo%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href="tel:+51972094730"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/20"
            >
              Llámanos Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
