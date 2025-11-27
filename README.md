# nexu_ia

## Despliegue con GitHub Actions (GitHub Pages)

Este repositorio ahora despliega la salida estática generada por Next.js a GitHub Pages usando la rama `gh-pages`.

Resumen del workflow (`.github/workflows/deploy.yml`):

- Ejecuta `pnpm build` y `pnpm exec next export` para generar la salida estática en `./out`.
- Publica `./out` en la rama `gh-pages` usando `peaceiris/actions-gh-pages@v3`.

Requisitos y notas importantes:

- La publicación **usa** `gh-pages` (ramo `gh-pages`). GitHub Pages debe estar configurado para servir desde esa rama (Settings → Pages → Branch: `gh-pages`).
- Next.js debe ser compatible con `next export` (sitio estático). Si tu app usa Server Side Rendering, API Routes o rutas dinámicas que no pueden exportarse estáticamente, este flujo no funcionará y necesitaremos usar Vercel, Netlify o un servidor Node.
- Para repositorios públicos, el `GITHUB_TOKEN` proporcionado automáticamente por Actions suele ser suficiente. Si tu repo es privado y necesitas más permisos, crea un Personal Access Token (PAT) con `repo` y configúralo como secret `ACTIONS_DEPLOY_TOKEN` y actualiza el workflow.

Cómo probar localmente la exportación estática:

```pwsh
# instalar dependencias
pnpm install

# construir + exportar estático
pnpm exec next build
pnpm exec next export

# el resultado queda en ./out
ls -la out
```

Si tu proyecto no es Next.js (por ejemplo, es una SPA creada con CRA), puedo actualizar el workflow para usar `pnpm run build` y publicar la carpeta `build/` en lugar de `out/`.

Si prefieres volver al despliegue por SSH/PM2, Docker o a Vercel, dime y preparo el workflow alternativo.
