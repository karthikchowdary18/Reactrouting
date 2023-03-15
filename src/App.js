import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import About from './About';


const App=()=> {
  return (
    
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Books' element={<Books/>} />
     <Route path='/About' element={<About/>} />
     </Routes>
     </BrowserRouter>  
      </div>
  );
}

export default App;
