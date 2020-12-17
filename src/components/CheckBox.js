const CheckBox = (props) =>{
    return(
        <div className="form-check">
            <input type="checkbox" checked={props.check} className="form-check-input" name={props.name} onChange={(e) => props.changeHandler(e.target.name, e.target.checked)}/>
            <label className="form-check-label" htmlFor={props.name}>{props.text}</label>
            <small style={{color: 'red'}}>{props.alertMsg}</small>
        </div>
    );
}

export default CheckBox