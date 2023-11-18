### Descripción de la SPA (Single Page Application)

La SPA es una aplicación de una sola página que permite ingresar datos de personas (nombre, género y edad) a través de un formulario. Está compuesta por tres archivos principales:

- **index.html**: Define la estructura básica de la página con un contenedor principal y enlaces a archivos de estilos y scripts.
- **styles.css**: Contiene estilos para la apariencia de la página, incluyendo el diseño del formulario, la tabla de datos y estilos de botones y etiquetas.
- **script.js**: Contiene la lógica de la aplicación, creando dinámicamente el formulario para ingresar datos de personas, muestra los datos en una tabla y calcula el promedio de edades.

### Funcionamiento de la SPA

1. **Estructura HTML**: El archivo HTML define la estructura básica de la página, incluyendo un contenedor principal y enlaces a archivos CSS y JavaScript.

2. **Estilos CSS**: El archivo CSS proporciona estilos para la apariencia de la página, incluyendo el diseño del formulario, la tabla de datos y estilos de botones y etiquetas.

3. **JavaScript (script.js)**:
   - **buildPage()**: Esta función construye dinámicamente el formulario para ingresar los datos de la persona y la tabla para mostrar los datos ingresados y el promedio de edades.
   - **app(page)**: Esta función inicializa la aplicación una vez que el DOM está cargado. Maneja la lógica del formulario, la actualización de la tabla con los datos ingresados y el cálculo del promedio de edades.
4. **Funcionalidades**:

   - **Formulario**: Permite ingresar el nombre, edad y género de una persona.
   - **Tabla de datos**: Muestra los nombres, géneros y edades de las personas ingresadas.
   - **Cálculo del promedio de edades**: Calcula dinámicamente el promedio de edades de las personas ingresadas y lo muestra en la interfaz.

5. **Interactividad**:
   - El formulario permite enviar los datos, actualizando la tabla y calculando el nuevo promedio de edades.
   - El botón de envío cambia temporalmente su estilo cuando se envían los datos.

Esta SPA utiliza JavaScript para crear una experiencia interactiva de una sola página, permitiendo el ingreso de datos, su visualización en una tabla y el cálculo del promedio de edades, todo sin necesidad de recargar la página completa.

![Captura de la SPA](https://i.imgur.com/POnCN43.png)
