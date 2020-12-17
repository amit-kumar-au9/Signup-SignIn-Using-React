const HeaderForm = (props) =>{
    return(
        <div className="bg-dark text-white text-center header-container">
            <h1>{props.title}</h1>
            <h6><strong>{props.text}</strong></h6>
        </div>
    )
}
export default HeaderForm;