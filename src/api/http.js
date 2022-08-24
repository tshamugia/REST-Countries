import axios from 'axios';
import { ALL_COUNTRIES } from "../api/config";


export const fetchCountries = async ()=>{
 
        const response = await axios.get(ALL_COUNTRIES);
        
        return response.data;
   

}