#!/usr/bin/env bash
# Enlaza este proyecto con GitHub y hace push.
# Uso:
#   Opción 1: Creá el repo en GitHub (github.com/new, nombre: genesis-cars), luego:
#     GITHUB_USER=tu-usuario ./scripts/link-and-push.sh
#   Opción 2: Si ya tenés la URL del repo:
#     GITHUB_REPO_URL=https://github.com/tu-usuario/genesis-cars.git ./scripts/link-and-push.sh
# Si usás SSH: GITHUB_REPO_URL=git@github.com:tu-usuario/genesis-cars.git ./scripts/link-and-push.sh

set -e
cd "$(dirname "$0")/.."

if [ -n "$GITHUB_REPO_URL" ]; then
  URL="$GITHUB_REPO_URL"
elif [ -n "$GITHUB_USER" ]; then
  URL="https://github.com/${GITHUB_USER}/genesis-cars.git"
else
  echo "Definí GITHUB_USER o GITHUB_REPO_URL."
  echo "Ejemplo: GITHUB_USER=mi-usuario ./scripts/link-and-push.sh"
  exit 1
fi

if git remote get-url origin 2>/dev/null; then
  git remote set-url origin "$URL"
else
  git remote add origin "$URL"
fi

git push -u origin main
echo "Listo: push a $URL"
