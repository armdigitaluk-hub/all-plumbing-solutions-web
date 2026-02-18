# 🚀 Configuración de EmailJS para Manejadorde Formularios

## ¿Qué es esto?

Reemplazamos **FormSubmit.co** con **EmailJS**, que es una solución profesional invisible que:
- ✅ Envía emails sin exponer servicios terceros
- ✅ Muestra mensajes personalizados y profesionales
- ✅ No genera redirecciones a sitios externos
- ✅ Mantiene la identidad de marca (Serena Massages / All Plumbing Solutions)

---

## 📋 Pasos de Configuración

### 1️⃣ Crear una cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (arriba a la derecha)
3. Crea una cuenta con tu email
4. Verifica tu email (revisa la bandeja de entrada)

---

### 2️⃣ Obtener tus credenciales

1. Inicia sesión en [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Ve a **Settings / Clave API** en la barra lateral izquierda
3. Copia tu **PUBLIC KEY**

Ahora crea un servicio de email:

1. En el panel, haz clic en **Email Services** (barra lateral)
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** (o tu proveedor de email)
4. Autoriza a EmailJS a enviar emails desde tu cuenta
5. Completa el formulario y guarda
6. **Copia el SERVICE_ID** que aparece

Finalmente, crea una plantilla de email:

1. Ve a **Email Templates** (barra lateral)
2. Haz clic en **"Create New Template"**
3. Usa la siguiente estructura:

**Asunto:**
```
Nueva solicitud recibida: {{name}}
```

**Contenido del email:**
```
Hola,

Has recibido una nueva solicitud de contacto:

Nombre: {{name}}
Teléfono: {{phone}}
Código Postal: {{postcode}}
Servicio: {{service}}
Mensaje: {{message}}
Fecha/Hora: {{timestamp}}

Responde a este cliente lo antes posible.

Saludos,
Sistema de Contactos
```

4. Guarda la plantilla
5. **Copia el TEMPLATE_ID**

---

### 3️⃣ Actualizar las credenciales en el código

Abre `js/form-handler.js` y busca esta sección (líneas ~12-17):

```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_placeholder',      // 👈 Reemplaza aquí
    TEMPLATE_ID: 'template_placeholder',    // 👈 Reemplaza aquí
    PUBLIC_KEY: 'public_key_placeholder'    // 👈 Reemplaza aquí
};
```

Reemplaza los valores `placeholder` con tus credenciales reales:

**Ejemplo:**
```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc12345',
    TEMPLATE_ID: 'template_xyz98765',
    PUBLIC_KEY: 'abcdefg1234567890hij'
};
```

---

### 4️⃣ Cambiar el email destinatario (opcional)

Si quieres cambiar a quién se envían los emails, abre `js/form-handler.js` y busca la línea ~83:

```javascript
to_email: 'armmanagementuk@gmail.com',
```

Reemplázala con el email que desees:

```javascript
to_email: 'reservas@serenamassages.es',  // O el tuyo
```

---

## ✨ Resultado Final

Cuando alguien llene el formulario:

1. **Durante el envío:** El botón mostrará "Enviando..."
2. **Si es exitoso:** Aparecerá un modal bonito con:
   - ✓ Icono de éxito (verde)
   - Mensaje: "¡Gracias por tu mensaje!"
   - Explicación profesional y humana
   - Se cierra automáticamente después de 5 segundos
3. **Si falla:** Modal de error con opción de reintentar

---

## 🔒 Seguridad

La **PUBLIC_KEY** es segura de exponer en el frontend (es pública por diseño). La **SERVICE_ID** y **TEMPLATE_ID** también son seguras.

Sin embargo, aún así se recomienda:
- No compartir públicamente el repositorio si contiene credenciales
- Cambiar credenciales si el repositorio se hace público

---

## 🆘 Solución de Problemas

| Problema | Solución |
|----------|----------|
| **"Error cargando EmailJS"** | Verifica tu conexión a internet |
| **"No se envía el email"** | Revisa que los IDs sean correctos en `form-handler.js` |
| **"El modal no aparece"** | Abre DevTools (F12) > Console y revisa log de errores |
| **"Los emails se marcan como spam"** | Autoriza el dominio en las configuraciones de EmailJS |

---

## 📚 Referencias

- [Documentación oficial de EmailJS](https://www.emailjs.com/docs/)
- [Dashboard de EmailJS](https://dashboard.emailjs.com/)

---

**¡Listo! Tu formulario ahora envía emails de forma profesional sin exponer servicios terceros.** ✨
