---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# 🧬 Clonar y levantar un Monorepo con Turborepo

Este documento explica cómo clonar un proyecto que utiliza [Turborepo](https://turbo.build/repo) para la gestión de un monorepo.

## 🚀 Requisitos previos

Antes de comenzar, asegurate de tener instalado:

- **Git**
- **Node.js** (versión recomendada en el proyecto)
- **PNPM** (recomendado por Turborepo para workspaces más eficientes)
- (Opcional) **Docker** si el proyecto lo requiere

### Ejemplo de anidacion con Headings
Hola hosadasjda sjoafpo janfoajsdnf aojnfaojf nalkc alskd

## 📦 Clonar el repositorio

```bash
git clone https://github.com/tu-org/tu-proyecto.git
cd tu-proyecto
```

> 💡 Cambiá la URL por la de tu repositorio real.

## 📂 Instalar dependencias

```bash
pnpm install
```

Esto instalará las dependencias en todos los paquetes del monorepo gracias a los **workspaces**.

## ⚙️ Estructura del proyecto

Un monorepo típico con Turborepo tiene una estructura como esta:

```
tu-proyecto/
├── apps/
│   ├── web/
│   └── admin/
├── packages/
│   ├── ui/
│   └── config/
├── turbo.json
└── pnpm-workspace.yaml
```

- `apps/`: Contiene las aplicaciones principales del proyecto.
- `packages/`: Contiene paquetes compartidos entre las apps.
- `turbo.json`: Archivo de configuración de Turborepo.
- `pnpm-workspace.yaml`: Define qué carpetas son parte del workspace.

## ▶️ Levantar el proyecto

```bash
pnpm turbo run dev
```

Esto ejecutará todos los targets `dev` definidos en el `turbo.json`, normalmente para iniciar tus aplicaciones (por ejemplo, Next.js, API REST, etc.).

## 🧠 Consejos útiles

- Podés correr tareas específicas por app:

```bash
pnpm --filter web dev
```

- Para hacer build de todo:

```bash
pnpm turbo run build
```

## 🧪 Verificación

Asegurate de que todo funciona correctamente:

- Verificá en el navegador si las apps levantan correctamente (`http://localhost:3000` o similar).
- Verificá logs de consola por si hay errores.

---

Listo, ¡ya tenés el monorepo funcionando! 🎉
