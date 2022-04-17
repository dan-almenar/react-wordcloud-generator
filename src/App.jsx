import 'bulma/css/bulma.min.css'

import { useState } from 'react'
import './App.css'
import FormFileUpload from './components/TextInputComponent'

function App() {

  return (
    <div className="App">
      <div className="hero is-fullheight is-dark">
      <div className="hero-header container">
        <h1 className="title is-size-3 mt-5 ml-5 mr-5">Generador de Nubes de Palabras</h1>
      </div>
      <div className="">
        <h2 className="subtitle is-size-4-mobile mt-5 ml-5">
          Instrucciones:
        </h2>
        <div className="container">
        <p className="is-size-6 ml-5 mr-5 mb-3">
          Escriba un texto o suba un archivo de texto (.doc, .txt) para generar una nube de palabras y haga click en el botón "Procesar".
        </p>
        <p className="is-size-6 ml-5 mr-5 mb-3">
          Una vez generada su nube de palabras, podrá descargarla como .jpeg haciendo click en el botón "Descargar".
        </p>        
        </div>

      </div>
      <div className="hero-body container">
        <FormFileUpload />
      </div>
        <div className="hero-footer mb-5">
          <p className='has-text-light'>&copy; {new Date().getFullYear()} | <a href="https://danielalmenar.com" target={"_blank"}>Dan Almenar Williams</a></p>
        </div>
        </div>
    </div>
  )
}

export default App
