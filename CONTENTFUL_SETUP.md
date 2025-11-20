# Guía de Configuración de Contentful

Esta guía te ayudará a configurar Contentful para el sitio de Food Rituals.

## 1. Crear Cuenta en Contentful

1. Andá a [contentful.com](https://www.contentful.com/)
2. Creá una cuenta gratuita
3. Creá un nuevo Space llamado "Food Rituals"

## 2. Obtener Credenciales

### Space ID y Access Token

1. En tu Space, andá a **Settings** → **API keys**
2. Click en **Add API key**
3. Dale un nombre: "Food Rituals Website"
4. Copiá:
   - **Space ID**
   - **Content Delivery API - access token**

### Management Token (opcional)

1. Andá a **Settings** → **API keys** → **Content management tokens**
2. Click en **Generate personal token**
3. Dale un nombre y permisos apropiados
4. Copiá el token

## 3. Configurar Variables de Entorno

En tu archivo `.env.local`:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=tu_space_id_aqui
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=tu_access_token_aqui
CONTENTFUL_MANAGEMENT_TOKEN=tu_management_token_aqui
```

## 4. Crear Content Models

### Content Model 1: Past Event

**API Identifier**: `pastEvent`

| Field Name | Field ID | Type | Validations |
|------------|----------|------|-------------|
| Title | `title` | Short text | Required, Unique |
| Number | `number` | Short text | Required (ej: "01", "02") |
| Date | `date` | Short text | Required |
| Slug | `slug` | Short text | Required, Unique |
| Images | `images` | Media (Multiple) | Required, Accept: images |
| Description | `description` | Long text | Optional |

**Pasos**:
1. Content model → Add content type
2. Nombre: "Past Event"
3. API Identifier: `pastEvent`
4. Agregar cada campo según la tabla
5. Save

### Content Model 2: Team Member

**API Identifier**: `teamMember`

| Field Name | Field ID | Type | Validations |
|------------|----------|------|-------------|
| Name | `name` | Short text | Required |
| Bio | `bio` | Long text | Required |
| Image | `image` | Media (Single) | Required, Accept: images |
| Order | `order` | Number (Integer) | Required |

**Pasos**:
1. Content model → Add content type
2. Nombre: "Team Member"
3. API Identifier: `teamMember`
4. Agregar cada campo según la tabla
5. Save

### Content Model 3: Contact Info

**API Identifier**: `contactInfo`

| Field Name | Field ID | Type | Validations |
|------------|----------|------|-------------|
| Email | `email` | Short text | Required, Format: email |
| Phone | `phone` | Short text | Required |
| Instagram | `instagram` | Short text | Required |
| Vimeo | `vimeo` | Short text | Optional |

**Pasos**:
1. Content model → Add content type
2. Nombre: "Contact Info"
3. API Identifier: `contactInfo`
4. Agregar cada campo según la tabla
5. Save

## 5. Agregar Contenido de Ejemplo

### Crear Past Events

**Event 1: MIDSOMMAR**
```
Title: MIDSOMMAR
Number: 01
Date: Saturday 2nd October 2021
Slug: midsommar
Images: [subir 01.png hasta 06.png desde backup]
Description: Celebración inspirada en el solsticio de verano...
```

**Event 2: THE TAROT TABLE**
```
Title: THE TAROT TABLE
Number: 02
Date: Saturday 19th June 2021
Slug: the-tarot-table
Images: [subir 07.png hasta 13.png desde backup]
Description: Una experiencia mística...
```

**Event 3: SAMHAIN**
```
Title: SAMHAIN
Number: 03
Date: Sunday 31st October 2021
Slug: samhain
Images: [subir 14.png hasta 18.png desde backup]
Description: Ritual de año nuevo celta...
```

**Event 4: EL BANQUETE DE PLATÓN**
```
Title: EL BANQUETE DE PLATÓN
Number: 04
Date: Thursday 26th May 2022
Slug: el-banquete-de-platon
Images: [subir 19.png hasta 24.png desde backup]
Description: Una reinterpretación del simposio platónico...
```

### Crear Team Members

**Antonella**
```
Name: Antonella
Bio: Artista visual, performer y "cocinera de rituales" argentina, radicada en NYC. Su trabajo busca explorar la antropología de los rituales cotidianos, transformándolos en experiencias sensoriales inmersivas que desafían las fronteras entre el arte, la comida y la ceremonia.
Image: [subir Antonella.png desde backup/homedir/public_html/wp-content/themes/foodrituals/img/]
Order: 1
```

**Sandie**
```
Name: Sandie
Bio: Directora de teatro, escenógrafa y conceptualizadora de experiencias inmersivas. Con una formación en dramaturgia y diseño espacial, Sandie trae una sensibilidad única para construir mundos teatrales que integran todos los sentidos.
Image: [subir Sandie.png desde backup]
Order: 2
```

### Crear Contact Info

```
Email: hello@food-rituals.com
Phone: +1 (123) 456-7890
Instagram: @foodritualss
Vimeo: https://vimeo.com/user168817888
```

## 6. Subir Imágenes a Contentful

1. Andá a **Media** en el menú lateral
2. Click en **Add asset** → **Upload**
3. Subí todas las imágenes desde:
   ```
   backup/homedir/public_html/wp-content/themes/foodrituals/img/
   ```
4. Organizá en carpetas:
   - Events (01.png hasta 24.png)
   - Team (Antonella.png, Sandie.png)

## 7. Publicar Contenido

1. Para cada entry creado, click en **Publish**
2. Verificá que todas las entries estén publicadas (indicador verde)

## 8. Usar Contenido en el Sitio

### Ejemplo: Obtener eventos pasados

```typescript
import { getEntries } from '@/lib/contentful/client';

const events = await getEntries('pastEvent', {
  order: 'fields.number'
});
```

### Ejemplo: Obtener team members

```typescript
import { getEntries } from '@/lib/contentful/client';

const team = await getEntries('teamMember', {
  order: 'fields.order'
});
```

## 9. Tips y Mejores Prácticas

### Optimización de Imágenes
- Contentful optimiza automáticamente las imágenes
- Podés agregar parámetros de transformación en las URLs
- Ejemplo: `?w=800&h=600&fit=fill`

### Webhooks (Opcional)
- Configurá webhooks para rebuild automático
- Settings → Webhooks → Add webhook
- URL: Tu Vercel webhook URL
- Triggers: Publish, Unpublish, Delete

### Preview Mode (Opcional)
- Configurá Preview API para ver cambios sin publicar
- Útil para staging environment

## 10. Troubleshooting

### "No se muestran las imágenes"
- Verificá que las imágenes estén Published
- Revisá que el Access Token tenga permisos correctos
- Verificá que `next.config.ts` tenga el dominio de Contentful

### "Error 401 Unauthorized"
- Tu Access Token es incorrecto
- Verificá las variables de entorno
- Asegurate de usar el Content Delivery API token (no Management API)

### "Content type not found"
- El API Identifier no coincide
- Verificá que sea exactamente `pastEvent`, `teamMember`, `contactInfo`

## 11. Recursos Adicionales

- [Documentación oficial de Contentful](https://www.contentful.com/developers/docs/)
- [Next.js + Contentful Tutorial](https://www.contentful.com/blog/next-js-tutorial/)
- [Contentful Management API](https://www.contentful.com/developers/docs/references/content-management-api/)

---

¿Necesitás ayuda? Revisá el README.md principal o contactá al equipo de desarrollo.

