const NextButton = (props) => {
    const text = props.text 
    const icon = props.icon
    const onClick = props.onClick
    return (
        <div className="mt-5 mb-5 is-flex is-justify-content-flex-end">
            <button onClick={onClick} className="button next-btn mt-5 mr-5">
                { text }
                <i className="material-icons">{ icon }</i>
            </button>
        </div>
    )
}

export default NextButton