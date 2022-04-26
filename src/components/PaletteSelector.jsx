import { useState } from 'react'
import { RadioButton } from './RadioButton'

const PaletteSelector = () => {
  const [selectedPalette, setSelectedPalette] = useState([])
  const colorPalettes = {
    green: ['#25FAA9', '#58DB90', '#46F06E', '#4BDB50', '#C9FFBD'],
    red: ['#F55E00', '#D65B2A', '#EB3C15', '#D62D1E', '#FA878E'],
    purple: ['#F525DF', '#C656D6', '#B543EB', '#8F49D6', '#CDB9FA'],
    blue: ['#651BFA', '#4837DB', '#5668F0', '#799ADB', '#C7E6FF'],
    yellow: ['#F6FA1B', '#DBD24F', '#F0D73B', '#DBBC42', '#FFEAB2']
  }
  return (
    <div className='container'>
      {
        Object.entries(colorPalettes).map((palette) => (
          <RadioButton key={palette[0]} name="selectedColor" palette={palette[1]} selectedPalette={selectedPalette} setSelectedPalette={setSelectedPalette} />
        ))
      }
    </div>
  )
}

export default PaletteSelector