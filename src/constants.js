const WHATSAPP_NUMBER = '542995313662';
export const CONTACT_EMAIL = 'contacto@lymautomotores.com';
export function getWhatsAppUrl(message) {
  const text = encodeURIComponent(message || 'Hola L&M Automotores, estoy interesado en consultar sobre sus vehículos.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
