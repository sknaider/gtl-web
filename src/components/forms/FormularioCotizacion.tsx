"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Lista completa de países con sus códigos telefónicos
const paises = [
  { nombre: "Afganistán", codigo: "+93" },
  { nombre: "Albania", codigo: "+355" },
  { nombre: "Alemania", codigo: "+49" },
  { nombre: "Andorra", codigo: "+376" },
  { nombre: "Angola", codigo: "+244" },
  { nombre: "Antigua y Barbuda", codigo: "+1-268" },
  { nombre: "Arabia Saudita", codigo: "+966" },
  { nombre: "Argelia", codigo: "+213" },
  { nombre: "Argentina", codigo: "+54" },
  { nombre: "Armenia", codigo: "+374" },
  { nombre: "Australia", codigo: "+61" },
  { nombre: "Austria", codigo: "+43" },
  { nombre: "Azerbaiyán", codigo: "+994" },
  { nombre: "Bahamas", codigo: "+1-242" },
  { nombre: "Bangladés", codigo: "+880" },
  { nombre: "Barbados", codigo: "+1-246" },
  { nombre: "Baréin", codigo: "+973" },
  { nombre: "Bélgica", codigo: "+32" },
  { nombre: "Belice", codigo: "+501" },
  { nombre: "Benín", codigo: "+229" },
  { nombre: "Bielorrusia", codigo: "+375" },
  { nombre: "Birmania", codigo: "+95" },
  { nombre: "Bolivia", codigo: "+591" },
  { nombre: "Bosnia y Herzegovina", codigo: "+387" },
  { nombre: "Botsuana", codigo: "+267" },
  { nombre: "Brasil", codigo: "+55" },
  { nombre: "Brunéi", codigo: "+673" },
  { nombre: "Bulgaria", codigo: "+359" },
  { nombre: "Burkina Faso", codigo: "+226" },
  { nombre: "Burundi", codigo: "+257" },
  { nombre: "Bután", codigo: "+975" },
  { nombre: "Cabo Verde", codigo: "+238" },
  { nombre: "Camboya", codigo: "+855" },
  { nombre: "Camerún", codigo: "+237" },
  { nombre: "Canadá", codigo: "+1" },
  { nombre: "Catar", codigo: "+974" },
  { nombre: "Chad", codigo: "+235" },
  { nombre: "Chile", codigo: "+56" },
  { nombre: "China", codigo: "+86" },
  { nombre: "Chipre", codigo: "+357" },
  { nombre: "Colombia", codigo: "+57" },
  { nombre: "Comoras", codigo: "+269" },
  { nombre: "Congo", codigo: "+242" },
  { nombre: "Corea del Norte", codigo: "+850" },
  { nombre: "Corea del Sur", codigo: "+82" },
  { nombre: "Costa de Marfil", codigo: "+225" },
  { nombre: "Costa Rica", codigo: "+506" },
  { nombre: "Croacia", codigo: "+385" },
  { nombre: "Cuba", codigo: "+53" },
  { nombre: "Dinamarca", codigo: "+45" },
  { nombre: "Dominica", codigo: "+1-767" },
  { nombre: "Ecuador", codigo: "+593" },
  { nombre: "Egipto", codigo: "+20" },
  { nombre: "El Salvador", codigo: "+503" },
  { nombre: "Emiratos Árabes Unidos", codigo: "+971" },
  { nombre: "Eritrea", codigo: "+291" },
  { nombre: "Eslovaquia", codigo: "+421" },
  { nombre: "Eslovenia", codigo: "+386" },
  { nombre: "España", codigo: "+34" },
  { nombre: "Estados Unidos", codigo: "+1" },
  { nombre: "Estonia", codigo: "+372" },
  { nombre: "Etiopía", codigo: "+251" },
  { nombre: "Filipinas", codigo: "+63" },
  { nombre: "Finlandia", codigo: "+358" },
  { nombre: "Fiyi", codigo: "+679" },
  { nombre: "Francia", codigo: "+33" },
  { nombre: "Gabón", codigo: "+241" },
  { nombre: "Gambia", codigo: "+220" },
  { nombre: "Georgia", codigo: "+995" },
  { nombre: "Ghana", codigo: "+233" },
  { nombre: "Granada", codigo: "+1-473" },
  { nombre: "Grecia", codigo: "+30" },
  { nombre: "Guatemala", codigo: "+502" },
  { nombre: "Guinea", codigo: "+224" },
  { nombre: "Guinea-Bisáu", codigo: "+245" },
  { nombre: "Guinea Ecuatorial", codigo: "+240" },
  { nombre: "Guyana", codigo: "+592" },
  { nombre: "Haití", codigo: "+509" },
  { nombre: "Honduras", codigo: "+504" },
  { nombre: "Hungría", codigo: "+36" },
  { nombre: "India", codigo: "+91" },
  { nombre: "Indonesia", codigo: "+62" },
  { nombre: "Irak", codigo: "+964" },
  { nombre: "Irán", codigo: "+98" },
  { nombre: "Irlanda", codigo: "+353" },
  { nombre: "Islandia", codigo: "+354" },
  { nombre: "Islas Marshall", codigo: "+692" },
  { nombre: "Islas Salomón", codigo: "+677" },
  { nombre: "Israel", codigo: "+972" },
  { nombre: "Italia", codigo: "+39" },
  { nombre: "Jamaica", codigo: "+1-876" },
  { nombre: "Japón", codigo: "+81" },
  { nombre: "Jordania", codigo: "+962" },
  { nombre: "Kazajistán", codigo: "+7" },
  { nombre: "Kenia", codigo: "+254" },
  { nombre: "Kirguistán", codigo: "+996" },
  { nombre: "Kiribati", codigo: "+686" },
  { nombre: "Kuwait", codigo: "+965" },
  { nombre: "Laos", codigo: "+856" },
  { nombre: "Lesoto", codigo: "+266" },
  { nombre: "Letonia", codigo: "+371" },
  { nombre: "Líbano", codigo: "+961" },
  { nombre: "Liberia", codigo: "+231" },
  { nombre: "Libia", codigo: "+218" },
  { nombre: "Liechtenstein", codigo: "+423" },
  { nombre: "Lituania", codigo: "+370" },
  { nombre: "Luxemburgo", codigo: "+352" },
  { nombre: "Macedonia del Norte", codigo: "+389" },
  { nombre: "Madagascar", codigo: "+261" },
  { nombre: "Malasia", codigo: "+60" },
  { nombre: "Malaui", codigo: "+265" },
  { nombre: "Maldivas", codigo: "+960" },
  { nombre: "Malí", codigo: "+223" },
  { nombre: "Malta", codigo: "+356" },
  { nombre: "Marruecos", codigo: "+212" },
  { nombre: "Mauricio", codigo: "+230" },
  { nombre: "Mauritania", codigo: "+222" },
  { nombre: "México", codigo: "+52" },
  { nombre: "Micronesia", codigo: "+691" },
  { nombre: "Moldavia", codigo: "+373" },
  { nombre: "Mónaco", codigo: "+377" },
  { nombre: "Mongolia", codigo: "+976" },
  { nombre: "Montenegro", codigo: "+382" },
  { nombre: "Mozambique", codigo: "+258" },
  { nombre: "Namibia", codigo: "+264" },
  { nombre: "Nauru", codigo: "+674" },
  { nombre: "Nepal", codigo: "+977" },
  { nombre: "Nicaragua", codigo: "+505" },
  { nombre: "Níger", codigo: "+227" },
  { nombre: "Nigeria", codigo: "+234" },
  { nombre: "Noruega", codigo: "+47" },
  { nombre: "Nueva Zelanda", codigo: "+64" },
  { nombre: "Omán", codigo: "+968" },
  { nombre: "Países Bajos", codigo: "+31" },
  { nombre: "Pakistán", codigo: "+92" },
  { nombre: "Palaos", codigo: "+680" },
  { nombre: "Panamá", codigo: "+507" },
  { nombre: "Papúa Nueva Guinea", codigo: "+675" },
  { nombre: "Paraguay", codigo: "+595" },
  { nombre: "Perú", codigo: "+51" },
  { nombre: "Polonia", codigo: "+48" },
  { nombre: "Portugal", codigo: "+351" },
  { nombre: "Reino Unido", codigo: "+44" },
  { nombre: "República Centroafricana", codigo: "+236" },
  { nombre: "República Checa", codigo: "+420" },
  { nombre: "República del Congo", codigo: "+243" },
  { nombre: "República Dominicana", codigo: "+1-809" },
  { nombre: "Ruanda", codigo: "+250" },
  { nombre: "Rumania", codigo: "+40" },
  { nombre: "Rusia", codigo: "+7" },
  { nombre: "Samoa", codigo: "+685" },
  { nombre: "San Cristóbal y Nieves", codigo: "+1-869" },
  { nombre: "San Marino", codigo: "+378" },
  { nombre: "San Vicente y las Granadinas", codigo: "+1-784" },
  { nombre: "Santa Lucía", codigo: "+1-758" },
  { nombre: "Santo Tomé y Príncipe", codigo: "+239" },
  { nombre: "Senegal", codigo: "+221" },
  { nombre: "Serbia", codigo: "+381" },
  { nombre: "Seychelles", codigo: "+248" },
  { nombre: "Sierra Leona", codigo: "+232" },
  { nombre: "Singapur", codigo: "+65" },
  { nombre: "Siria", codigo: "+963" },
  { nombre: "Somalia", codigo: "+252" },
  { nombre: "Sri Lanka", codigo: "+94" },
  { nombre: "Suazilandia", codigo: "+268" },
  { nombre: "Sudáfrica", codigo: "+27" },
  { nombre: "Sudán", codigo: "+249" },
  { nombre: "Sudán del Sur", codigo: "+211" },
  { nombre: "Suecia", codigo: "+46" },
  { nombre: "Suiza", codigo: "+41" },
  { nombre: "Surinam", codigo: "+597" },
  { nombre: "Tailandia", codigo: "+66" },
  { nombre: "Tanzania", codigo: "+255" },
  { nombre: "Tayikistán", codigo: "+992" },
  { nombre: "Timor Oriental", codigo: "+670" },
  { nombre: "Togo", codigo: "+228" },
  { nombre: "Tonga", codigo: "+676" },
  { nombre: "Trinidad y Tobago", codigo: "+1-868" },
  { nombre: "Túnez", codigo: "+216" },
  { nombre: "Turkmenistán", codigo: "+993" },
  { nombre: "Turquía", codigo: "+90" },
  { nombre: "Tuvalu", codigo: "+688" },
  { nombre: "Ucrania", codigo: "+380" },
  { nombre: "Uganda", codigo: "+256" },
  { nombre: "Uruguay", codigo: "+598" },
  { nombre: "Uzbekistán", codigo: "+998" },
  { nombre: "Vanuatu", codigo: "+678" },
  { nombre: "Vaticano", codigo: "+379" },
  { nombre: "Venezuela", codigo: "+58" },
  { nombre: "Vietnam", codigo: "+84" },
  { nombre: "Yemen", codigo: "+967" },
  { nombre: "Yibuti", codigo: "+253" },
  { nombre: "Zambia", codigo: "+260" },
  { nombre: "Zimbabue", codigo: "+263" }
]

