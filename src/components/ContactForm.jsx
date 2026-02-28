import { useState } from 'react';
import { CONTACT_EMAIL } from '../constants';

/**
 * Formulario de contacto.
 * En producción podría enviar a un backend o mailto.
 * Por ahora usa mailto con los datos del formulario.
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto Génesis Cars - ${formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\n\nMensaje:\n${formData.mensaje}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-gray-50"
      aria-labelledby="contact-title"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-4 animate-on-scroll"
        >
          Contacto
        </h2>
        <p className="text-primary-600 text-center mb-10 animate-on-scroll">
          Escribinos y te respondemos a la brevedad
        </p>

        {sent ? (
          <p className="text-center text-primary-600 py-8">
            Se abrirá tu cliente de correo. Si prefieres, también podés escribirnos por WhatsApp.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm animate-on-scroll"
          >
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-primary-900 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-primary-900 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                placeholder="+54 9 299 123 4567"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-primary-900 mb-1">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary-800 hover:bg-primary-900 text-white font-medium rounded-lg transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
