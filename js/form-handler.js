/**
 * Form Handler - Gestiona el envío de formularios con EmailJS
 * Reemplaza FormSubmit.co con una solución profesional y propia
 */

(function() {
  'use strict';

  // Configuración de EmailJS
  // IMPORTANTE: Reemplaza con tus claves reales de EmailJS (desde dashboard.emailjs.com)
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_placeholder',      // Reemplaza con tu SERVICE_ID
    TEMPLATE_ID: 'template_placeholder',    // Reemplaza con tu TEMPLATE_ID
    PUBLIC_KEY: 'public_key_placeholder'    // Reemplaza con tu PUBLIC_KEY
  };

  /**
   * Inicializa EmailJS cuando el DOM está listo
   */
  function initializeEmailJS() {
    // Cargar EmailJS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js';
    script.onload = function() {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      attachFormHandlers();
      console.log('✅ EmailJS inicializado correctamente.');
    };
    script.onerror = function() {
      console.error('❌ Error cargando EmailJS. Verifica la conexión de internet.');
    };
    document.head.appendChild(script);
  }

  /**
   * Adjunta handlers a todos los formularios de la página
   */
  function attachFormHandlers() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      // Prevenir envío por defecto
      form.addEventListener('submit', handleFormSubmit);
    });
  }

  /**
   * Maneja el envío del formulario
   */
  function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Mostrar estado de carga
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    // Recopilar datos del formulario
    const formData = new FormData(form);
    const templateParams = {
      to_email: 'armmanagementuk@gmail.com',  // Email destino
      subject: formData.get('_subject') || 'New Form Submission',
      name: formData.get('name') || 'Unknown',
      phone: formData.get('phone') || 'Not provided',
      postcode: formData.get('postcode') || 'Not provided',
      service: formData.get('service') || 'Not specified',
      message: formData.get('message') || 'No message provided',
      timestamp: new Date().toLocaleString('es-ES')
    };

    // Enviar con EmailJS
    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    ).then(
      function(response) {
        console.log('✅ Email enviado exitosamente.', response.status, response.text);
        showSuccessMessage(form, submitBtn, originalBtnText);
      },
      function(error) {
        console.error('❌ Error al enviar email:', error);
        showErrorMessage(form, submitBtn, originalBtnText);
      }
    );
  }

  /**
   * Muestra un mensaje de éxito personalizado y profesional
   */
  function showSuccessMessage(form, submitBtn, originalBtnText) {
    // Crear modal de éxito
    const modal = document.createElement('div');
    modal.className = 'success-modal-overlay';
    modal.innerHTML = `
      <div class="success-modal-content">
        <div class="success-icon">✓</div>
        <h2>¡Gracias por tu mensaje!</h2>
        <p>Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo lo antes posible a través del teléfono o email proporcionados.</p>
        <p class="success-subtext">Un miembro de nuestro equipo revisará tu solicitud en las próximas 24 horas.</p>
        <button class="success-btn" onclick="this.closest('.success-modal-overlay').remove()">Cerrar</button>
      </div>
    `;

    document.body.appendChild(modal);

    // Limpiar formulario
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;

    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
      const overlay = document.querySelector('.success-modal-overlay');
      if (overlay) {
        overlay.remove();
      }
    }, 5000);
  }

  /**
   * Muestra mensaje de error humanizado
   */
  function showErrorMessage(form, submitBtn, originalBtnText) {
    const modal = document.createElement('div');
    modal.className = 'error-modal-overlay';
    modal.innerHTML = `
      <div class="error-modal-content">
        <div class="error-icon">⚠</div>
        <h2>Oops, hubo un problema</h2>
        <p>No pudimos procesar tu solicitud en este momento. Por favor, intenta de nuevo en unos segundos.</p>
        <p class="error-subtext">Si el problema persiste, puedes llamarnos directamente.</p>
        <button class="error-btn" onclick="this.closest('.error-modal-overlay').remove()">Reintentar</button>
      </div>
    `;

    document.body.appendChild(modal);
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;

    // Auto-cerrar después de 4 segundos
    setTimeout(() => {
      const overlay = document.querySelector('.error-modal-overlay');
      if (overlay) {
        overlay.remove();
      }
    }, 4000);
  }

  /**
   * Inyectaestilo CSS para los modales
   */
  function injectModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Modal Overlay */
      .success-modal-overlay, .error-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-in;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      /* Modal Content */
      .success-modal-content, .error-modal-content {
        background: white;
        border-radius: 12px;
        padding: 40px;
        max-width: 450px;
        width: 90%;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.4s ease-out;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Icons */
      .success-icon {
        width: 70px;
        height: 70px;
        background: #6b9d7e;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin: 0 auto 20px;
        font-weight: bold;
      }

      .error-icon {
        width: 70px;
        height: 70px;
        background: #d97706;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        margin: 0 auto 20px;
        font-weight: bold;
      }

      /* Modal Text */
      .success-modal-content h2, .error-modal-content h2 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: #3d3d3d;
        font-weight: 700;
      }

      .success-modal-content p, .error-modal-content p {
        font-size: 0.95rem;
        color: #555;
        line-height: 1.6;
        margin-bottom: 12px;
      }

      .success-subtext, .error-subtext {
        font-size: 0.85rem;
        color: #888;
        margin-top: 15px;
      }

      /* Buttons */
      .success-btn, .error-btn {
        padding: 12px 30px;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
      }

      .success-btn {
        background: #6b9d7e;
        color: white;
      }

      .success-btn:hover {
        background: #5a8a6b;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(107, 157, 126, 0.3);
      }

      .error-btn {
        background: #d97706;
        color: white;
      }

      .error-btn:hover {
        background: #b85d00;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
      }

      /* Responsive */
      @media (max-width: 600px) {
        .success-modal-content, .error-modal-content {
          padding: 30px 20px;
        }
        .success-modal-content h2, .error-modal-content h2 {
          font-size: 1.2rem;
        }
        .success-icon, .error-icon {
          width: 60px;
          height: 60px;
          font-size: 2rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Iniciar cuando el documento esté listo
   */
  document.addEventListener('DOMContentLoaded', function() {
    injectModalStyles();
    initializeEmailJS();
  });

})();
