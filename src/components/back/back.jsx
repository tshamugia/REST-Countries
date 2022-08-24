import './back.scss';
import { ImArrowLeft2 } from "react-icons/im";

function Back({navigate}){
   

    return(
        
            <button type='button' onClick={()=> navigate(-1)} className="go-back">
                <span><ImArrowLeft2></ImArrowLeft2></span>
                <span>Back</span>
            </button>
       

    )
}


export default Back;