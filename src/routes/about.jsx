import React from 'react'
import NavbarComponent from '../components/layout/NavbarComponent'
import FooterComponent from '../components/layout/FooterComponent'

function About
() {
  return (
    <div>
        <NavbarComponent />
        <div className='hero is-fullheight is-info'>
            <div className="container mt-5 ml-5 mr-5">
                <div className="hero-header">
                    <div className="">
                        <h1 className="title has-text-centered">Generador de nubes de palabras</h1>
                        <h2 className="subtitle has-text-centered mt-3 mb-5">
                            Desarrollado por <a href="https://danielalmenar.com">Dan Almenar Williams</a>.
                        </h2>
                    </div>
                    <div className="columns mt-5 ml-5 mr-5">
                    <div className="column">
                            <p className='subtitle has-text-right'>
                                Esta app le permitirá crear nubes de palabras a partir de un texto ingresado o 
                                de un archivo de texto (.txt, .doc, .md) subido por el usuario.
                            </p>
                            <p className="subtitle has-text-right">
                                El usuario podrá elegir una paleta de colores específica o 
                                dejar que el algoritmo aplique colores aleatorios a cada palabra.
                            </p>
                            <p className="subtitle has-text-right">
                                El resultado final puede ser descargado como una imagen de tipo .jpg.
                            </p>
                        </div>
                        <div className="column">
                            <img className='image is-120x120' src="src/assets/wordcloud-generator.jpg" alt="example image" />
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default About
