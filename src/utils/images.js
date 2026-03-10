/**
 * Resuelve la URL de una imagen en public/ para que funcione en dev y en build (con base path).
 * @param {string} path - Ruta como "/vehicles/territory-1.png"
 * @returns {string} URL absoluta correcta
 */
export function getImageUrl(path) {
  if (!path) return '';
  const base = (import.meta.env.BASE_URL || '/').replace(/\/*$/, '/');
  const cleanPath = path.replace(/^\//, '');
  return `${base}${cleanPath}`;
}
