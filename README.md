<div align="center">

# Plt2Img Converter

FOTO DE LA WEB

[![Astro][Astro]][Astro-url]

[Astro]: https://img.shields.io/badge/astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/

[![Python][Python]][Python-url]

[Python]: https://img.shields.io/badge/python-1E415D?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/

[![Docker][Docker]][Docker-url]

[Docker]: https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

**Plt2Img** es una herramienta web que convierte código de Matplotlib en imágenes visualmente atractivas. Ideal para desarrolladores y científicos de datos que desean generar visualizaciones a partir de código Python sin necesidad de ejecutar el código localmente. Con Plt2Img, puedes simplemente subir tu código de Matplotlib y obtener una imagen lista para usar en informes, presentaciones y más.

</div>

> Librerías soportadas
> 📊 Matplotlib
> 🔢 Numpy
> 🐼 Pandas
> 🌊 Seaborn
> 👩🏾‍🔬 Scipy
> 🐍 Sympy

## ⏲️ Ahorra tiempo

| Pasos | ☠️ No usando Plt2Img                                    | 🌟 Usando Plt2Img                           |
| :---- | :------------------------------------------------------ | :------------------------------------------ |
| 1️⃣    | Solicitar el código de Matplotlib a ChatGPT             | Solicitar el código de Matplotlib a ChatGPT |
| 2️⃣    | Ir la carpeta donde se encuentra el Venv de Pyhton      | Ir a **Plt2Img.online**                     |
| 3️⃣    | Abrir una terminal                                      | Pegar el código y obtener la imagen         |
| 4️⃣    | Activar el VENV: `source .venv/bin/activate`            | 🛌🏽😴                                        |
| 5️⃣    | Ejecutar Jupyter Notebook: `jupyter notebook`           | 🛌🏽😴                                        |
| 6️⃣    | Crear un archivo de Jupyter, pegar y obtener el gráfico | 🛌🏽😴                                        |

> Visita [Plt2Img Converter](https://tailwindcss-animations.vercel.app/) para probarlo!

## ▶️ Video Demo

## 📖 Installation

| Command                                                      | Action                                      |
| :----------------------------------------------------------- | :------------------------------------------ |
| `git clone https://github.com/AlbertLnz/plt2img`             | Clone the repository                        |
| `cd plt2img`                                                 | Enter to the project                        |
| `npm install`                                                | Install dependencies                        |
| `cd src/backend`                                             | Enter to the backend project                |
| `docker build -t plt2img .`                                  | Run the Docker image                        |
| `docker run -d -p 5000:5000 --name plt2imgContainer plt2img` | Run the Docker container with the image     |
| `npm run dev`                                                | Starts local dev server at `localhost:4321` |

| [![Frontend](https://skillicons.dev/icons?i=astro)](https://skillicons.dev) | Frontend is running at `http://localhost:4321` |
| --------------------------------------------------------------------------- | :--------------------------------------------- |

| [![Backend](https://skillicons.dev/icons?i=python)](https://skillicons.dev) | Backend is running at `http://localhost:5000` |
| --------------------------------------------------------------------------- | :-------------------------------------------- |

> [!IMPORTANT]
> Remember to configure the correct **fetch url** in the `src/components/App.astro` file.
> Remember to stop the container that is running in 2nd plane when you are done.

## ☕ Buy me a coffee

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/albertlnz)
