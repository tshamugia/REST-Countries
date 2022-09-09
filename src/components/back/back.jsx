import './back.scss';
import { ImArrowLeft2 } from "react-icons/im";
import {useContext} from 'react';
import { CountryContext } from '../../context/CountryContext';

function Back({navigate}){
    const {theme} = useContext(CountryContext);
   

    return(
        
            <button type='button' onClick={()=> navigate(-1)} className={`go-back ${theme}`}>
                <span><ImArrowLeft2></ImArrowLeft2></span>
                <span>Back</span>
            </button>
       

    )
}


export default Back;