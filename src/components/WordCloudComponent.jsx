import ReactWordcloud from "react-wordcloud"
import { createRef, useState } from 'react';
import { saveSvgAsPng } from 'save-svg-as-png';
import lorca from "lorca-nlp";

function WorldCloudGenerator (props) {
    const inputText = props.text
    let [text, setText] = useState(props.text.split(' '))
    const wordCloudRef = createRef()
    const palette = props.palette
    
    const processText = () => {
        // process text with lorca
        return
    }

    const cloudText = () => {
        // lorcaText is an object where the keys are the words and the values are the frequency of the word
        const lorcaText = lorca(inputText).words().concordance().sort().get()

        /*
        If lorcaText has more than 70 entries, the risk of getting
        too much white space is reduced, so we can return it as
        an array, setting the size value of the word displayed in the wordcloud
        as the concordance value of the word plus the length of the array.
        Wordcloud will include the first 70 entries. 
        */
       if (Object.entries(lorcaText).length >= 70){
           const mapped = Object.entries(lorcaText).map((item) => {return {text: item[0], value: ((item[1]*50)+ Object.entries(lorcaText).length)}})
           return mapped.slice(70)
       } else {
            /*
            - If lorcaText has less than or 70 entries, the word cloud will have
            too much white space. To fix this, if that is the case, we map
            each word of the text variable to its frequency.
            - If the text has less than or 70 words, we'll duplicate it recursively
            in order to get as close to 70 entries as possible.
            The wordcloud will have repeated words but lesser white space.
            */
            if (text.length <= 70) {
                const duplicatedText = text
                setText(text = text.concat(duplicatedText))
                
                // recursive call
                cloudText()
    
            } else {
                // text length is at least 70.
                // The wordcloud will include the first up-to-70 entries with the highest value.
                const mapped = text.map((word) => {
                    return {text: word, value: Math.floor(Math.random() * (lorcaText[word] *100)) +80}
                })
                return mapped.sort((a, b) => b.value - a.value).slice(0, 70)
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
      <div className='container mt-5 mb-5' ref={wordCloudRef}>
            <ReactWordcloud words={cloudText()} options={setOptions()} />
        <button onClick={downloadImage} className="button mb-5 is-fullwidth">
            <i className="material-icons-outlined">file_download</i>
            Descargar
        </button>
      </div>
  )
}

export default WorldCloudGenerator