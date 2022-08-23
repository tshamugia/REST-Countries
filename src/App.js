
import Dashboard from "./pages/dashboard/dashboard";
import Detail from "./pages/detail/detail";
import Header from "./components/header/header";

import {Routes, Route} from 'react-router-dom';
import NotFound from "./pages/not-found/404";

function App() {
  return (
    <>
     <Header/>
     
     <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/detail" element={<Detail/>} />
      <Route path="*" element={<NotFound />}/>
     </Routes>
     
     </>
    
  );
}

export default App;
