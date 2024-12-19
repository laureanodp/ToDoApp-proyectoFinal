README - TodoApp Proyecto Final
Este proyecto es una aplicación de gestión de tareas (To-Do List) desarrollada utilizando tecnologías modernas en el ecosistema JavaScript. A continuación se detallan las tecnologías utilizadas y la justificación de su aplicación en el proyecto.

Tecnologías Utilizadas

1. React
   Versión: ^18.3.1
   Justificación: React es una biblioteca de JavaScript para construir interfaces de usuario dinámicas y reutilizables. Se eligió debido a su popularidad, facilidad de uso, y el ecosistema de componentes que permite crear aplicaciones altamente interactivas. Además, su enfoque basado en componentes facilita el mantenimiento y la escalabilidad de la aplicación.
2. Vite
   Versión: ^6.0.1
   Justificación: Vite es un "build tool" y "dev server" extremadamente rápido que permite una experiencia de desarrollo eficiente. Se seleccionó debido a su velocidad en la construcción y la recarga en caliente (hot-reloading) de los módulos, lo que mejora significativamente la productividad durante el desarrollo.
3. Material-UI (MUI)
   Versión: ^6.2.0
   Justificación: Material-UI es una popular biblioteca de componentes React que implementa las directrices de Material Design de Google. Proporciona componentes listos para usar, accesibles y personalizables, lo que facilita la creación de interfaces de usuario visualmente atractivas y consistentes. En este proyecto, se utilizó para dar estilo y funcionalidad a los componentes de la interfaz de usuario.
4. Redux Toolkit
   Versión: ^2.5.0
   Justificación: Redux Toolkit es la librería oficial recomendada por React para la gestión de estado global. Fue utilizada para manejar el estado global de la aplicación de forma más sencilla y eficiente, aprovechando sus herramientas como createSlice y configureStore, lo que mejora la legibilidad y reduce el boilerplate en comparación con Redux tradicional.
5. React-Redux
   Versión: ^9.2.0
   Justificación: React-Redux es el enlace entre React y Redux. Permite conectar los componentes de React con el store de Redux y manejar el estado global de manera más efectiva. Es crucial para la sincronización entre la interfaz y los datos centralizados.
6. React Router DOM
   Versión: ^7.0.2
   Justificación: React Router es la librería estándar para el enrutamiento en aplicaciones React. Permite la navegación entre diferentes vistas o páginas sin recargar la página completa, mejorando la experiencia de usuario en aplicaciones de una sola página (SPA). Se utilizó para gestionar las rutas de la aplicación.
7. Axios
   Versión: ^1.7.9
   Justificación: Axios es una biblioteca popular para realizar solicitudes HTTP desde el navegador o Node.js. Se usó para interactuar con API externas y gestionar el envío y la obtención de datos en el servidor.
8. React Beautiful DnD
   Versión: ^13.1.1
   Justificación: Esta librería permite implementar una funcionalidad de "arrastrar y soltar" en la interfaz. Se eligió para permitir a los usuarios organizar sus tareas de manera visualmente atractiva y funcional.
9. UUID
   Versión: ^11.0.3
   Justificación: UUID se usa para generar identificadores únicos universales, lo que es esencial para manejar las tareas y asignarles un identificador único y persistente en el sistema, usado para mockups de datos.
10. ESLint
    Versión: ^9.15.0
    Justificación: ESLint es una herramienta para identificar y reportar patrones en el código JavaScript. Se usa para mantener el código limpio y libre de errores, mejorando la calidad del código a lo largo del desarrollo.
11. Prop-Types
    Versión: ^15.8.1
    Justificación: Prop-Types es una herramienta para validar las props pasadas a los componentes de React. Ayuda a mantener la consistencia en el uso de componentes y facilita la detección temprana de errores relacionados con el paso de datos incorrectos a los componentes.

Justificación de las Tecnologías Aplicadas
Rendimiento y Eficiencia: La elección de Vite y React asegura un tiempo de desarrollo rápido y un rendimiento óptimo, con recarga en caliente y una construcción eficiente de los módulos.

Manejo de Estado Global: Redux Toolkit fue elegido por su eficiencia en la gestión de estados complejos y la reducción del código repetitivo. React-Redux proporciona una integración eficiente con los componentes de React.

Interfaz de Usuario Atractiva: Material-UI facilita la creación de interfaces modernas y responsivas sin tener que diseñar los componentes desde cero.

Facilidad de Navegación: React Router DOM ofrece una solución sencilla para gestionar rutas dentro de una aplicación de una sola página, mejorando la experiencia del usuario.

Organización Visual: La implementación de "drag and drop" con React Beautiful DnD hace que la gestión de tareas sea más intuitiva, permitiendo a los usuarios organizar sus listas de tareas de manera eficiente.
