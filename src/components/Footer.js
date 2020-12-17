import {Link} from 'react-router-dom'
import '../css/footer.css'
const Footer = (props) => {
    return(
        <div>
            <label className="form-check-label">{props.labelName} &emsp;</label><Link className="link_route" to={props.linkTo}>{props.linkName}</Link>
            <br/>
        </div>
    )
}
export default Footer