"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const paises = ["Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Ecuador", "México", "Panamá", "Perú", "Uruguay"]
const sectores = ["Industrial", "Minero", "Petrolero", "Químicos", "Agroindustrial", "Construcción", "Automotriz", "Farmacéutico", "Alimentos", "Retail", "Textil", "Veterinario", "Otros"]
const servicios = ["Servicio Logístico Integral 4PL", "Agencia de Carga", "Agencia de Aduana", "Transporte", "Servicios Adicionales"]

export function FormularioCotizacion() {
  const [formData, setFormData] = useState({
    ruc: "",
    compania: "",
    nombre: "",
    pais: "",
    servicio: "",
    sector: "",
    mercancia: "",
    telefono: "",
    correo: "",
    mensaje: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        alert('¡Gracias por tu mensaje! Nos contactaremos contigo pronto a operacionescallao@gtl.pe')
        
        // Reset form
        setFormData({
          ruc: "",
          compania: "",
          nombre: "",
          pais: "",
          servicio: "",
          sector: "",
          mercancia: "",
          telefono: "",
          correo: "",
          mensaje: ""
        })
      } else {
        setSubmitStatus('error')
        alert(`Error al enviar el mensaje: ${result.error || 'Error desconocido'}. Por favor intenta nuevamente.`)
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      alert('Error al enviar el mensaje. Por favor intenta nuevamente o contacta directamente a operacionescallao@gtl.pe')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              Escríbanos y le enviaremos una respuesta lo antes posible
            </h2>
            <p className="text-gray-600 mb-2">Responderemos a: operacionescallao@gtl.pe</p>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-brand-primary to-brand-secondary" />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RUC</label>
                <input
                  type="text"
                  value={formData.ruc}
                  onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Compañía *</label>
                <input
                  type="text"
                  required
                  value={formData.compania}
                  onChange={(e) => setFormData({...formData, compania: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">País *</label>
                <select
                  required
                  value={formData.pais}
                  onChange={(e) => setFormData({...formData, pais: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Seleccionar</option>
                  {paises.map(pais => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio *</label>
                <select
                  required
                  value={formData.servicio}
                  onChange={(e) => setFormData({...formData, servicio: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Seleccionar</option>
                  {servicios.map(srv => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sector *</label>
                <select
                  required
                  value={formData.sector}
                  onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Seleccionar</option>
                  {sectores.map(sec => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mercancía</label>
                <input
                  type="text"
                  value={formData.mercancia}
                  onChange={(e) => setFormData({...formData, mercancia: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                  placeholder="+51 ___ ___ ___"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo *</label>
                <input
                  type="email"
                  required
                  value={formData.correo}
                  onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 sm:px-12 bg-brand-primary hover:bg-brand-primary/90 text-sm sm:text-base"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
