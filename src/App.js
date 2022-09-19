import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import  Blue from './blue.js';
import Siva from './siva.js';
import { League } from './league.js';
import { Technology } from './tech';
import { Count } from './count';
import { Bana } from './bana';
import { Welcome } from './welcome';
import { Feedback } from './feedback';
import { Review } from './review';



function App() {
  return (
    <div>
   
  
    
      {/* <WELCOME/>
       <Feedback/>
      <Blue/>
      <League/>
      <Technology/>
      <Count/>
      <Bana/>
      <h1>heloo</h1>
      <h1>WELCOME TO REACT JS</h1>
      <Bana/>
       */}

      
      
      {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/Blue' element={<Blue/>}/>
            <Route path='/League' element={<League/>}/>
            <Route path='/Technology' element={<Technology/>}/>
            <Route path='/Count' element={<Count/>}/>
            <Route path='/Bana' element={<Bana/>}/>
            
          </Routes>
      </BrowserRouter>
            */}

       <BrowserRouter>
            <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/Blue' element={<Blue/>}/>
            <Route path='/League' element={<League/>}/>
            <Route path='/Technology' element={<Technology/>}/>
            <Route path='/Count' element={<Count/>}/>
            <Route path='/Bana' element={<Bana/>}/>
            <Route path='/Feedback' element={<Feedback/>}/>
            <Route path='/Feedback1' element={<Review/>}/>
              

            </Routes>

       
       </BrowserRouter>
      
    
        </div> 
  );
  }

export default App;
