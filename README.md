# GIFs App

GIFs App es una aplicación web que permite buscar y mostrar GIFs utilizando la API de Giphy. Esta aplicación está construida con React y Vite para un desarrollo rápido y eficiente.

## Características

- Búsqueda de GIFs utilizando la API de Giphy.
- Visualización de resultados en una cuadrícula.
- Añadir nuevas categorías de búsqueda.
- Animaciones para una mejor experiencia de usuario.

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de desarrollo rápida para proyectos de front-end.
- API de Giphy: Proporciona acceso a una amplia base de datos de GIFs.

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación localmente:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/gifs-app.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd gifs-app
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de Giphy:

    ```env
    VITE_GIPHY_API_KEY=tu_clave_de_api
    ```

5. Inicia la aplicación en modo desarrollo:

    ```bash
    npm run dev
    ```

6. Abre tu navegador y navega a `http://localhost:3000`.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.

## Estructura del Proyecto

```
gifs-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddCategory.jsx
│   │   ├── GifGrid.jsx
│   │   └── GifGridItem.jsx
│   ├── hooks/
│   │   └── useFetch.js
│   ├── data/
│   │   └── categories.js
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Uso

1. **Añadir Categoría**: Escribe una categoría en el campo de entrada y presiona "Enter" para añadirla a la lista de búsquedas.
2. **Ver Resultados**: Los resultados de la búsqueda de GIFs para cada categoría añadida se mostrarán en una cuadrícula debajo del campo de entrada.
3. **Animaciones**: Disfruta de las animaciones cuando se cargan los GIFs y se muestran en la cuadrícula.

## Contribuyendo

Las contribuciones son bienvenidas. Si tienes alguna idea o encuentras un problema, por favor abre un issue o un pull request en el repositorio.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## Contacto

Si tienes alguna pregunta o comentario sobre la aplicación, no dudes en contactar a través de [jesusdpeaj18102001@gmail.com](mailto:jesusdpeaj18102001@gmail.com).