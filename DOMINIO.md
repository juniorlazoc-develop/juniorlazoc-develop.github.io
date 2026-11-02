# Tu dominio propio

Un dominio es el nombre que la gente escribe en el navegador, por ejemplo `juniorlazo.com`. Se **alquila por año** a un registrador. Tu sitio ya está alojado gratis en GitHub Pages; el dominio solo hace que esa dirección apunte allí.

```text
juniorlazo.com → DNS (la "guía telefónica" de internet) → GitHub Pages → tus archivos
```

Mientras no compres uno, el sitio funciona en https://juniorlazoc-develop.github.io/ y puedes usar ese enlace en tu CV y LinkedIn.

## 1. Elegir el nombre

- Corto, fácil de dictar y sin guiones: `juniorlazo.com`, `juniorlazo.dev`, `jlazo.pe`.
- `.com` es el más reconocido. `.dev` es popular entre desarrolladores. `.pe` muestra que eres de Perú, pero cuesta más.

## 2. Dónde comprarlo

| Registrador | Conviene para | Precio aproximado (nov 2026) |
| --- | --- | --- |
| **Cloudflare Registrar** (cloudflare.com) | `.com` y `.dev` más baratos | `.com` ≈ US$ 11/año; renovar cuesta lo mismo |
| **Porkbun** o **Namecheap** | Alternativas sencillas | Similar; revisa el precio de **renovación** |
| **Punto.pe** o un registrador peruano autorizado | `.pe` | ≈ S/ 110–140/año |

Al pagar:

- Usa una tarjeta que permita compras internacionales.
- Activa la **renovación automática**: si el dominio vence, otra persona puede comprarlo.
- Deja activa la **privacidad WHOIS** (suele ser gratis) para no publicar tu dirección.
- No compres "hosting", "SSL" ni "constructor de sitios": GitHub Pages ya te da alojamiento y HTTPS gratis.

## 3. Conectar el dominio con GitHub Pages

### a) En tu registrador: crea estos registros DNS

| Tipo | Nombre | Valor |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `juniorlazoc-develop.github.io` |

`@` significa "el dominio raíz" (`juniorlazo.com`). Si tu registrador ya trae registros A o CNAME de ejemplo ("parking"), bórralos. En Cloudflare deja la nube en **gris (DNS only)**.

### b) En GitHub

1. Repositorio `juniorlazoc-develop.github.io` → **Settings → Pages**.
2. En **Custom domain** escribe tu dominio (por ejemplo `juniorlazo.com`) y pulsa **Save**. GitHub crea un archivo `CNAME` en el repositorio: no lo borres.
3. Espera a que la verificación DNS salga en verde (minutos, a veces hasta 24 horas).
4. Marca **Enforce HTTPS** para tener el candado 🔒.

Recomendado: en tu cuenta (foto de perfil → **Settings → Pages → Add a domain**) verifica el dominio. GitHub te pedirá un registro TXT; así nadie más puede usar tu dominio en GitHub.

### c) Actualiza el proyecto

Reemplaza `https://juniorlazoc-develop.github.io/` por tu dominio en:

| Archivo | Qué cambiar |
| --- | --- |
| `index.html` | `og:url`, `og:image` y `canonical` (arriba, con un comentario) |
| `robots.txt` | Línea `Sitemap:` |
| `sitemap.xml` | `<loc>` |

Después cambia el enlace en tu CV y en LinkedIn. Puedes revisar cómo se ve el enlace en LinkedIn con https://www.linkedin.com/post-inspector/

## 4. Opcional: correo con tu dominio

Para recibir correos en `contacto@juniorlazo.com`:

- **Cloudflare Email Routing** (gratis): reenvía a tu Gmail. Solo recibe.
- **Zoho Mail** (plan gratuito limitado) o **Google Workspace** (pago): buzón completo.

No es necesario: tu Gmail funciona bien en el portafolio.
