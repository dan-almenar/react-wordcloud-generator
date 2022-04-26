import { useState, createRef, forwardRef } from 'react'
import WorldCloudGenerator from './WordCloudComponent'
import NextButton from './NextButton'
import { PreviousButton } from './PreviousButton'

const TextInputComponent = (props) => {
  const { previous, next, getText, getFileText } = props
  const fileInput = createRef()
  const [fileName, setFileName] = useState('(.doc, .txt, .md)')
  // const [textInput, setTextInput] = useState('')
  const [isTextReady, setTextReady] = useState(false)
  const [textProp, setTextProp] = useState({
    textFromInput: '',
    textFromFile: ''
  })

  const setFileText = (e) => {
    if (fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0]
      const reader = new FileReader()
      
      reader.onload = (e) => {
        getFileText(e.target.result)
      }
      reader.readAsText(file)
    }
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

  // const getText = (e) => {
  //   setTextInput(e.target.value.trim().toLowerCase())
  // }

  const getFileName = () => {
    setFileName(fileInput.current.files[0].name)
  }

  const setRandomPalette = (e) => {
    if (e.target.checked) {
      setSelectedPalette([])
    }
  }

  return (
    <div className="container">
      <div className="hero-header">
        <div className="wordcloud">
          {
            isTextReady && textProp.textFromInput.length > 0 ?
            <WorldCloudGenerator /> : null
          }
          {
            isTextReady && textProp.textFromFile.length > 0 ?
            <WorldCloudGenerator /> : null
          }
        </div>
        <div className="text-input">
          <form onSubmit={handleRequest} className="form-group">
            <textarea onChange={getText} className="textarea" placeholder="Escriba un texto" rows="10" />

            <div className="is-flex mt-3 mr-5">
              <p className='mt-5 container has-text-right mr-5'>O suba un archivo...</p>
              <label className="file-label mt-5 container">
                <input onChange={setFileText} ref={fileInput} className="file-input" type="file" name="uploadedFile" accept='.doc,.txt,.md' />
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
          </form>
          <div className="buttons is-flex is-justify-content-space-around">
            <PreviousButton onClick={previous} text="Anterior" icon="navigate_before" />
            <NextButton onClick={next} text="Siguiente" icon="navigate_next" />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextInputComponent