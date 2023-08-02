import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Rockets from './Pages/Rockets';
import Home from './Pages/Home'; 
import Capsules from './Pages/Capsules'
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/Rockets' element={<Rockets/>}></Route>
      
      <Route path='/Capsules' element={<Capsules/>}></Route>
      
    </Routes>

    <Footer/>
    
    </BrowserRouter>

    
  );
}

export default App;
