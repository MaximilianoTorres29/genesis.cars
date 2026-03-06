// Número de WhatsApp: +54 9 299 531 3662 (formato wa.me sin espacios ni +)
export const WHATSAPP_NUMBER = '542995313662';
export const WHATSAPP_MESSAGE = 'Hola L&M Automotores, estoy interesado en consultar sobre sus vehículos.';
export const CONTACT_EMAIL = 'maximilianotorres147@gmail.com';

export const getWhatsAppUrl = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Aclaración para precios: la transferencia no está incluida */
export const PRICE_TRANSFER_NOTE = '+ transferencia';
