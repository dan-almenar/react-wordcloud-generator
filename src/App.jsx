import 'bulma/css/bulma.min.css'

import { useState } from 'react'
import './App.css'
import FormFileUpload from './components/FormFileUpload'

function App() {

  return (
    <div className="App">
      <div className="hero is-fullheight is-info">
      <div className="hero-header">
        <h1 className="title is-size-3 mt-5 has-text-light">Generador de Nubes de Palabras</h1>
      </div>
      <div className="">
        <h2 className="subtitle is-size-4-mobile mt-5 ml-5 has-text-left">
          Instrucciones:
        </h2>
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
