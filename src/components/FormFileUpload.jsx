import { useState, createRef } from 'react'
// import './App.css'

function FormFileUpload() {
  const fileInput = createRef()
  const [fileName, setFileName] = useState('(.pdf, .docx, .doc, .txt, .rtf, .odt)')

  const readFile = (e) => {
    const file = fileInput.current.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      console.log(e.target.result)
    }
    reader.readAsText(file)

    // clear file input
    setFileName('(.pdf, .docx, .doc, .txt, .rtf, .odt)')

    // console.log(fileInput.current.files.length > 0 ? fileInput.current.files[0].name : 'No file selected')
  }



  const getFileName = () => {
    setFileName(fileInput.current.files[0].name)
  }


  return (
    <div className="container">
      <div className="file">
        <label className="file-label">
          <input onChange={getFileName} ref={fileInput} className="file-input" type="file" name="uploadedFile" accept='.pdf,.docx,.doc,.txt,.rtf,.odt' />
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

      <div className="container">
          <button onClick={readFile} className="button is-fullwidth mt-5">Cargar</button>
        </div>      
    </div>
  )
}

export default FormFileUpload