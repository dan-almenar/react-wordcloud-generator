import ReactWordcloud from "react-wordcloud"
import { createRef, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';
import lorca from "lorca-nlp";

function WorldCloudGenerator (props) {
    const { text, options } = props
    let [textArray, setTextArray] = useState(text.split(' '))
    const wordCloudRef = createRef()

    const cloudText = () => {
        // lorcaText is an object where the keys are the words and the values are the frequency of the word
        const lorcaText = lorca(text).words().concordance().sort().get()

        /*
        If lorcaText has more than 100 entries, the risk of getting
        too much white space is reduced, so we can return it as
        an array, setting the size value of the word displayed in the wordcloud
        as the concordance value of the word plus the length of the array.
        Wordcloud will include the first 100 entries. 
        */
       if (Object.entries(lorcaText).length >= 100){
           const mapped = Object.entries(lorcaText).map((item) => {return {text: item[0], value: ((item[1]*50)+ Object.entries(lorcaText).length)}})
           return mapped.slice(100)
       } else {
            /*
            - If lorcaText has less than or 100 entries, the word cloud will have
            too much white space. To fix this, if that is the case, we map
            each word of the text variable to its frequency.
            - If the text has less than or 100 words, we'll duplicate it recursively
            in order to get as close to 100 entries as possible.
            The wordcloud will have repeated words but lesser white space.
            */
            if (textArray.length <= 100) {
                const duplicatedArray = textArray
                setTextArray(textArray = textArray.concat(duplicatedArray))
                
                // recursive call
                cloudText()
    
            } else {
                // text length is at least 100.
                // The wordcloud will include the first up-to-100 entries with the highest value.
                const mapped = textArray.map((word) => {
                    return {text: word, value: Math.floor(Math.random() * (lorcaText[word] *100)) +80}
                })
                return mapped.sort((a, b) => b.value - a.value).slice(0, 100)
            }
       }
    }
    // wordcloud options
    const setOptions = () => {
        let options = {
            rotations: 2,
            rotationAngles: [-90, -45, 0, 45, 90],
        }
        palette.length > 0 ? options.colors = palette : options = options
        return options
    }

    const downloadImage = () => {
        const svgElement = wordCloudRef.current.querySelector('svg')
        saveSvgAsPng(svgElement, 'wordcloud.jpg', {scale: 5, encoderType: 'image/jpeg'})
    }

  return (
      <div className='container mt-5 mb-5 mr-5 ml-5' ref={wordCloudRef}>
            <ReactWordcloud words={cloudText()} options={options} />
        <div className="container column is-one-quarter is-flex is-justify-content-center">
                <button onClick={downloadImage} className="button mb-5 is-fullwidth">
                    <i className="material-icons-outlined">file_download</i>
                    Descargar
                </button>
        </div>
      </div>
  )
}

export default WorldCloudGenerator