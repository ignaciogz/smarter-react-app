<h1 align="center">Hola 👋, Soy Ignacio</h1>

<h2 align="left">Índice</h2>

1. Descripción del proyecto
2. Credenciales de Firebase
3. Setup inicial


<h2 align="left">1. Descripción del proyecto</h2>
<p align="left">SMARTER es una tienda Tienda de relojes inteligentes, auriculares y accesorios.</p>
<p align="left">Su frontend se encuentra desarrollado con React.js</p>

<h3 align="left">Lenguajes y herramientas:</h3>
<p align="left"> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://mariadb.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg" alt="mariadb" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>

<h3 align="left">Características:</h3>

- context Cart con implementación custom provider.
- component ItemDetail con lógica de estado inicial. Se encarga de verificar si hay unidades agregadas del producto en el carrito para limitar la cantidad máxima de ItemCount. Si todo el stock ya se encuentra agregado, se procederá a mostrar el botón de finalizar compra, ocultando el ItemCount y el botón de añadir al carro.
- component Checkout con lógica de verificación de stock en servidor. Luego de completar los datos del buyer, se verifica la existencia de stock. Si no hay stock suficiente para cubrir algún producto, se procederá a abortar la creación de la orden, a informar en el detalle del carrito cuál/es productos no poseen stock suficiente y a ocultar el botón de comprar ya.
- hook useForm() su funcionalidad es obtener datos de cualquier formulario haciendo uso de la API FormData.
- hook useModal() su funcionalidad es controlar la visibilidad del modal.
- Lazy loader, su funcionalidad es realizar carga bajo demanda de las cards. En el momento que se encuentre visible o próximo a ser visible en el viewport, se hará render haciendo uso de la API de intersection observer.
- util formatter. Se ha incluido una utilidad de formateo de moneda haciendo uso de la API de INTL.
- services getDoc(), getDocs(), setDoc() y updateStock(). Cuatro funcionalidades genéricas para firestore: obtener de un doc específico o un set de docs, insertar un doc, actualizar stocks de un set de docs.
- component ItemCount implementado con input. Se puede modificar su valor directamente o con los botones de incrementar o decrementar.
- component AppButton, su función es centralizar los dos tipos de botones: Los que usan Link de React router y los genéricos de html.

<h2 align="left">2. Credenciales de Firebase</h2>

<p align="left">Esta información se encuentra en una carpeta compartida de google drive.</p>
<p align="left">El link a dicha carpeta ha sido enviado en la descripción de la entrega, dentro de la plataforma de CoderHouse.</p>


<h2 align="left">3. Setup inicial</h2>

<p align="left">Colocar el archivo de credencial de firebase en la siguiente ruta:</p>

```bash
    ./src/services/keys
```

<h3 align="left">Instalación:</h3>

```bash
    npm install
```

<h3 align="left">Ejecución:</h3>

```bash
    npm run start
```