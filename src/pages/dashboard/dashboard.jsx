
import Card from '../../components/card/card';
import FilterLayout from '../../components/filter-components/filter.layout';
import Header from '../../components/header/header';
import './dashboard.scss';


function Dashboard(){
    return (
        <>
         <Header/>
         <FilterLayout/>
         <div className='dashboard__container'>

         <Card />

         </div>
        
        </>
        
    );
    
}

export default Dashboard;