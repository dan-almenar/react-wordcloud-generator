const RadioButton = (props) => {
    const { name, palette, getPalette } = props
    const selectPalette = (e) => {
        console.log(e.target)
        if (e.target.checked) {
            setSelectedPalette(e.target.value)
        }
    }
    return (
    <div className='mt-5'>
        <div className=''>
            <input onChange={getPalette} className='color-btn' type="radio" name="color" value={name} id={name} />
            {
                palette.map((shade, index) => (
                    <div className="color-box" key={{index}} style={{backgroundColor:shade}}></div>
                ))
            }
        </div>
    </div>
    )
}

export { RadioButton }
