export function DrawbackContent() {
  return (
    <div className="space-y-12">
      
      {/* Tabla de Contenidos */}
      <div className="bg-gray-50 rounded-lg p-6 not-prose border-2 border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Tabla de Contenidos</h3>
        <nav className="grid md:grid-cols-2 gap-2 text-sm">
          <a href="#que-es" className="text-blue-600 hover:text-blue-800 hover:underline">→ ¿Qué es el Drawback?</a>
          <a href="#cambios-2025" className="text-blue-600 hover:text-blue-800 hover:underline">→ Lo Que Cambió en 2025</a>
          <a href="#requisitos" className="text-blue-600 hover:text-blue-800 hover:underline">→ Requisitos para Solicitar</a>
          <a href="#cuanto-recuperar" className="text-blue-600 hover:text-blue-800 hover:underline">→ ¿Cuánto Puedo Recuperar?</a>
          <a href="#proceso" className="text-blue-600 hover:text-blue-800 hover:underline">→ Proceso Paso a Paso</a>
          <a href="#errores" className="text-blue-600 hover:text-blue-800 hover:underline">→ Errores Comunes</a>
          <a href="#drawback-vs-sfmb" className="text-blue-600 hover:text-blue-800 hover:underline">→ Drawback vs SFMB</a>
          <a href="#calculadora" className="text-blue-600 hover:text-blue-800 hover:underline">→ Calculadora</a>
          <a href="#casos-exito" className="text-blue-600 hover:text-blue-800 hover:underline">→ Casos de Éxito</a>
          <a href="#faq" className="text-blue-600 hover:text-blue-800 hover:underline">→ Preguntas Frecuentes</a>
        </nav>
      </div>

      {/* Sección: ¿Qué es el Drawback? */}
      <section id="que-es">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es el Drawback? (Explicación Simple)</h2>
        
        <p className="text-lg text-gray-700 mb-6">
          El <strong>Drawback</strong> (Restitución Simplificada de Derechos Arancelarios) es un mecanismo 
          de devolución que el Estado peruano implementó para hacer más competitivas las exportaciones nacionales.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explicación en 3 Pasos:</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <strong className="text-gray-900">Importas insumos</strong> pagando aranceles (ej: tela de China)
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <strong className="text-gray-900">Produces y exportas</strong> el producto final (ej: polo de algodón)
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <strong className="text-gray-900">SUNAT te devuelve</strong> 3% del valor FOB exportado
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
          <h4 className="font-bold text-gray-900 mb-3">💰 Ejemplo real:</h4>
          <div className="font-mono text-sm space-y-2">
            <p>Exportas polos por <strong className="text-green-700">USD 100,000</strong> (valor FOB)</p>
            <p>Drawback = USD 100,000 × 3% = <strong className="text-green-700">USD 3,000 recuperados</strong></p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3">No confundir con:</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>IGV Exportador</strong> (devolución del IGV pagado)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>SFMB</strong> (Saldo a Favor Materia del Beneficio)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span><strong>Restitución de franquicia arancelaria</strong></span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección: Cambios 2025 */}
      <section id="cambios-2025" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🚨 Lo Que Cambió en 2025 (CRÍTICO)</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Cronología de los Cambios:</h3>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-lg">
            <h4 className="font-bold text-red-900 mb-2">Octubre 2024 - El Susto:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• D.S. 189-2024-EF buscaba eliminar el drawback</li>
              <li>• Tasa reducida a 1% (ene-jun 2025)</li>
              <li>• Tasa reducida a 0.5% (jul-dic 2025)</li>
              <li>• Eliminación total en 2026</li>
              <li>• <strong>Gremios exportadores en alerta</strong> (4M+ empleos en riesgo)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
            <h4 className="font-bold text-green-900 mb-2">Enero 2025 - La Reversión (NOTICIA BOMBA):</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>D.S. 027-2025-EF deroga la eliminación</strong></li>
              <li>✅ <strong>Drawback se mantiene al 3%</strong> indefinidamente</li>
              <li>✅ Victoria de ADEX, AGAP, CCL y gremios exportadores</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
          <h4 className="text-xl font-bold text-blue-900 mb-4">¿Qué Significa Para Tu Empresa?</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Puedes seguir solicitando drawback normalmente</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">La tasa del 3% se mantiene vigente</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">No hay fecha de eliminación por ahora</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Solicitudes históricas (2024) siguen siendo válidas</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>⚠️ Recomendación:</strong> Aprovecha este beneficio mientras esté vigente. 
              Los cambios normativos pueden ocurrir sin previo aviso.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Requisitos */}
      <section id="requisitos" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Quiénes Pueden Solicitar Drawback?</h2>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Requisitos de la Empresa (OBLIGATORIOS)</h3>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span> Ser Empresa Productora-Exportadora
              </h4>
              <p className="text-gray-700 mb-4">
                Significa que <strong>produces</strong> (directamente o por encargo) el bien que exportas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Producción directa:
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Tienes planta/taller propio</li>
                    <li>• Transformas insumos en producto final</li>
                    <li>• Ejemplo: Fábrica de confecciones</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Producción por encargo:
                  </h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Contratas a terceros para producir</li>
                    <li>• <strong>Requiere factura de servicio</strong></li>
                    <li>• Ejemplo: Diseñas, maquilas, exportas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <span>❌</span> NO aplica para:
                </h5>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Empresas comercializadoras puras (compra-venta)</li>
                  <li>• Reexportación sin transformación</li>
                  <li>• Productos comprados terminados para exportar</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span> Exportar Productos NO Tradicionales
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-bold text-green-900 mb-2">✅ Productos elegibles:</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Textiles y confecciones</li>
                    <li>• Agroindustria y alimentos procesados</li>
                    <li>• Artesanías</li>
                    <li>• Joyería</li>
                    <li>• Productos químicos</li>
                    <li>• Manufacturas diversas</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-bold text-red-900 mb-2">❌ NO elegibles:</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Minería (cobre, oro, zinc)</li>
                    <li>• Petróleo y derivados</li>
                    <li>• Harina de pescado</li>
                    <li>• Café en grano sin procesar</li>
                    <li>• Azúcar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">3️⃣</span> Requisitos Formales SUNAT
              </h4>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>RUC activo</strong> y sin condición de "No Habido"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>Condición "Exportador Activo"</strong> en Ficha RUC</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>Clave SOL</strong> operativa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>CCI registrado</strong> en moneda nacional</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700"><strong>Cuenta bancaria</strong> en banco peruano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Cuánto Puedo Recuperar? */}
      <section id="cuanto-recuperar" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cuánto Puedo Recuperar? Fórmula y Límites</h2>
        
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Fórmula Básica:</h3>
          <div className="bg-white rounded-lg p-6 font-mono text-center text-xl">
            <p className="text-gray-900">Monto Drawback = <strong className="text-blue-700">Valor FOB Exportado × 3%</strong></p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-amber-900 mb-4">⚠️ Tope Máximo (CRÍTICO):</h3>
          <p className="text-gray-700 mb-4">
            El monto recuperable <strong>NO puede exceder el 50%</strong> del costo de producción del bien exportado.
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 border-2 border-green-300">
              <h4 className="font-bold text-green-900 mb-2">✅ Ejemplo 1 - Sin límite:</h4>
              <div className="text-sm space-y-1 text-gray-700">
                <p>Valor FOB exportado: <strong>USD 100,000</strong></p>
                <p>Costo de producción: <strong>USD 80,000</strong></p>
                <p>Drawback calculado: USD 100,000 × 3% = <strong>USD 3,000</strong></p>
                <p>50% costo producción: USD 80,000 × 50% = <strong>USD 40,000</strong></p>
                <p className="text-green-700 font-bold pt-2">✅ Recuperas los USD 3,000 completos</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <h4 className="font-bold text-red-900 mb-2">❌ Ejemplo 2 - Con límite:</h4>
              <div className="text-sm space-y-1 text-gray-700">
                <p>Valor FOB exportado: <strong>USD 100,000</strong></p>
                <p>Costo de producción: <strong>USD 4,000</strong></p>
                <p>Drawback calculado: USD 100,000 × 3% = <strong>USD 3,000</strong></p>
                <p>50% costo producción: USD 4,000 × 50% = <strong>USD 2,000</strong></p>
                <p className="text-red-700 font-bold pt-2">❌ Solo recuperas USD 2,000 (límite aplicado)</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> Mantén registros contables detallados del costo de producción. SUNAT puede auditar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Intermedio */}
      <div className="my-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda para solicitar tu drawback?</h3>
        <p className="mb-6 text-blue-100">Nuestros especialistas pueden ayudarte a recuperar hasta el 100% de lo que te corresponde</p>
        <a 
          href="/contacto"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
        >
          Solicitar Asesoría Gratuita
        </a>
      </div>

      {/* Sección: Proceso Paso a Paso */}
      <section id="proceso" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso Paso a Paso: Cómo Solicitar Drawback</h2>
        
        <div className="space-y-8">
          {/* PASO 1 */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Preparación Previa a la Exportación</h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">✅ Al momento de exportar:</h4>
                  <p className="text-gray-700 mb-2">
                    En la <strong>Declaración Aduanera de Mercancías (DAM)</strong>:
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
                    <p className="text-sm text-yellow-900">
                      <strong>⚠️ CRÍTICO:</strong> Consignar <strong className="text-yellow-700">código 13</strong> en el campo correspondiente. 
                      Si olvidas el código 13, pierdes el beneficio.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">✅ Documentos a reunir:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>1. DUA de importación de insumos</li>
                    <li>2. Factura de compra de insumos</li>
                    <li>3. DAM de exportación con código 13</li>
                    <li>4. Factura comercial de exportación</li>
                    <li>5. Documento de transporte (B/L, AWB)</li>
                    <li>6. Declaración Jurada (si compraste localmente)</li>
                    <li>7. Registros contables (costos de producción)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Ingreso de Solicitud Electrónica</h3>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Plazo:</strong> Máximo <strong className="text-red-600">180 días hábiles</strong> desde fecha de embarque
                  </p>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm mb-3">
                    <p className="text-gray-600 mb-1">Ruta de acceso:</p>
                    <p className="text-blue-700">SUNAT Operaciones en Línea → Operador de Comercio Exterior → Drawback → Solicitud de Restitución</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Datos a ingresar:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Número de DAM de exportación</li>
                    <li>• Número de DUA de importación de insumos</li>
                    <li>• Valor FOB exportado</li>
                    <li>• Descripción de insumos utilizados</li>
                    <li>• Costo de producción</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    <strong>Importante:</strong> Documentos digitalizados (PDF legible, máx 5MB por archivo)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-green-900 mb-3">Evaluación SUNAT</h3>
                
                <p className="text-gray-700 mb-4">
                  SUNAT evalúa en tiempo real y cruza información con su base de datos.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                    <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                      <span>✅</span> Aprobación Automática
                    </h4>
                    <p className="text-sm text-gray-700">Solicitud aprobada en minutos. Continúa verificación de deudas.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                      <span>📋</span> Revisión Documentaria
                    </h4>
                    <p className="text-sm text-gray-700">Funcionario revisa documentos (2 días hábiles). Puede solicitar adicionales.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-amber-300">
                    <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <span>⚠️</span> Rechazo Subsanable
                    </h4>
                    <p className="text-sm text-gray-700">Error corregible. Plazo: 2 días hábiles para subsanar.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                    <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                      <span>❌</span> Rechazo No Subsanable
                    </h4>
                    <p className="text-sm text-gray-700">Incumplimiento de requisitos. No se puede corregir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 4 */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border-l-4 border-amber-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Verificación de Deudas</h3>
                
                <p className="text-gray-700 mb-4">
                  Una vez aprobada, SUNAT verifica automáticamente:
                </p>

                <div className="bg-white rounded-lg p-4 space-y-2">
                  <p className="flex items-center gap-2 text-gray-700">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Deudas tributarias exigibles
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Deudas coactivas
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Medidas cautelares
                  </p>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm"><strong className="text-red-900">Si tienes deudas:</strong></p>
                    <p className="text-xs text-gray-700 mt-1">El monto se embarga (parcial o total) para pagar deudas primero.</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm"><strong className="text-green-900">Si NO tienes deudas:</strong></p>
                    <p className="text-xs text-gray-700 mt-1">Pago directo a tu cuenta registrada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASO 5 */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-6 border-l-4 border-emerald-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Pago del Drawback</h3>
                
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <p className="flex items-start gap-2">
                    <strong className="text-gray-900 min-w-[140px]">Forma de pago:</strong>
                    <span className="text-gray-700">Depósito en cuenta registrada</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <strong className="text-gray-900 min-w-[140px]">Plazo típico:</strong>
                    <span className="text-gray-700"><strong className="text-green-700">5-15 días hábiles</strong> (si todo está en orden)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <strong className="text-gray-900 min-w-[140px]">Notificación:</strong>
                    <span className="text-gray-700">Vía Buzón SOL</span>
                  </p>
                </div>

                <div className="mt-4 bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
                  <p className="text-2xl mb-2">🎉</p>
                  <p className="font-bold text-green-900 text-lg">¡Dinero recuperado exitosamente!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Errores Comunes */}
      <section id="errores" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Errores Que Rechazan Tu Solicitud (Con Ejemplos Reales)</h2>
        
        <div className="space-y-6">
          {/* Error 1 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-3">❌ Error 1: Olvidar el Código 13 en la DAM</h3>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-600 mb-2"><strong>Caso real:</strong></p>
              <p className="text-gray-700 italic">
                "Empresa textil exportó USD 500,000 en polos. Al solicitar drawback, descubrieron que el agente de aduanas NO consignó el código 13. Perdieron USD 15,000."
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-bold text-green-900 mb-2">✅ Solución:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Verificar SIEMPRE el código 13 antes de despachar</li>
                <li>• Incluir en checklist de exportación</li>
                <li>• Coordinar con agente de aduanas</li>
              </ul>
            </div>
          </div>

          {/* Error 2 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-3">❌ Error 2: Declaración Jurada Incompleta</h3>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-600 mb-2"><strong>Caso real:</strong></p>
              <p className="text-gray-700 italic">
                "PYME agroindustrial compró insumos a proveedor local. La DJ del proveedor no tenía firma ni DNI. Solicitud rechazada."
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-bold text-green-900 mb-2">✅ Solución:</p>
              <p className="text-sm text-gray-700 mb-2">DJ debe incluir:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Datos completos del proveedor</li>
                <li>• Número de DUA de importación</li>
                <li>• Firma y DNI/RUC del proveedor</li>
                <li>• Fecha</li>
                <li>• Validar ANTES de solicitar drawback</li>
              </ul>
            </div>
          </div>

          {/* Error 3 */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-red-900 mb-3">❌ Error 3: Vencimiento del Plazo de 180 Días</h3>
            <div className="bg-white rounded-lg p-4 mb-3">
              <p className="text-sm text-gray-600 mb-2"><strong>Caso real:</strong></p>
              <p className="text-gray-700 italic">
                "Empresa exportó en enero, solicitó drawback en septiembre (240 días después). Solicitud rechazada, no subsanable."
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm font-bold text-green-900 mb-2">✅ Solución:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Calendario automático de vencimientos</li>
                <li>• Solicitar drawback al mes siguiente de exportar</li>
                <li>• Sistema de alertas 30 días antes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Drawback vs SFMB */}
      <section id="drawback-vs-sfmb" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Drawback vs SFMB: ¿Cuál Te Conviene?</h2>
        
        <p className="text-lg text-gray-700 mb-8">
          Muchas empresas confunden ambos beneficios. Aquí la diferencia clave:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Drawback</h3>
            <div className="space-y-3 text-sm">
              <p><strong className="text-gray-900">Qué es:</strong> <span className="text-gray-700">Devolución del 3% del FOB exportado</span></p>
              <p><strong className="text-gray-900">Requisito:</strong> <span className="text-gray-700">Haber usado insumos importados</span></p>
              <p><strong className="text-gray-900">Monto:</strong> <span className="text-gray-700">3% FOB (tope 50% costo producción)</span></p>
              <p><strong className="text-gray-900">Cuándo conviene:</strong> <span className="text-gray-700">FOB alto, costo producción bajo</span></p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">SFMB</h3>
            <div className="space-y-3 text-sm">
              <p><strong className="text-gray-900">Qué es:</strong> <span className="text-gray-700">Devolución de aranceles específicos pagados</span></p>
              <p><strong className="text-gray-900">Requisito:</strong> <span className="text-gray-700">Acreditar qué aranceles pagaste por insumo</span></p>
              <p><strong className="text-gray-900">Monto:</strong> <span className="text-gray-700">Aranceles reales pagados</span></p>
              <p><strong className="text-gray-900">Cuándo conviene:</strong> <span className="text-gray-700">Aranceles altos (&gt;10%), FOB bajo</span></p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-4">📊 Comparación Práctica:</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Escenario A - FOB alto, aranceles bajos:</h4>
              <div className="text-sm space-y-1 text-gray-700 font-mono">
                <p>FOB: USD 100,000</p>
                <p>Aranceles pagados: USD 500</p>
                <p className="border-t pt-2 mt-2">
                  <span className="text-green-700">✅ Drawback: USD 3,000</span>
                </p>
                <p className="text-red-700">❌ SFMB: USD 500</p>
                <p className="font-bold text-green-800 pt-2">Ganador: Drawback</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Escenario B - FOB bajo, aranceles altos:</h4>
              <div className="text-sm space-y-1 text-gray-700 font-mono">
                <p>FOB: USD 50,000</p>
                <p>Aranceles pagados: USD 5,000</p>
                <p className="border-t pt-2 mt-2">
                  <span className="text-red-700">❌ Drawback: USD 1,500</span>
                </p>
                <p className="text-green-700">✅ SFMB: USD 5,000</p>
                <p className="font-bold text-green-800 pt-2">Ganador: SFMB</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-amber-100 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>⚠️ IMPORTANTE:</strong> No puedes solicitar ambos por la misma exportación. Elige uno.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Calculadora */}
      <section id="calculadora" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculadora Drawback 2025</h2>
        
        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">Usa esta fórmula para estimar tu recuperación:</h3>
          
          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <p className="text-gray-700">Valor FOB Exportado anual</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <p className="text-gray-700">Multiplicar × 3%</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <p className="text-gray-700">Verificar tope (50% costo producción)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
              <p className="text-gray-700 font-bold">Resultado = Drawback recuperable</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">Ejemplos por Sector:</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🧵 Textil:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">Empresa confecciones exporta</p>
              <p className="font-mono text-blue-700 font-bold">USD 1,200,000/año</p>
              <p className="text-gray-600">Drawback estimado:</p>
              <p className="font-mono text-green-700 font-bold text-lg">USD 36,000/año</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🌾 Agroindustria:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">Empresa procesa espárragos</p>
              <p className="font-mono text-blue-700 font-bold">USD 800,000/año</p>
              <p className="text-gray-600">Drawback estimado:</p>
              <p className="font-mono text-green-700 font-bold text-lg">USD 24,000/año</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-lg text-gray-900 mb-2">💎 Joyería:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">Joyero exporta</p>
              <p className="font-mono text-blue-700 font-bold">USD 500,000/año</p>
              <p className="text-gray-600">Drawback estimado:</p>
              <p className="font-mono text-green-700 font-bold text-lg">USD 15,000/año</p>
              <p className="text-xs text-amber-700">(verificar tope 50% costo)</p>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h4 className="font-bold text-lg text-gray-900 mb-2">🪑 Manufactura:</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-700">Fábrica de muebles</p>
              <p className="font-mono text-blue-700 font-bold">USD 300,000/año</p>
              <p className="text-gray-600">Drawback estimado:</p>
              <p className="font-mono text-green-700 font-bold text-lg">USD 9,000/año</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Casos de Éxito */}
      <section id="casos-exito" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos de Éxito Reales (Sin Revelar Clientes)</h2>
        
        <div className="space-y-6">
          {/* Caso 1 */}
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏭</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Caso 1: Empresa Textil Recupera $300K</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p><strong>Industria:</strong> Confecciones textiles</p>
                    <p><strong>Problema:</strong> 5 años sin solicitar drawback</p>
                  </div>
                  <div>
                    <p><strong>Exportaciones:</strong> USD 10M acumulados</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="font-bold text-gray-900 mb-2">Solución:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Auditoría de exportaciones 2019-2024</li>
                    <li>• Solicitudes retroactivas por exportaciones vigentes</li>
                    <li>• Optimización de proceso futuras exportaciones</li>
                  </ul>
                </div>
                <div className="bg-emerald-700 text-white rounded-lg p-4">
                  <p className="font-bold text-lg">✅ Resultado:</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• <strong>USD 300,000 recuperados</strong> en 12 meses</li>
                    <li>• Sistema automatizado implementado</li>
                    <li>• 100% solicitudes aprobadas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌾</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Caso 2: PYME Agroindustrial Evita Rechazo</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p><strong>Industria:</strong> Procesamiento alimentos</p>
                    <p><strong>Problema:</strong> Primera exportación, errores documentación</p>
                  </div>
                  <div>
                    <p><strong>Monto en riesgo:</strong> USD 15,000</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="font-bold text-gray-900 mb-2">Solución:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Asesoría pre-exportación</li>
                    <li>• Revisión documentación antes de enviar</li>
                    <li>• Capacitación equipo contable</li>
                  </ul>
                </div>
                <div className="bg-blue-700 text-white rounded-lg p-4">
                  <p className="font-bold text-lg">✅ Resultado:</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• <strong>Aprobación en primera solicitud</strong></li>
                    <li>• Pago recibido en 7 días</li>
                    <li>• Proceso replicable siguientes exportaciones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Caso 3 */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚙️</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Caso 3: Exportadora Optimiza Costos 35%</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p><strong>Industria:</strong> Equipos industriales</p>
                    <p><strong>Problema:</strong> Confusión entre drawback y SFMB</p>
                  </div>
                  <div>
                    <p><strong>Exportaciones:</strong> USD 2M/año</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="font-bold text-gray-900 mb-2">Solución:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Análisis comparativo drawback vs SFMB</li>
                    <li>• Estrategia mixta según tipo de exportación</li>
                    <li>• Consultoría legal admisión temporal</li>
                  </ul>
                </div>
                <div className="bg-purple-700 text-white rounded-lg p-4">
                  <p className="font-bold text-lg">✅ Resultado:</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• <strong>USD 70,000/año recuperados</strong> (antes: USD 40K)</li>
                    <li>• 75% más eficiencia en recuperación</li>
                    <li>• Reducción costos logísticos totales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: FAQ */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes (FAQ)</h2>
        
        <div className="space-y-4">
          {/* Pregunta 1 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              1. ¿Puedo solicitar drawback si compro el insumo localmente?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-2"><strong>SÍ</strong>, siempre que:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Tu proveedor lo importó definitivamente</li>
                <li>• Tienes Declaración Jurada del proveedor</li>
                <li>• Proveedor tiene DUA de importación</li>
                <li>• Factura de compra válida</li>
              </ul>
            </div>
          </details>

          {/* Pregunta 2 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              2. ¿Qué pasa si exporto y después importo de nuevo (reimportación)?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                Debes <strong>devolver el drawback</strong> recibido. SUNAT lo detecta automáticamente 
                y te notifica para rectificación.
              </p>
            </div>
          </details>

          {/* Pregunta 3 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              3. ¿Puedo solicitar drawback si produzco por encargo (maquila)?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-2"><strong>SÍ</strong>, si:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Tienes contrato de maquila</li>
                <li>• Proveedor emite factura de servicio</li>
                <li>• Tú exportas el producto (no el maquilador)</li>
                <li>• Registro contable del servicio</li>
              </ul>
            </div>
          </details>

          {/* Pregunta 4 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              4. ¿Y si mi empresa es del régimen MYPE?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-2">
                El drawback aplica para <strong>todos los regímenes tributarios</strong>:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Régimen General</li>
                <li>• MYPE Tributario</li>
                <li>• RER (con limitaciones)</li>
              </ul>
            </div>
          </details>

          {/* Pregunta 5 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              5. ¿Puedo solicitar drawback por exportaciones antiguas?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                Solo si están dentro del <strong>plazo de 180 días hábiles</strong> desde la fecha de embarque. 
                Después de ese plazo, se pierde el derecho.
              </p>
            </div>
          </details>

          {/* Pregunta 6 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              6. ¿Qué pasa si SUNAT me audita después?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-2">
                SUNAT puede fiscalizar <strong>hasta 4 años después</strong>. Por eso es crítico:
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Conservar documentos originales</li>
                <li>• Registros contables detallados</li>
                <li>• Declaraciones juradas firmadas</li>
                <li>• Trazabilidad insumo → producto</li>
              </ul>
            </div>
          </details>

          {/* Pregunta 7 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              7. ¿El drawback está gravado con impuestos?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                <strong>NO</strong>, el drawback <strong>NO es renta gravada</strong>. No pagas Impuesto a la Renta 
                sobre el monto recuperado.
              </p>
            </div>
          </details>

          {/* Pregunta 8 */}
          <details className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition">
            <summary className="font-bold text-lg text-gray-900 cursor-pointer">
              8. ¿Cuánto tiempo demora el pago?
            </summary>
            <div className="mt-4 pl-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-2">
                <strong>Promedio: 5-15 días hábiles</strong> si:
              </p>
              <ul className="space-y-1 text-gray-700 mb-3">
                <li>✅ Aprobación automática</li>
                <li>✅ Sin deudas tributarias</li>
                <li>✅ Documentación en orden</li>
              </ul>
              <p className="text-gray-700 mb-2">Puede demorar más si:</p>
              <ul className="space-y-1 text-gray-700">
                <li>⏱️ Revisión documentaria (2 días + proceso)</li>
                <li>⏱️ Rechazos subsanables (2 días subsanación)</li>
                <li>⏱️ Fiscalización posterior</li>
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* Sección Final: Checklist */}
      <section className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist: Lista de Verificación Pre-Solicitud</h2>
        
        <p className="text-gray-700 mb-6">
          Antes de solicitar drawback, asegúrate de cumplir con todo:
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Columna 1 */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Requisitos de la Empresa:</h3>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">RUC activo (no "No Habido")</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Condición "Exportador Activo" en Ficha RUC</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Clave SOL operativa</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">CCI registrado en SUNAT</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Cuenta bancaria nacional activa</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Requisitos del Producto:</h3>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Producto NO tradicional</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Empresa es productora (directa o por encargo)</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Exportación definitiva (no temporal)</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Requisitos de Insumos:</h3>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Insumos importados definitivamente</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Aranceles pagados 100%</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">DUA de importación disponible</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Factura de compra de insumos</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Declaración Jurada (si compra local)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Requisitos de Exportación:</h3>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">DAM con código 13 consignado</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Factura comercial de exportación</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Documento de transporte (B/L, AWB)</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Dentro del plazo de 180 días</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">Requisitos Documentarios:</h3>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Documentos digitalizados (PDF legible)</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Firmas y sellos visibles</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Registros contables costo producción</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-700">Cálculo del tope 50%</span>
                  </label>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 text-center">
                <p className="font-bold text-green-900 text-lg mb-2">
                  ✅ ¿Todos los ítems verificados?
                </p>
                <p className="text-sm text-green-800">
                  ¡Estás listo para solicitar tu drawback!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión Final */}
      <section className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
        <h2 className="text-3xl font-bold mb-4">Conclusión: No Dejes Dinero Sobre la Mesa</h2>
        <p className="text-lg text-gray-200 mb-6">
          El drawback representa <strong>dinero que el Estado te debe</strong> por haber exportado. 
          Miles de empresas peruanas pierden millones cada año por desconocimiento o errores evitables.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-red-400 mb-2">$500M+</p>
            <p className="text-sm text-gray-300">Devueltos en drawback 2024</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400 mb-2">12,000+</p>
            <p className="text-sm text-gray-300">Empresas beneficiadas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400 mb-2">40%</p>
            <p className="text-sm text-gray-300">Solicitudes con errores</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-400 mb-2">35%</p>
            <p className="text-sm text-gray-300">Exportadores no solicitan</p>
          </div>
        </div>

        <div className="bg-red-600 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold mb-2">
            ¿Tu empresa está en el 35% que pierde dinero?
          </p>
          <p className="text-red-100">
            Si exportas, el drawback es tu derecho. Reclámalo.
          </p>
        </div>
      </section>
      
    </div>
  )
}
