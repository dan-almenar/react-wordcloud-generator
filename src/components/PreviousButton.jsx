export const PreviousButton = (props) => {
    const text = props.text 
    const icon = props.icon
    const onClick = props.onClick
    return (
        <div className="mt-5 mb-5 is-flex is-justify-content-flex-start">
            <button onClick={onClick} className="button next-btn mt-5 mr-5">
                <i className="material-icons">{ icon }</i>
                { text }
            </button>
        </div>
    )
}
