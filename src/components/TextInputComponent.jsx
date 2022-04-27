import { useState, createRef } from 'react'
import WorldCloudGenerator from './WordCloudComponent'
import NextButton from './NextButton'
import { PreviousButton } from './PreviousButton'

const TextInputComponent = (props) => {
  const { previous, next, getText, getFileText } = props
  const fileInput = createRef()
  const [fileName, setFileName] = useState('(.doc, .txt, .md)')

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

  return (
    // form needs to be fixed
    <div className="container">
      <div className="hero-header">

        <div className="columns">
          <div className="column">
            <textarea onChange={getText} className='textarea' rows="10" placeholder='Escriba un texto' />
          </div>
        </div>
        <div className="columns container mr-5 ml-5 pr-5">
          <div className="column is-one-quarter">
            <p className="">O suba un archivo...</p>
          </div>
          <div className="column is-three-quarters">
          <label className="file-label">
                <input onChange={setFileText} ref={fileInput} className="file-input" type="file" name="uploadedFile" accept='.doc,.txt,.md' />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="material-icons-outlined has-text-dark">backup</i>
                  </span>
                </span>
                <span className="file-name italic has-text is-dark">
                  {fileName}
                </span>
              </label>            
          </div>
            
        </div>
        <div className="text-input">
          <div className="buttons is-flex is-justify-content-space-around pr-5">
            <PreviousButton onClick={previous} text="Anterior" icon="navigate_before" />
            <NextButton onClick={next} text="Siguiente" icon="navigate_next" />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextInputComponent