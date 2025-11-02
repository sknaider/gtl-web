import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { DrawbackContent } from "@/components/blog/DrawbackContent"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drawback Perú 2025: Guía Definitiva | GTL Consulting',
  description: 'Guía completa drawback Perú 2025: requisitos, proceso paso a paso, errores comunes y cómo recuperar 3% FOB exportado. Incluye decreto 027-2025-EF. Kit gratis.',
  keywords: ['drawback peru', 'drawback perú 2025', 'restitución derechos arancelarios', 'SUNAT drawback', 'exportadores'],
  openGraph: {
    title: 'Drawback Perú 2025: Guía Definitiva para Exportadores',
    description: 'Recupera 3% del valor FOB exportado. Guía actualizada con D.S. 027-2025-EF',
    url: 'https://gtl.pe/blog/drawback-peru',
    siteName: 'GTL Consulting',
    locale: 'es_PE',
    type: 'article',
    images: [{
      url: 'https://gtl.pe/images/blog/drawback-peru-2025-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Drawback Perú 2025 Guía Completa - GTL Consulting'
    }],
  },
  alternates: {
    canonical: 'https://gtl.pe/blog/drawback-peru'
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Drawback Perú 2025: Guía Definitiva para Recuperar Tu Dinero",
  "description": "Guía completa sobre el drawback en Perú 2025, incluyendo requisitos, proceso paso a paso y casos de éxito.",
  "author": {
    "@type": "Organization",
    "name": "GTL Consulting SACS",
    "url": "https://gtl.pe"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GTL Consulting",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gtl.pe/logo.png"
    }
  },
  "datePublished": "2025-01-31",
  "dateModified": "2025-01-31",
  "mainEntityOfPage": "https://gtl.pe/blog/drawback-peru"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo solicitar drawback si compro el insumo localmente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SÍ, siempre que tu proveedor lo importó definitivamente, tienes Declaración Jurada del proveedor, proveedor tiene DUA de importación y factura de compra válida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto puedo recuperar con el drawback?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes recuperar el 3% del valor FOB exportado, con un tope máximo del 50% del costo de producción del bien exportado."
      }
    }
  ]
}

export default function DrawbackPeruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-red-600 transition">Inicio</a></li>
              <li className="text-gray-400">/</li>
              <li><a href="/blog" className="hover:text-red-600 transition">Blog</a></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Drawback Perú 2025</li>
            </ol>
          </nav>

          {/* Banner Actualización Crítica */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-500 p-6 rounded-r-lg shadow-md mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-amber-900 mb-1">
                  🚨 ACTUALIZACIÓN CRÍTICA ENERO 2025
                </h3>
                <p className="text-amber-800">
                  El gobierno revirtió la eliminación del drawback mediante <strong>D.S. 027-2025-EF</strong>. 
                  El beneficio del 3% se mantiene vigente indefinidamente.
                </p>
              </div>
            </div>
          </div>

          {/* Header del artículo */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Drawback Perú 2025: Guía Definitiva para Recuperar Tu Dinero
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
              <time dateTime="2025-01-31" className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                31 de enero, 2025
              </time>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15 min de lectura
              </span>
              <span className="text-gray-400">•</span>
              <span className="font-medium text-red-600">Por GTL Consulting</span>
            </div>

            {/* Resumen Ejecutivo */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">🎯 Resumen Ejecutivo</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Si tu empresa exporta productos con insumos importados, el Estado peruano te debe dinero. 
                    <strong className="text-blue-700"> El drawback te permite recuperar hasta el 3% del valor FOB exportado</strong> como 
                    devolución de aranceles pagados. Para empresas que exportan $1 millón/año, esto significa 
                    <strong className="text-blue-700"> $30,000 recuperables</strong>.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <strong className="block">Tiempo de lectura:</strong>
                        <span className="text-gray-600">15 minutos</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <strong className="block">Nivel:</strong>
                        <span className="text-gray-600">Empresas B2B</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📅</span>
                      <div>
                        <strong className="block">Actualización:</strong>
                        <span className="text-gray-600">Enero 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Contenido Principal */}
          <div className="prose prose-lg max-w-none">
            <DrawbackContent />
          </div>

          {/* CTA Final */}
          <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Recuperar Tu Dinero?</h2>
            <p className="text-xl mb-8 text-red-50">
              Agenda una auditoría gratuita con nuestros especialistas en drawback
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/contacto"
                className="inline-block bg-white text-red-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-center shadow-lg"
              >
                Agenda Auditoría Gratuita
              </a>
              <a 
                href="https://wa.me/51972094730"
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition text-center shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Directo
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-red-50">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                22 años de experiencia
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                108+ empresas clientes
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                $2M+ recuperados
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                98% aprobaciones
              </div>
            </div>
          </div>

          {/* Footer del artículo */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sobre GTL Consulting</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Somos <strong>GTL Consulting SACS</strong>, operador logístico y agencia de aduanas con 
              <strong> 22 años de experiencia</strong> en comercio exterior peruano. Especialistas 
              certificados en drawback, SFMB y consultoría aduanera para empresas exportadoras.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong className="block text-gray-900 mb-1">RUC:</strong>
                <span className="text-gray-600">20610565451</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong className="block text-gray-900 mb-1">Certificaciones:</strong>
                <span className="text-gray-600">Miembro AAAP, CCL</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong className="block text-gray-900 mb-1">Clientes activos:</strong>
                <span className="text-gray-600">108+ empresas B2B</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 italic">
              ⚠️ Disclaimer: Este artículo contiene información general sobre el drawback en Perú. 
              Para casos específicos, consulta con un especialista en comercio exterior certificado.
            </p>
          </footer>
        </article>
      </main>
      
      <Footer />
    </>
  )
}
