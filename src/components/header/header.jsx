import {ImContrast} from "react-icons/im"
import './header.scss';


function Header(){

    return(
    
    <div className='header'>
        <div className='header_container'>
           <span className='title'>Where in the world?</span>
           
           
            <button>
                <ImContrast></ImContrast>
                Dark Mode
            </button>
            
        
        </div>
    </div>
    
    )
}

export default Header;