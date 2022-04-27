import 'bulma/css/bulma.min.css'
import './App.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import TextInputComponent from './components/TextInputComponent'
import { RadioButton } from './components/RadioButton'
import NextButton from './components/NextButton'
import NavbarComponent from './components/layout/NavbarComponent'
import FooterComponent from './components/layout/FooterComponent'
import { PreviousButton } from './components/PreviousButton'

function App() {
  const navigate = useNavigate()

  const [showInstructions, setShowInstructions] = useState(true)
  const [showTextInput, setShowTextInput] = useState(false)
  const [showPalette, setShowPalette] = useState(false)

  // text input handler
  const [textInput, setTextInput] = useState('')
  const getText = (e) => {
    setTextInput(e.target.value.trim().toLowerCase())
  }

  // file input handler
  const [fileInput, setFileInput] = useState('')
  const getFileText = (str) => {
    setFileInput(str)
  }

  // radio button handler
  const [selectedPalette, setSelectedPalette] = useState([])
  const getPalette = (e) => {
    if (e.target.checked) {
      e.target.value === 'random' ? setSelectedPalette([]) : setSelectedPalette(colorPalettes[e.target.value])
    }
  }
  const showValues = () => {
    navigate('/wordcloud', {state: {textInput: textInput, fileInput: fileInput, palette: selectedPalette}})
  }


  // section display handlers
  const resetHome = () => {
    setShowInstructions(true)
    setShowTextInput(false)
    setShowPalette(false)
  }
  const toTextInput = () => {
    setShowInstructions(false)
    setShowPalette(false)
    setShowTextInput(true)

  }
  const toPalette = () => {
    setShowInstructions(false)
    setShowTextInput(false)
    setShowPalette(true)
  }

  // palettes definition
  const colorPalettes = {
    green: ['#25FAA9', '#58DB90', '#46F06E', '#4BDB50', '#C9FFBD'],
    red: ['#F55E00', '#D65B2A', '#EB3C15', '#D62D1E', '#FA878E'],
    purple: ['#F525DF', '#C656D6', '#B543EB', '#8F49D6', '#CDB9FA'],
    blue: ['#651BFA', '#4837DB', '#5668F0', '#799ADB', '#C7E6FF'],
    yellow: ['#F6FA1B', '#DBD24F', '#F0D73B', '#DBBC42', '#FFEAB2'],
    // random: []
  }  


  return (
    <div className="App">
      <NavbarComponent resetHome={resetHome} />
      {/* content */}
      <div className="hero is-fullheight is-dark">
      <div className="home-page">
        {/* display instructions (welcome page) */}
        { showInstructions &&
          (<div className=''>
          <div className="hero-body">
            <h1 className="container title is-size-3 mt-5 ml-5 mr-5">Generador de Nubes de Palabras</h1>
          </div>
          <div className="">
            <h2 className="subtitle is-size-4-mobile mt-5 ml-5">
              Instrucciones:
            </h2>
            <div className="">
              <p className="is-size-6 ml-5 mr-5 mb-3">
                Escriba un texto o suba un archivo de texto (.doc, .txt) para generar una nube de palabras y haga click en el botón "Procesar".
              </p>
              <p className="is-size-6 ml-5 mr-5 mb-3">
                Una vez generada su nube de palabras, podrá descargarla como .jpeg haciendo click en el botón "Descargar".
              </p>        
            </div>
          </div>

          <div className="hero-header column is-three-quarters mr-5">
            <NextButton onClick={toTextInput} text="Siguiente" icon="navigate_next" />
          </div>  
        </div>)
        }
        {/* display form */}
        { showTextInput &&
          (<div>
            <div className="hero-body">
              <div className="container">
                <TextInputComponent next={toPalette} previous={resetHome} getText={getText} getFileText={getFileText} />
              </div>
            </div>
          </div>)
        }
        {/* display palette */}
        { showPalette && (
          <div className="container">
            <p className="subtitle has-text-weight-bold mt-5 pb-3 pt-5">
              Seleccione una paleta de colores:
            </p>
            {
              Object.entries(colorPalettes).map(([name, palette]) => (
                <RadioButton key={name} name={name} palette={palette} getPalette={getPalette} />
              ))
            }
            <input onChange={getPalette} className='mt-5' type="radio" name="color" id="random" value={'random'} checked />
            <label htmlFor="random" className='subtitle ml-3'>Aleatorio</label>
            <div className="buttons is-flex is-justify-content-space-evenly ml-5 mr-5">
              <PreviousButton onClick={toTextInput} text="Anterior" icon="navigate_before" />
              <NextButton onClick={showValues} text="Generar nube" icon="navigate_next" />            
            </div>              
          </div>
        )}
      </div>
        {/* footer */}
        <FooterComponent />      
      </div>
    </div>
  )
}

export default App
