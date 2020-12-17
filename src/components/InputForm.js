const InputForm = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.labelName}</label>
            <input 
                type={props.type} 
                className="form-control" 
                name={props.name} 
                placeholder={props.placeholder} 
                value={props.value}
                onChange={(e) => props.changeHandler(e.target.name, e.target.value)}
                required={props.required}
                accept={props.acceptFile}
            />
            <small style={{color: 'red'}}>{props.alertMsg}</small>
        </div>
    );
}

export default InputForm;