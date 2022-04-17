import { useState, createRef } from 'react'
import WorldCloudGenerator from './WordCloudComponent'

function FormFileUpload() {
  const fileInput = createRef()
  const [fileName, setFileName] = useState('(.doc, .txt)')
  const [textInput, setTextInput] = useState('')
  const [isTextReady, setTextReady] = useState(false)
  const [textProp, setTextProp] = useState({
    textFromInput: '',
    textFromFile: ''
  })

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
    if (textInput.value.length > 0) {
      setTextProp({
        textFromFile: textProp.textFromFile,
        textFromInput: textInput.value
      })
      setTextInput('')
    }

    !isTextReady ? setTextReady(true) : null

    
    setFileName('(.doc, .txt)')
    e.currentTarget.reset()
  }

  const getText = (e) => {
    setTextInput({value: e.target.value.trim().toLowerCase()})
  }

  const getFileName = () => {
    setFileName(fileInput.current.files[0].name)
  }

  return (
    <div>
    <div className="container">
      {
        isTextReady && textProp.textFromInput.length > 0 ? <WorldCloudGenerator text={textProp.textFromInput } /> : null
      }
      {
        isTextReady && textProp.textFromFile.length > 0 ? <WorldCloudGenerator text={textProp.textFromFile} /> : null
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