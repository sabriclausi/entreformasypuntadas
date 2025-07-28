# apiEntreformasypuntadas

# Entre Formas y Puntadas 🧵🎨🪴

Hola, soy Sabri 💛  
Este sitio web es un espacio donde comparto parte de mi mundo creativo. Me dedico a la cerámica, el bordado y la pintura, y aquí vas a encontrar registros en fotos y videos de mis creaciones y procesos.

Cada pieza nace de la exploración, la intuición y el disfrute por hacer con las manos.  
Esta página es una forma de reunir todo eso y compartirlo con quienes quieran asomarse.

> 🛑 Sitio sin fines comerciales.

---

## 🔗 API Exclusiva - Entre Formas y Puntadas

Este proyecto cuenta con una **API propia** para gestionar productos desde un backend local.  
Podés encontrar el repositorio de la API en:

👉 [https://github.com/sabriclausi/apiEntreformasypuntadas.git](https://github.com/sabriclausi/apiEntreformasypuntadas.git)

### 📦 Cómo usar la API paso a paso

#### 1. Cloná o descargá el ZIP

Si descargás como ZIP, descomprimí el archivo y entrá a la carpeta:

```bash
cd ruta/donde/descomprimiste/products_api
```

---

#### 2. Instalá las dependencias

Asegurate de tener **Node.js v18+** instalado.

Desde la carpeta del proyecto:

```bash
npm install
```

Esto instala:

- `express` (servidor)
- `sqlite3` (base de datos)
- `cors` (para permitir llamadas desde el frontend)

---

#### 3. (Opcional) Reinicializar la base de datos

Si querés resetear los datos y cargarlos nuevamente desde `seed.json`:

```bash
npm run init-db
```

---

#### 4. Iniciar el servidor

```bash
npm start
```

Si todo está bien configurado, verás:

```
✅ Servidor corriendo en http://localhost:3000/
```

---

### 🌐 Consultar los productos

Podés acceder desde tu navegador, Postman o tu frontend con:

```bash
http://localhost:3000/products
```

Esto devuelve un array de objetos con los siguientes campos:

- `id`
- `name`
- `desc`
- `price`
- `stock`
- `cat` (categoría)
- `images` (array de URLs)

---
