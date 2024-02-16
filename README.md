<h1>Documentación del Proyecto Angular-Spring-MySQL</h1>

Este proyecto implementa una aplicación web de gestión de productos utilizando las tecnologías Angular en el frontend, Spring en el backend, y MySQL como base de datos. A continuación, se detalla cada parte del proyecto.


<h2>Angular</h2>


<h3>CrearProductosComponent</h3>

Este componente representa la interfaz de usuario para la creación de productos. Contiene un formulario que utiliza el módulo FormsModule para el enlace bidireccional de datos. Aquí se encuentran los métodos para la inicialización del componente, la validación y guardado de productos, y la manipulación de errores a través de MatSnackBar.


<h3>Métodos y Propiedades:</h3>


<h5>ngOnInit:</h5> Inicializa el componente y obtiene datos del producto a través del servicio.

<h5>guardarProductos:</h5> Método que valida y guarda los datos del producto utilizando el servicio CrearProductosService. Muestra mensajes de éxito o error a través de MatSnackBar.

<h5>Propiedades:</h5>

productos: Almacena los datos del producto.

camposIncompletos: Indica si hay campos incompletos en el formulario.


<h5>HTML Template:</h5>

Contiene un formulario con campos para el nombre, categoría, cantidad y precio del producto.
Muestra mensajes de error si los campos son incompletos.


<h3>ListaProductosComponent:</h3>


Este componente muestra una lista de productos en una tabla. Utiliza el servicio CrearProductosService para obtener, eliminar y actualizar productos.


<h3>Métodos y Propiedades:</h3>


<h5>ngOnInit:</h5> Inicializa el componente y obtiene la lista de productos a través del servicio.

<h5>updateProductos:</h5> Navega a la página de creación/editar productos con el ID del producto seleccionado.

<h5>deleteProducto:</h5> Elimina un producto utilizando el servicio y actualiza la lista.

<h5>getEmployeeList:</h5> Obtiene la lista de productos a través del servicio.

<h3>Propiedades:</h3>

dataSource: Almacena la lista de productos a mostrar en la tabla.
displayedColumns: Define las columnas a mostrar en la tabla.


<h3>HTML Template:</h3>


Utiliza la etiqueta mat-table para mostrar la lista de productos en una tabla.
Botones de edición y eliminación para cada producto.


<h3>HeaderComponent:</h3>


Componente simple que representa la barra de navegación con enlaces a la tabla de productos y la creación de productos.



<h2>Servicios Angular</h2>


<h3>CrearProductosService:</h3>

Servicio que interactúa con el backend para realizar operaciones CRUD en productos. Utiliza el módulo HttpClient para realizar solicitudes HTTP.

<h3>ProductoResolver:</h3>

Este resolver se utiliza para cargar datos antes de que se active una ruta. Se encarga de obtener un producto específico según el ID para su edición.


<h3>Configuración y Enrutamiento Angular</h3>


AppRoutingModule: Configuración de las rutas de la aplicación.

AppModule: Configuración de módulos y componentes.


<h2>Angular Testing</h2>


Se han proporcionado pruebas unitarias para los componentes 	CrearProductosComponent, ListaProductosComponent, y 	HeaderComponent, así como para el servicio 	CrearProductosService.


<h2>Spring</h2>


<h3>ProductosController:</h3>

Controlador que maneja las solicitudes HTTP relacionadas con los productos. 

Contiene métodos para guardar, obtener, actualizar y eliminar productos.

<h3>Productos:</h3>

Clase de modelo que representa la entidad productos. Anotaciones como @Entity y @Table son utilizadas para el mapeo con la base de datos.

<h3>ProductosRepository:</h3>

Interfaz de repositorio que extiende CrudRepository para realizar operaciones básicas de CRUD en la base de datos.

<h3>ProductosService:</h3>

Servicio que proporciona métodos de negocio para manipular los productos. Se encarga de las operaciones CRUD y la lógica de negocio.

<h3>ProductosApplication:</h3>

Clase principal de la aplicación Spring Boot.



<h2>Configuración de la Base de Datos</h2>


Se utiliza una base de datos MySQL para almacenar los productos.
La configuración de la base de datos, como la URL, nombre de usuario y contraseña, puede ser ajustada en el archivo de propiedades de la aplicación Spring (application.properties).


<h2>Configuración de CORS</h2>


Se permite el acceso cruzado (CORS) desde http://localhost:4200/ para permitir la comunicación entre el frontend Angular y el backend Spring.

