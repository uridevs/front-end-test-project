# Front-end Test - Mobile shop

Solución a la prueba técnica de Front-End para la creación de una miniaplicación de compra de dispositivos electrónicos.

## Descripción

Este proyecto contiene una app construida con React y TypeScript. La aplicación constará de dos vistas:
* Página de listado de productos 
* Página de detalles de producto 

## Ejecución del Proyecto

A continuación se detallan los scripts requeridos para gestionar la aplicación.

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Modo Desarrollo (START):**
    *Este script arrancará la aplicación en modo desarrollo*.
    ```bash
    npm run start
    ```

3.  **Compilación (BUILD):**
    *Este script compilará la aplicación para producción*.
    ```bash
    npm run build
    ```

4.  **Lanzamiento de Tests (TEST):**
    *Este script ejecutará los tests*.
    ```bash
    npm run test
    ```

5.  **Comprobación de Código (LINT):**
    *Este script comprobará la calidad y estilo del código*.
    ```bash
    npm run lint
    ```

## Notas Adicionales

* **Caché:** La aplicación implementará un sistema de caché en cliente (localStorage) para las peticiones a la API, con una expiración de 1 hora, según los requisitos.