import Back from '../../components/back/back';
import './detail.scss'
import { useNavigate} from 'react-router-dom';



function Detail(){
    const navigate = useNavigate();
    
    


    return <div className='detail__container'>
        <Back navigate={navigate}/>
        <div className='country__info'>
            
        </div>
    </div>
}


export default Detail;