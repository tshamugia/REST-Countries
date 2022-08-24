import { useState, useEffect, createContext } from "react";

import { fetchCountries } from "../api/http";


const CountryContext = createContext();

function CountryContextProvider({children}){
    const [country, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true)
        fetchCountries()
        .then(data => setCountries(data))
        .catch(err=> setError(err.message))
        .finally(()=>setLoading(false));
            
    },[])

    return(
        <CountryContext.Provider value={{country, error, loading}}>{children}</CountryContext.Provider>
    )
}



export {CountryContext, CountryContextProvider};