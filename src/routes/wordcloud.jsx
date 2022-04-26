import React from 'react'
import { useLocation } from 'react-router-dom'
import WorldCloudGenerator from '../components/WordCloudComponent'
import NavbarComponent from '../components/layout/NavbarComponent'
import FooterComponent from '../components/layout/FooterComponent'

function WordCloud() {
    const location = useLocation()
    const { textInput, fileInput, palette } = location.state

    // wordcloud options
    const setOptions = () => {
        // default options
        let options = {
            rotations: 2,
            rotationAngles: [-90, -45, 0, 45, 90],
        }

        // set the palette if it exists, otherwise return the default options
        palette.length > 0 ? options.colors = palette : options = options
        return options
    }


    return (
        <div className='hero is-fullheight is-black'>
            <NavbarComponent />
            <div className="">
                {
                    textInput.length > 0 && <WorldCloudGenerator text={textInput} options={setOptions()} />
                }
                {
                    fileInput.length > 0 && <WorldCloudGenerator text={fileInput} options={setOptions()} />
                }                
            </div>
            <FooterComponent />
        </div>
    )
}

export default WordCloud