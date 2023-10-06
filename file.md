1. Investigación
Crea una presentación de Bootstrap que solvente las siguientes cuestiones:

¿Qué es Bootstrap?¿Para qué sirve?
Biblioteca multiplataformas o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web de desarrollo front-end. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales. 

¿Por qué usar Bootstrap?
Bootstrap proporciona un sencillo marco de estilos listos para usar, herramientas de layout y componentes interactivos, lo que permite a los desarrolladores crear sitios web y aplicaciones que son visualmente atractivos, funcionalmente ricos y accesibles por defecto. Es compatible con la mayoría de los navegadores.

Características de Bootstrap.
open-source/ código abierto
responsive
mobile first
Usa Sass para customizar componentes
Usa CSS flexbox


Ventajas y desventajas de usar Bootstrap.
Ventajas:
responsive
permite añadir una amplia gama de estructuras de marcado que ayudan con accesibilidad.
Desventajas:
se debe trabajar con Bootstrap desde el principio para evitar conflictos con estilos
es difícil actualizar la versión una vez implementado en la aplicación
debes adaptar diseño a grid de 12 columnas

Cómo instalar o implementar Bootstrap en mi proyecto.
Se puede implementar a través de un enlace CDN utilizando la etiqueta <link> en el <head> para nuestro CSS y la etiqueta <script> para nuestro paquete JavaScript antes del </body>.
Se pueden utilizar administradores de paquetes incorporando los archivos fuente de Bootstrap a casi cualquier proyecto.  Como por ejemplo npm o yarn.
Descargar el código compilado listo para usar de CSS y JS
Descargar los archivos fuente que incluyen los prefijos y customizar con Sass


¿Se puede implementar responsive con Bootstrap? Si es así, ¿podrías explicar cómo funciona y poner un ejemplo?
Sí, se puede implementar responsive.  El diseño debe estar limitado a un máximo de 12 columnas que se pueden modificar según el dispositivo.  Trae height, width, padding y margin. EJEMPLO

¿Que es un componente de Bootstrap? Pon un ejemplo.
Bootstrap nos da la posibilidad de utilizar diferentes componentes, que no son más que pedazos de código ya programados que podemos insertar en nuestros proyectos. Por ejemplo: menús de navegación, carousels y tablas de precios, entre otros.

¿Hay muchos tipos de diseños en Bootstrap? Si los hay, explícalos.

Los contenedores son el elemento de diseño más básico en Bootstrap y se necesitan al usar el sistema de cuadrícula predeterminado. Hay dos diseños principales para Bootstrap que son Diseño fluido y Diseño fijo. 

Diseño fluido : utiliza la clase bootstrap .container-fluid para el diseño. Este diseño utiliza valores proporcionales, como unidades de medida para un bloque de contenido, imágenes o cualquier otro elemento. Se utiliza para crear un elemento que sea 100 % más ancho y cubra todos los anchos de la pantalla. El diseño fluido cambia de tamaño continuamente a medida que cambia el ancho de su navegador en cualquier cantidad, sin dejar espacio vacío adicional en los lados. Por lo tanto, se llama «diseño fluido».

Diseño fijo : utiliza la clase bootstrap .container para el diseño. El diseño fijo tiene valores de ancho de píxel específicos que cambian su valor de ancho con la ayuda de consultas de medios. Proporciona un contenedor receptivo de ancho fijo. El diseño fijo cambia de tamaño en fragmentos en varios anchos determinados a medida que se especifican los valores de píxeles.


