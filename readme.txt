Manual de Instalación para un Backend con Express y MongoDB

Prerrequisitos

Node.js y npm: Asegúrate de tener Node.js y npm instalados en tu máquina.

Descarga e instala desde nodejs.org.
MongoDB: Asegúrate de tener MongoDB instalado y en ejecución.

Instálalo desde mongodb.com.

Paso 1: Clonar el Repositorio
Clona el repositorio de tu backend en tu máquina local usando Git.

Paso 2: Instalar Dependencias
En el directorio del proyecto, ejecuta el siguiente comando para instalar todas las dependencias necesarias:
npm install

Paso 3: Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto. Este archivo contendrá las variables de entorno necesarias, como la URL de la base de datos y otros secretos.

Ejemplo de contenido para .env:
PORT=3000
MONGO_URI=mongodb://localhost:27017/nombre-base-datos

Paso 4: Ejecutar el Servidor
Una vez configuradas las variables de entorno y la base de datos, inicia el servidor con el siguiente comando:
npm start