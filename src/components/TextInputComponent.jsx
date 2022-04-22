import { useState, createRef } from 'react'
import PaletteSelector from './PaletteSelector'
import WorldCloudGenerator from './WordCloudComponent'
import { RadioButton } from './RadioButton'

function FormFileUpload() {
  // const palette = createRef()
  const fileInput = createRef()
  const [fileName, setFileName] = useState('(.doc, .txt, .md)')
  const [textInput, setTextInput] = useState('')
  const [isTextReady, setTextReady] = useState(false)
  const [textProp, setTextProp] = useState({
    textFromInput: '',
    textFromFile: ''
  })

  const [selectedPalette, setSelectedPalette] = useState([])
  const colorPalettes = {
    green: ['#25FAA9', '#58DB90', '#46F06E', '#4BDB50', '#C9FFBD'],
    red: ['#F55E00', '#D65B2A', '#EB3C15', '#D62D1E', '#FA878E'],
    purple: ['#F525DF', '#C656D6', '#B543EB', '#8F49D6', '#CDB9FA'],
    blue: ['#651BFA', '#4837DB', '#5668F0', '#799ADB', '#C7E6FF'],
    yellow: ['#F6FA1B', '#DBD24F', '#F0D73B', '#DBBC42', '#FFEAB2']
  }

  const handleRequest = (e) => {
    e.preventDefault()
    if (fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0]
      const reader = new FileReader()
      
      reader.onload = (e) => {
        setTextProp({
        textFromFile: e.target.result.trim().toLowerCase(),
        textFromInput: textProp.textFromInput
        })
      }
      reader.readAsText(file)
    }
    if (textInput.length > 0) {
      setTextProp({
        textFromFile: textProp.textFromFile,
        textFromInput: textInput
      })
      setTextInput('')
    }

    !isTextReady ? setTextReady(true) : null

    
    setFileName('(.doc, .txt, .md)')
    e.currentTarget.reset()
  }

  const getText = (e) => {
    setTextInput(e.target.value.trim().toLowerCase())
  }

  const getFileName = () => {
    setFileName(fileInput.current.files[0].name)
  }

  const setRandomPalette = (e) => {
    if (e.target.checked) {
      setSelectedPalette([])
    }
  }

  return (
    <div>
    <div className="container">
      {
        isTextReady && textProp.textFromInput.length > 0 ? <WorldCloudGenerator text={textProp.textFromInput } palette={selectedPalette} /> : null
      }
      {
        isTextReady && textProp.textFromFile.length > 0 ? <WorldCloudGenerator text={textProp.textFromFile} palette={selectedPalette} /> : null
      }    
      </div>      
    <div className="columns">
      <form onSubmit={handleRequest}>
      <div className="column">
        <textarea onChange={getText} className="textarea" placeholder="Escriba un texto" rows="10"></textarea>
      </div>

      <div className="column">
      <div className="mt-5 mb-5">
        <p className="">O suba un archivo...</p>
      </div>
        <div className="file">
          <label className="file-label">
            <input onChange={getFileName} ref={fileInput} className="file-input" type="file" name="uploadedFile" accept='.doc,.txt,.md' />
            <span className="file-cta">
              <span className="file-icon">
                <i className="material-icons-outlined has-text-dark">backup</i>
              </span>
              <span className="file-label has-text is-dark">
                Elija un archivo…
              </span>
            </span>
            <span className="file-name italic has-text is-dark">
              {fileName}
            </span>
          </label>
        </div>

        <div className="column">
          <p className='mt-5'>Seleccione una paleta de colores:</p>
          <div className="column mt-5">
            {/* <PaletteSelector /> */}
            {
              Object.keys(colorPalettes).map((colorName) => (
                <RadioButton key={colorName} name={colorName} palette={colorPalettes[colorName]} setSelectedPalette={setSelectedPalette} />
              ))
            }
            <div className="column is-pulled-left">
              <input onChange={setRandomPalette} className='mr-3 mb-5' type="radio" name="color" id="random" value={'random'} checked />
              <label htmlFor="random">Aleatorio</label>
            </div>
          </div>
        </div>

        <div className="">
            <button type='submit' className="button is-fullwidth mt-5">Procesar</button>
          </div>      
      </div>
      </form>
    </div>

    </div>
  )
}

export default FormFileUpload