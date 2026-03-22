# TechStore

Plataforma ecommerce de productos tecnológicos (celulares, tablets, electrodomésticos, accesorios).

## Stack tecnológico

- **Next.js 14** (App Router) — frontend + BFF
- **React 18** — UI
- **Node.js** — runtime
- **Sequelize 6** — ORM (solo migraciones, sin `sync`)
- **PostgreSQL** — base de datos
- **NPM** — gestor de paquetes

## Arquitectura

El proyecto aplica una arquitectura modular basada en dominios (feature-based). Cada módulo en `modules/` encapsula su propia lógica en cuatro capas:

```
modules/<domain>/
├── <domain>.model.js       → definición del modelo Sequelize
├── <domain>.repository.js  → acceso a datos (queries)
├── <domain>.service.js     → lógica de negocio
└── <domain>.controller.js  → manejo de request/response
```

Las rutas en `app/api/` actúan como BFF (Backend for Frontend): reciben las peticiones HTTP y delegan inmediatamente al controller correspondiente, sin contener lógica propia.

```
app/api/<domain>/route.js  →  controller  →  service  →  repository  →  model
```

La configuración de Sequelize y las migraciones viven en `lib/sequelize/`, completamente separadas de los módulos de negocio.

## Estructura de carpetas

```
├── app/
│   ├── api/                  # BFF — rutas API de Next.js
│   │   ├── products/route.js
│   │   ├── users/route.js
│   │   └── orders/route.js
│   ├── (store)/              # Grupo de rutas públicas (tienda)
│   │   ├── page.js
│   │   └── layout.js
│   ├── (admin)/              # Grupo de rutas privadas (admin)
│   │   └── dashboard/page.js
│   └── layout.js
├── modules/                  # Lógica de negocio por dominio
│   ├── products/
│   ├── users/
│   ├── orders/
│   └── categories/
├── lib/
│   └── sequelize/
│       ├── config/database.js
│       ├── migrations/
│       ├── seeders/
│       └── index.js          # Instancia Sequelize singleton
├── .env.example
├── .sequelizerc
├── next.config.js
└── package.json
```

## Comandos básicos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Base de datos
npm run db:migrate          # Ejecutar migraciones pendientes
npm run db:migrate:undo     # Revertir última migración
npm run db:seed             # Ejecutar seeders
npm run db:seed:undo        # Revertir seeders
```

## Configuración inicial

1. Copiar `.env.example` a `.env.local` y completar las variables:

```bash
cp .env.example .env.local
```

2. Crear la base de datos en PostgreSQL:

```sql
CREATE DATABASE techstore_db;
```

3. Ejecutar migraciones:

```bash
npm run db:migrate
```

## Convenciones del proyecto

- Nombres de archivos en `kebab-case` para carpetas, `camelCase` para variables/funciones.
- Cada módulo es autónomo: no importar directamente el repository de otro módulo, usar el service correspondiente.
- Las rutas API solo llaman al controller, nunca al service o repository directamente.
- Toda modificación de esquema de base de datos debe hacerse mediante una nueva migración, nunca con `sequelize.sync`.
- Variables de entorno sensibles nunca se commitean; usar `.env.local` (ignorado por git).

## Módulos planificados

| Módulo | Estado |
|---|---|
| products | base lista |
| categories | base lista |
| users | base lista |
| orders | base lista |
| auth | pendiente |
| cart | pendiente |
| payments | pendiente |
