import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// DEBUG: Verificar API key
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY length:', process.env.RESEND_API_KEY?.length);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'GTL Consulting <contacto@gtl.pe>',
      to: 'operacionescallao@gtl.pe',
      replyTo: body.correo, // Para que puedas responder directamente al cliente
      subject: `Nueva Cotización de ${body.compania}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
            Nueva Solicitud de Cotización
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Información del Cliente</h3>
            <p><strong>RUC:</strong> ${body.ruc || 'No proporcionado'}</p>
            <p><strong>Compañía:</strong> ${body.compania}</p>
            <p><strong>Nombre:</strong> ${body.nombre}</p>
            <p><strong>País:</strong> ${body.pais}</p>
            <p><strong>Teléfono:</strong> ${body.telefono}</p>
            <p><strong>Correo:</strong> <a href="mailto:${body.correo}">${body.correo}</a></p>
          </div>

          <div style="background-color: #f3f4f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Detalles del Servicio</h3>
            <p><strong>Servicio Solicitado:</strong> ${body.servicio}</p>
            <p><strong>Sector:</strong> ${body.sector}</p>
            <p><strong>Mercancía:</strong> ${body.mercancia || 'No especificado'}</p>
          </div>

          ${body.mensaje ? `
            <div style="background-color: #f3f4f6; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3 style="color: #1f2937; margin-top: 0;">Mensaje</h3>
              <p style="white-space: pre-wrap;">${body.mensaje}</p>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>Este correo fue enviado desde el formulario de contacto de <a href="https://gtl.pe">gtl.pe</a></p>
            <p>Puedes responder directamente a este correo para contactar al cliente.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente',
      data 
    });
    
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
