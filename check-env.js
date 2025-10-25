// Script para verificar variables de entorno
const fs = require('fs');
const path = require('path');

console.log('=== VERIFICACIÓN .env.local ===\n');

const envPath = path.join(__dirname, '.env.local');
console.log('Buscando en:', envPath);
console.log('Archivo existe:', fs.existsSync(envPath));

if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  console.log('Contenido del archivo:');
  console.log(content);
  console.log('\nLongitud:', content.length, 'caracteres');
  console.log('Incluye RESEND_API_KEY:', content.includes('RESEND_API_KEY'));
}

console.log('\n=== VARIABLES EN PROCESS.ENV ===');
console.log('RESEND_API_KEY existe:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);
if (process.env.RESEND_API_KEY) {
  console.log('RESEND_API_KEY value:', process.env.RESEND_API_KEY.substring(0, 10) + '...');
}
