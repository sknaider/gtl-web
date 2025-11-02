"use client"

import { Shield, Plane, Building2, FileCheck, AlertCircle, CheckCircle2, Clock, Award, Users } from "lucide-react"
import Link from "next/link"

export function ExportacionOroContent() {
  const whatsappUrl = "https://wa.me/51972094730?text=Hola,%20necesito%20asesoría%20para%20exportación%20de%20oro"

  return (
    <article className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <header className="mb-12">
          <div className="inline-block px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full mb-6">
            <span className="text-brand-primary font-semibold text-sm">GUÍA COMPLETA 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Exportación de Oro en Perú 2025: Guía Legal y Logística Completa
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Lectura: 15 minutos
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              22 años experiencia
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Actualizado 2025
            </span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            Todo lo que necesitas saber para exportar oro desde Perú: marco legal actualizado, requisitos SUNAT, aerolíneas certificadas, almacenes especializados y logística de alto valor.
          </p>
        </header>

        <section className="mb-12 p-8 bg-gradient-to-br from-brand-primary/5 to-transparent border-l-4 border-brand-primary rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Por Qué Esta Guía Es Diferente</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            La exportación de oro en Perú requiere <strong>conocimiento especializado</strong> en regulaciones del Banco Central, SUNAT y logística de alto valor. Un error puede resultar en retenciones aduaneras, sanciones o pérdidas millonarias.
          </p>
          <p className="text-gray-700 leading-relaxed">
            En <strong className="text-brand-primary">GTL Consulting</strong> llevamos <strong>22 años especializados</strong> en exportación de valorados, trabajando con 108+ empresas corporativas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-brand-primary" />
            Marco Legal SUNAT 2025
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            La exportación de oro está regulada por <strong>SUNAT</strong> y el <strong>BCRP</strong>. Requiere autorizaciones especiales y trazabilidad completa desde la mina hasta el destino final.
          </p>

          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Ley N° 28835 - Formalización de la Pequeña Minería
              </h4>
              <p className="text-gray-700">
                Todo oro exportado debe provenir de fuentes formales registradas ante el MINEM. SUNAT verifica la trazabilidad desde la mina hasta la exportación.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                D.S. N° 014-2021-EM - Declaración de Origen
              </h4>
              <p className="text-gray-700">
                Obliga a declarar el origen geográfico específico del oro con coordenadas UTM del área de extracción.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900 mb-2">Cambios 2025</p>
                <p className="text-gray-700">
                  SUNAT implementó el <strong>Sistema STRADIM</strong> que requiere registro electrónico de toda la cadena de custodia con código QR único.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="my-12 p-8 bg-gradient-to-r from-brand-primary/10 to-transparent border-2 border-brand-primary/30 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Necesitas Ayuda con el Marco Legal?</h3>
          <p className="text-gray-700 mb-6">
            22 años de experiencia en regulaciones SUNAT y BCRP para exportaciones de oro.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-all"
          >
            <span className="text-lg">📱</span>
            Consultoría Legal Especializada
          </a>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Plane className="w-8 h-8 text-brand-primary" />
            Aerolíneas Certificadas para Transporte de Oro
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "KLM", route: "Lima → Ámsterdam", time: "12-14h" },
              { name: "Air France", route: "Lima → París", time: "13-15h" },
              { name: "LATAM Cargo", route: "Lima → USA/Europa", time: "Variable" }
            ].map((airline) => (
              <div key={airline.name} className="bg-white border-2 border-brand-primary/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{airline.name}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Ruta: {airline.route}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Tiempo: {airline.time}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-brand-primary" />
            Almacenes Aduaneros Especializados
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "SAASA", cert: "BASC + TAPA FSR 2" },
              { name: "TALMA", cert: "BASC Oro + TAPA A" }
            ].map((almacen) => (
              <div key={almacen.name} className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{almacen.name}</h3>
                <p className="text-sm text-gray-600 mb-4">Certificaciones: {almacen.cert}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Bóveda blindada nivel 3</li>
                  <li>• Cámaras 24/7</li>
                  <li>• Personal armado SUCAMEC</li>
                  <li>• Ubicación: Callao</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 p-8 bg-gradient-to-br from-brand-primary to-red-600 text-white rounded-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para Exportar Oro desde Perú?</h2>
          <p className="text-lg mb-6 text-white/90">
            22 años especializados en exportación de valorados. Manejamos todo el proceso: documentación, aerolíneas certificadas, almacenes especializados y seguimiento 24/7.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6" />
                <span className="font-bold text-xl">108+</span>
              </div>
              <p className="text-white/80 text-sm">Empresas corporativas B2B</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6" />
                <span className="font-bold text-xl">22 años</span>
              </div>
              <p className="text-white/80 text-sm">De experiencia sin incidentes</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-lg hover:bg-gray-100 transition-all"
            >
              <span className="text-xl">📱</span>
              Cotización Confidencial WhatsApp
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}
