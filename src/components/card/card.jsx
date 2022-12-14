import './card.scss'
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { CountryContext } from '../../context/CountryContext';


function Card({data}){

    const {theme} = useContext(CountryContext)

    return (
        
      
        <Link to={'/country'.replace('country',data.name.common)} className='card' >

            <div className='card'>
             <img src={data.flags.png} alt='pic' className='card__img'></img>
                <div className={theme === "light" ? 'card__body' : "card__body dark"}>
                    <header className='title'>{data.name.common}</header>
                    <span ><span className='strong'>Population:  </span>{data.population }</span>
                    <span ><span className='strong'>Region: </span>   {data.region}</span>
                    <span ><span className="strong">Capital:</span>  {data.capital}</span> 
                </div>
            </div>
        </Link>
       
        
    
        )
}

export default Card;