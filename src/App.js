import Navbar from './Component/Navbar'
import Home from './Pages.jsx/Home';
import About from './Pages.jsx/About';
import Resume from './Pages.jsx/Resume';
import Services from './Pages.jsx/Services';
import Portfolio from './Pages.jsx/Portfolio';
import Contact from './Pages.jsx/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
// import Portfolio from './Pages.jsx/Portfolio';

function App() {
  axios.defaults.baseURL='http://localhost:5000'
  return (

    <>
    <BrowserRouter> 
   <Routes>
     <Route path='/' element={<Navbar/>}/>
     <Route path ='/home' element={<Home/>}/>
     <Route path ='/about' element={<About/>}/>
     <Route path ='/resume' element={<Resume/>}/>
     <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>



   </Routes>
  </BrowserRouter>

{/* <Navbar/>
<Home/>
<About/>
<Resume/>
<Services/>
<Portfolio/>
<Contact/> */}

</>
  
  );
}

export default App;
