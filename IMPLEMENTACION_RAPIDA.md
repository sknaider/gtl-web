# 🚀 IMPLEMENTACIÓN RÁPIDA - Envío de Emails

## ✅ ARCHIVOS CREADOS

He creado automáticamente todos los archivos necesarios:

```
✅ src/app/api/contact/route.ts          → API route para enviar emails
✅ src/components/forms/FormularioCotizacion.tsx  → Formulario actualizado
✅ .env.local.example                     → Template de variables de entorno
✅ SOLUCION_EMAIL.md                      → Documentación completa
```

---

## 📋 PASOS PARA ACTIVAR (10 MINUTOS)

### PASO 1: Instalar Resend (30 segundos)

```bash
cd D:\IA\webgtl\new\itaw-clone
npm install resend
```

### PASO 2: Configurar API Key (3 minutos)

1. **Crear cuenta Resend:**
   - Ve a: https://resend.com/signup
   - Regístrate gratis (100 emails/día)

2. **Obtener API Key:**
   - Dashboard → API Keys → Create API Key
   - Copia la key (empieza con `re_`)

3. **Crear archivo `.env.local`:**
   ```bash
   # Copiar el template
   copy .env.local.example .env.local
   
   # Editar y agregar tu API key
   notepad .env.local
   ```

4. **Agregar tu API key:**
   ```
   RESEND_API_KEY=re_tu_api_key_real_aqui
   ```

### PASO 3: Test Local (2 minutos)

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
http://localhost:3000

# Llenar y enviar el formulario
# Verificar que llegue email a operacionescallao@gtl.pe
```

### PASO 4: Deploy a Producción (5 minutos)

```bash
# 1. SSH al servidor
ssh root@72.60.126.13

# 2. Ir al directorio del proyecto
cd /home/gtl.pe/public_html

# 3. Pull cambios (si usas Git) O subir archivos actualizados

# 4. Instalar dependencias
npm install resend

# 5. Crear .env.local en servidor
nano .env.local
# Pegar: RESEND_API_KEY=re_tu_api_key_aqui
# Guardar: Ctrl+O, Enter, Ctrl+X

# 6. Rebuild
npm run build

# 7. Reiniciar PM2
pm2 restart gtl

# 8. Verificar logs
pm2 logs gtl
```

### PASO 5: Verificar Dominio (OPCIONAL - Para producción)

**Actual (Temporal):**
```typescript
from: 'GTL Consulting <onboarding@resend.dev>'  // Dominio de prueba Resend
```

**Después de verificar gtl.pe en Resend:**
```typescript
from: 'GTL Consulting <contacto@gtl.pe>'  // Tu dominio verificado
```

**Para verificar dominio:**
1. Dashboard Resend → Domains
2. Add Domain → gtl.pe
3. Agregar DNS records (TXT, MX)
4. Verificar
5. Actualizar `from` en route.ts

---

## 🧪 TESTING

### Test API Direct

```bash
curl -X POST http://localhost:3000/api/contact \
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

**Respuesta esperada:**
```json
{
  "success": true,
  "message": "Email enviado correctamente",
  "data": { "id": "email_id_here" }
}
```

---

## ❓ TROUBLESHOOTING

### Error: "RESEND_API_KEY is not defined"

```bash
# Verificar que .env.local existe
ls -la .env.local

# Verificar contenido
cat .env.local

# Reiniciar servidor dev
# Ctrl+C y npm run dev
```

### Error: "from address must be a verified domain"

**Solución temporal:**
```typescript
// En route.ts, usar:
from: 'onboarding@resend.dev'  // Dominio de prueba
```

**Solución permanente:**
- Verificar gtl.pe en Resend Dashboard
- Configurar DNS records
- Cambiar a `contacto@gtl.pe`

### Email no llega

1. **Verificar Resend Dashboard:**
   - Logs → Ver si email se envió
   - Status del email

2. **Revisar SPAM:**
   - Buscar en carpeta spam de operacionescallao@gtl.pe

3. **Verificar API Key:**
   - Debe tener permisos "Sending access"

---

## 📊 FEATURES IMPLEMENTADOS

✅ Envío real de emails con Resend  
✅ HTML templating profesional  
✅ Reply-to automático al correo del cliente  
✅ Error handling completo  
✅ Loading states en formulario  
✅ Validaciones frontend  
✅ Reset automático del form  
✅ Logs para debugging  

---

## 🎯 PRÓXIMOS PASOS (OPCIONAL)

### 1. Mejorar UX con Toast Notifications

```bash
npm install sonner
```

### 2. Agregar reCAPTCHA

```bash
npm install react-google-recaptcha
```

### 3. Email de Confirmación al Cliente

Agregar segundo email en route.ts:

```typescript
// Email a operacionescallao@gtl.pe (ya existe)
await resend.emails.send({ ... })

// Email de confirmación al cliente
await resend.emails.send({
  from: 'GTL Consulting <contacto@gtl.pe>',
  to: body.correo,
  subject: 'Hemos recibido tu solicitud - GTL Consulting',
  html: `<p>Gracias ${body.nombre}, hemos recibido tu cotización...</p>`
})
```

---

## 📞 SUPPORT

- **Resend Docs:** https://resend.com/docs
- **Resend Status:** https://status.resend.com
- **Email de prueba:** onboarding@resend.dev (100 emails/día gratis)

---

**TIEMPO TOTAL: ~10 MINUTOS** ⏱️

1. npm install resend (30s)
2. Crear cuenta + API key (3min)
3. Configurar .env.local (1min)
4. Test local (2min)
5. Deploy producción (5min)

**RESULTADO: FORMULARIO FUNCIONANDO CON EMAILS REALES** ✅
