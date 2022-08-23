import './back.scss';
import { ImArrowLeft2 } from "react-icons/im";

function Back(){
    return(
        
            <a href='/' className="go-back">
                <span><ImArrowLeft2></ImArrowLeft2></span>
                <span>Back</span>
            </a>
       

    )
}


export default Back;