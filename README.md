# PNT2-FINAL
Final Materia Programación Nuevas Tecnologías

## Descripción

Este proyecto es una aplicación Vue.js que incluye un conversor de divisas y un componente de respuestas.

## Conversor a Dólares

El componente **Conversor** (`src/components/Conversor.vue`) es una herramienta para convertir moneda a dólares.

### Funcionalidades:

1. **Ingrese monto $**: Campo de entrada donde puedes escribir el monto en pesos argentinos que deseas convertir.

2. **Valor dólar en $**: Campo que muestra el valor actual del dólar. Tiene dos modos:
   - **Modo Manual**: Puedes ingresar manualmente el valor del dólar
   - **Modo Automático**: Al activar el checkbox "Actualizar automáticamente", el valor se obtiene automáticamente desde la API de Bluelytics cada 2 segundos

3. **Actualizar automáticamente**: Checkbox que activa/desactiva la actualización automática del valor del dólar desde la API. Cuando está activo:
   - El campo "Valor dólar en $" se deshabilita para edición manual
   - Se muestra la fecha y hora de la última actualización
   - El valor se actualiza cada 2 segundos

4. **Valor Convertido**: Muestra el resultado de dividir el monto ingresado entre el valor del dólar. La fórmula es:
   - Monto ($) ÷ Valor dólar en $ = Cantidad en dólares
   - El resultado se muestra en color negro

## Respuestas

El componente **Respuestas** se encuentra en `src/components/Respuestas.vue` y se utiliza para mostrar información de respuestas pedidas en el exámen.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Conversor.vue      # Componente del conversor de divisas
│   ├── Respuestas.vue     # Componente de respuestas
│   └── Navbar.vue         # Barra de navegación
├── App.vue                # Componente principal
├── main.js                # Punto de entrada
├── router.js              # Configuración de rutas
└── assets/                # Estilos y recursos
```

## Instalación y Ejecución

Para instalar las dependencias:
```bash
npm install
```

Para ejecutar en modo desarrollo:
```bash
npm run dev
```

Para compilar para producción:
```bash
npm run build
```
