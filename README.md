# nexu_ia

## Despliegue con GitHub Actions (SSH + PM2)

Este repositorio incluye un workflow de GitHub Actions en `/.github/workflows/deploy.yml` que construye la aplicación con `pnpm` y la despliega a un servidor remoto vía SCP + SSH, reiniciando la app con `pm2`.

Pasos rápidos para usarlo:

- Añade los siguientes _secrets_ en Settings → Secrets → Actions del repositorio:

  - `SSH_HOST`: IP o dominio del servidor remoto.
  - `SSH_USER`: usuario SSH que realizará el despliegue.
  - `SSH_PRIVATE_KEY`: clave privada (PEM) del usuario SSH. No pongas passphrase o usa `ssh-agent` si necesitas passphrase.
  - `SSH_PORT`: puerto SSH (opcional, por defecto `22`).
  - `REMOTE_DIR`: directorio destino en el servidor (por ejemplo `/var/www/my-app`).

- El workflow se dispara automáticamente al hacer `push` a la rama `main` y también puede ejecutarse manualmente desde la pestaña Actions → Deploy to SSH server → Run workflow.

Requisitos en el servidor remoto:

- Tener acceso SSH con el usuario configurado en `SSH_USER` y suficiente permiso sobre `REMOTE_DIR`.
- Tener Node.js disponible (el workflow puede activar `corepack` y preparar `pnpm` si no está presente).
- Si el servidor no tiene `pm2`, el workflow intentará instalarlo globalmente (`npm i -g pm2`). Si no quieres instalaciones globales, reemplaza la gestión de procesos por `systemd` o `docker`.

Notas y buenas prácticas:

- Asegúrate de que la rama principal de despliegue se llame `main` (el trigger está configurado para `main`). Cambia el workflow si usas `master` u otra rama.
- El action copia la carpeta `deploy/` construida por `rsync` (excluye `node_modules`, `.git`, etc.). El servidor ejecuta `pnpm install --prod` y vuelve a construir con `pnpm build` por seguridad.
- Si tu app es completamente estática y quieres usar GitHub Pages o Netlify, dime y genero un workflow alternativo.

Comandos útiles locales:

```pwsh
# instalar dependencias
pnpm install

# ejecutar en desarrollo
pnpm dev

# construir
pnpm build

# probar la versión de producción localmente
pnpm start
```

Si quieres que adapte el workflow para `docker build` -> `push` a un registry, o para desplegar directamente a Vercel, indícalo y lo preparo.
