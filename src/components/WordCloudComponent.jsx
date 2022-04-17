import ReactWordcloud from "react-wordcloud"
import { createRef } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';


function WorldCloudGenerator (props) {
    const text = props.text.split(' ')
    const wordCloudRef = createRef()
    const cloudText = () => {
        return text.map((word, index) => {
            return {text: word, value: (Math.floor(index * Math.random()))}
        })
    }
    const options = {
        rotations: 2,
        rotationAngles: [-90, -45, 0, 45, 90],
    };

    const downloadImage = () => {
        const svgElement = wordCloudRef.current.querySelector('svg')
        saveSvgAsPng(svgElement, 'wordcloud.jpg', {scale: 3, encoderType: 'image/jpeg'})
    }


  return (
      <div className='container mt-5 mb-5' ref={wordCloudRef}>
            <ReactWordcloud words={cloudText()} options={options} />
        <button onClick={downloadImage} className="button mb-5">Descargar</button>
      </div>
  )
}

export default WorldCloudGenerator