export function FormularioCotizacion() {
  const [formData, setFormData] = useState({
    nombre: "",
    pais: "",
    codigoPais: "",
    telefono: "",
    correo: "",
    mensaje: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Actualizar código de país cuando cambia el país seleccionado
  const handlePaisChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const paisSeleccionado = paises.find(p => p.nombre === e.target.value)
    setFormData({
      ...formData, 
      pais: e.target.value,
      codigoPais: paisSeleccionado?.codigo || ""
    })
  }

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
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.correo,
          phone: `${formData.codigoPais} ${formData.telefono}`,
          company: formData.pais,
          service: "Consulta General",
          message: formData.mensaje || "Sin mensaje adicional"
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        alert('¡Gracias por tu mensaje! Nos contactaremos contigo pronto.')
        
        // Reset form
        setFormData({
          nombre: "",
          pais: "",
          codigoPais: "",
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
              
              {/* Nombre */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="Ingrese su nombre completo"
                />
              </div>

              {/* País */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">País *</label>
                <select
                  required
                  value={formData.pais}
                  onChange={handlePaisChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Seleccionar país</option>
                  {paises.map(pais => (
                    <option key={pais.nombre} value={pais.nombre}>
                      {pais.nombre}
                    </option>
                  ))}
                </select>
              </div>

              {/* Teléfono con código automático */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.codigoPais}
                    readOnly
                    placeholder="+XX"
                    className="w-20 px-3 py-2 sm:py-3 border border-gray-300 rounded-lg bg-gray-100 text-center font-semibold text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="Número de teléfono"
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">El código de país se actualiza automáticamente según el país seleccionado</p>
              </div>

              {/* Correo */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo *</label>
                <input
                  type="email"
                  required
                  value={formData.correo}
                  onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm sm:text-base"
                  placeholder="Escriba su consulta aquí (opcional)"
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
