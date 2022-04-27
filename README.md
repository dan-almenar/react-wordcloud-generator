# React Wordcloud Generator

Una pequeña app desarrollada en [React](https://reactjs.org/).

La app permite que el usuario ingrese un texto o suba un archivo de texto (extensiones aceptadas: .txt, .doc, .md) y genera una nube de palabras, teniendo en cuenta las siguientes reglas:
1. El algoritmo selecciona las primeras setenta palabras más repetidas del texto para generar la nube.
2. Si el texto ingresado contiene menos de setenta palabras únicas, la nube podrá incluir texto repetido, siempre respetando la primera regla.


La nube generada puede ser descargada en formato .jpg.

## Última versión pública:
[Nube de Palabras](https://get-wordcloud.netlify.app)


## Nota:
La app utiliza la librería [react-wordcloud](https://www.npmjs.com/package/react-wordcloud), que requiere la versión 16.13.0 de React.

Si clonas este repositorio deberás añadir la etiqueta --legacy-peer-deps en cada llamada de npm, por ejemplo:
```bash
npm install --legacy-peer-deps
```

## Galería de imágenes:
![Imagen con colores aleatorios](/public/wordcloud-generator.jpg)
![Con paleta de colores aplicada](/public/wordcloud_palette.jpg)


