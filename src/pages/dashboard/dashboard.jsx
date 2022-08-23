

import Card from '../../components/card/card';
import './dashboard.scss';
import {useEffect, useState} from 'react';
import { ALL_COUNTRIES } from '../../api/config';
import axios from 'axios';
import FilterLayout from '../../components/filter-components/filter.layout';

function Dashboard(){
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(countries);


    useEffect(()=>{
        setLoading(true)
        const fetchCountries = async ()=>{

            try{
                const response = await axios.get(ALL_COUNTRIES);
                setCountries(response.data);
            }catch(err){

                  setError(err.message);
            }
            finally{
                setLoading(false);
            }

        }
        fetchCountries();
    },[])



    return (
        <>
        
        <FilterLayout/> 
        {error && <div className='error'>{error}</div>}
        <div className='dashboard__container'>
        {loading ? <div className='loading'>Loading...</div> : (

            

            <div className='row'>
                 {countries.map((data, k)=>(
                     
                     <Card key={k} data={data}/>
                     
                     ))}

                </div>

                 )}
            </div>
        
                </>
       
        
    );
    
}

export default Dashboard;