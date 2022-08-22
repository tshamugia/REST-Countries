import './card.scss'

function Card(){

    return (
            <div className='card'>
               
                    <img src='#' alt='pic' className='card__img'></img>
                
                <div className='card__body'>
                    <header className='title'></header>
                    <span className='population'>Population:</span>
                    <span className='region'>Region:</span>
                    <span className='capital'>Capital:</span>
                </div>
            </div>
    
        )
}

export default Card;