¿Cuáles son los diferentes tipos de botones en Bootstrap? Pon ejemplos.
Bootstrap incluye varias variantes de botones, cada una con su propio propósito semántico, con algunos extras agregados para mayor control:
Primary: <button type="button" class="btn btn-primary">Primary</button>
Secondary: <button type="button" class="btn btn-secondary">Secondary</button>
Success: <button type="button" class="btn btn-success">Success</button>
Danger: <button type="button" class="btn btn-danger">Danger</button>
Warning: <button type="button" class="btn btn-warning">Warning</button>
Info: <button type="button" class="btn btn-info">Info</button>
Light: <button type="button" class="btn btn-light">Light</button>
Dark: <button type="button" class="btn btn-dark">Dark</button>
Link: <button type="button” class="btn btn-link">Link</button>
https://getbootstrap.esdocu.com/docs/5.3/components/buttons/#:~:text=%3Cbutton%20type%3D%22button%22%20class%3D%22btn%20btn,%3D%22btn%20btn%2Dlink%22%3ELink%3C/button%3E



¿Qué es un Carousel de Bootstrap? Pon un ejemplo.
El carrusel es una presentación de diapositivas para recorrer una serie de contenido, creada con transformaciones CSS 3D y un poco de JavaScript. Funciona con una serie de imágenes, texto o marcas personalizadas.

<div id="carouselExample" class="carousel slide">
<div class="carousel-inner">
<div class="carousel-item active">
<img src="..." class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
<img src="..." class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
<img src="..." class="d-block w-100" alt="...">
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>

https://getbootstrap.esdocu.com/docs/5.3/components/carousel/#:~:text=%3Cdiv%20id%3D%22carouselExample,button%3E%0A%3C/div%3E


¿Qué es un spinner de Bootstrap? Pon un ejemplo.
Los “spinners” de Bootstrap se pueden usar para mostrar el estado de carga en tus proyectos. Están creados únicamente con HTML y CSS.

<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>


https://getbootstrap.esdocu.com/docs/5.3/components/spinners/#:~:text=%3Cdiv%20class%3D%22spinner%2Dborder%22%20role%3D%22status%22%3E%0A%20%20%3Cspan%20class%3D%22visually%2Dhidden%22%3ELoading...%3C/span%3E%0A%3C/div%3E

¿Qué es un navBar de Bootstrap? Pon un ejemplo.
es un componente de Barra de navegación, incluye enlaces, soporte para marcas, busqueda y colapsables.

<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link active" aria-current="page" href="#">Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Features</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Pricing</a>
</li>
<li class="nav-item">
<a class="nav-link disabled" aria-disabled="true">Disabled</a>
</li>
</ul>
</div>
</div>
</nav>



¿Qué es un modal de Bootstrap? Pon un ejemplo.



¿Existen inputs para subir archivos en Bootstrap? Pon un ejemplo.
¿Qué es un plugin scrollspy en Bootstrap? Pon un ejemplo.

*Extra
Implementa nuevos puntos sobre Bootstrap que hayas descubierto durante tu investigación y creas que son importantes.
Bootstrap se conocía como Twitter Blueprint.


2. Práctica Bootstrap & Validaciones
Crea una página utilizando Bootstrap que cumpla los siguientes requisitos:
Implementa un NavBar con el que puedas moverte por las 2 vistas de la página.
Crea la vista Crear Usuario que contenga lo siguiente:
Formulario con los siguientes campos
Nombre
Correo
Contraseña 1
Contraseña 2
Guarda la información recogida de cada uno de los usuarios en localStorage.
Implementa validación que obligue a rellenar todos los campos.
Implementa una validación para el correo.
Implementa una validación que comprueba que la contraseña 1 es la misma que la contraseña 2.
Implementa una validación de contraseña.
Por cada validación que no se cumpla muestra un mensaje durante 3 segundos y que después desaparezca.
Al terminar de rellenar los datos del formulario correctamente muestra un mensaje durante 3 segundos que muestre “Usuario creado correctamente” y redirige a la vista Usuarios.
Muestra los mensajes utilizando los alerts de Bootstrap.
Crea la vista Usuarios la cual debe mostrar en cards de Bootstrap los usuarios guardados en localStorage con los siguientes campos:
Nombre
Correo



Entregables

Subir el ejercicio a un repositorio en GitHub e implementar un buen Readme.
El readme debe contener el enlace de la presentación de Bootstrap.
Dejar el enlace del repositorio adjuntado en Classroom.
