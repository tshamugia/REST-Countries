

import Card from '../../components/card/card';
import './dashboard.scss';
import FilterLayout from '../../components/filter-components/filter.layout';
import {useContext} from 'react';
import { CountryContext } from '../../context/CountryContext';

function Dashboard(){
    
    const {country, error, loading} = useContext(CountryContext);
    console.log(country)


    return (
        <>
        
        <FilterLayout/> 
        {error && <div className='error'>{error}</div>}
        <div className='dashboard__container'>
        {loading ? <div className='loading'>Loading...</div> : (

            

            <div className='row'>
                 {country.map((data, k)=>(
                     
                     <Card key={k} data={data}/>
                     
                     ))}

                </div>

                 )}
            </div>
        
                </>
       
        
    );
    
}

export default Dashboard;