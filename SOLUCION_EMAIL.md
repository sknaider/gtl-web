# 🚀 SOLUCIÓN: Implementar Envío de Emails con Resend

## PASO 1: Instalar Resend (30 segundos)

```bash
cd D:\IA\webgtl\new\itaw-clone
npm install resend
```

## PASO 2: Obtener API Key de Resend (2 minutos)

1. Ve a https://resend.com/signup
2. Crea cuenta gratis
3. Verifica tu dominio gtl.pe O usa dominio de prueba
4. Copia tu API key
5. Guárdala en archivo `.env.local`:

```bash
# Crear archivo .env.local en la raíz del proyecto
RESEND_API_KEY=re_tu_api_key_aqui
```

## PASO 3: Crear API Route (2 minutos)

Crear archivo: `src/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'GTL Consulting <contacto@gtl.pe>', // Debe ser dominio verificado
      to: 'operacionescallao@gtl.pe',
      subject: `Nueva Cotización de ${body.compania}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>RUC:</strong> ${body.ruc}</p>
        <p><strong>Compañía:</strong> ${body.compania}</p>
        <p><strong>Nombre:</strong> ${body.nombre}</p>
        <p><strong>País:</strong> ${body.pais}</p>
        <p><strong>Servicio:</strong> ${body.servicio}</p>
        <p><strong>Sector:</strong> ${body.sector}</p>
        <p><strong>Mercancía:</strong> ${body.mercancia}</p>
        <p><strong>Teléfono:</strong> ${body.telefono}</p>
        <p><strong>Correo:</strong> ${body.correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${body.mensaje}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
```

## PASO 4: Actualizar FormularioCotizacion.tsx (3 minutos)

Reemplazar la función `handleSubmit` con:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
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
      alert('¡Gracias por tu mensaje! Nos contactaremos contigo pronto.')
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
      alert('Error al enviar el mensaje. Por favor intenta nuevamente.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Error al enviar el mensaje. Por favor intenta nuevamente.')
  } finally {
    setIsSubmitting(false)
  }
}
```

## PASO 5: Deploy y Test (2 minutos)

```bash
# En producción (VPS)
cd /home/gtl.pe/public_html
npm install resend
npm run build
pm2 restart gtl

# Test
curl -X POST https://gtl.pe/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "ruc": "12345678901",
    "compania": "Test Company",
    "nombre": "Test User",
    "pais": "Perú",
    "servicio": "Agencia de Carga",
    "sector": "Industrial",
    "mercancia": "Maquinaria",
    "telefono": "+51 999 999 999",
    "correo": "test@example.com",
    "mensaje": "Mensaje de prueba"
  }'
```

## NOTAS IMPORTANTES:

1. **Dominio Verificado**: 
   - Si usas `from: 'contacto@gtl.pe'`, debes verificar gtl.pe en Resend
   - Alternativa temporal: usar `onboarding@resend.dev` para testing

2. **Límites Gratis**:
   - 100 emails/día
   - 3,000 emails/mes
   - Suficiente para empezar

3. **Variables de Entorno**:
   - Asegúrate que `.env.local` esté en `.gitignore`
   - En producción: agregar RESEND_API_KEY en environment variables

4. **Alternativa Sin Dominio Verificado**:
```typescript
from: 'onboarding@resend.dev', // Para testing
reply_to: 'operacionescallao@gtl.pe', // Para respuestas
```

---

## 🎯 TIEMPO TOTAL: 10 MINUTOS

1. npm install (30s)
2. Crear cuenta Resend (2min)
3. Crear API route (2min)
4. Actualizar formulario (3min)
5. Deploy + test (2min)

**RESULTADO: Formulario funcionando con emails REALES** ✅
