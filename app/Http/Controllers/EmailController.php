<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Resend; // Importamos la librería de Resend

class EmailController extends Controller
{
    public function enviar(Request $request)
    {
        // Validamos que React nos esté enviando un correo válido
        $request->validate([
            'email' => 'required|email'
        ]);

        // Iniciamos Resend usando la clave segura del archivo .env
        $resend = Resend::client(env('RESEND_API_KEY'));

        try {
            // Enviamos el correo
            $resend->emails->send([
                'from' => 'Hamburguesas <onboarding@resend.dev>', // HAY QUE CAMBIAR REMITENTE
                'to' => [$request->email], // El correo que escribió el usuario
                'subject' => '¡Activa tu cuenta y reclama tu descuento!',
                'html' => '<h3>¡Ya casi eres parte del club!</h3><p>Haz clic aquí para activar tu cuenta.</p>',
            ]);

            
            return response()->json(['message' => 'Correo enviado correctamente'], 200);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Error del servidor',
                'detalle' => $e->getMessage() 
            ], 500);
        }
    }
}