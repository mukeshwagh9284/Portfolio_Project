// import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { Link } from 'react-router-dom';

// import React from 'react'



// const Navbar = () => {
//   return (
//     <div>
//       <div class="w3-sidebar w3-bar-block w3-black w3-xxlarge" style="width:70px">
//   <a href="#" className="w3-bar-item w3-button"><i className="fa fa-home"></i></a> 
//   <a href="#" className="w3-bar-item w3-button"><i className="fa fa-search"></i></a> 
//   <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a> 
//   <a href="#" className="w3-bar-item w3-button"><i className="fa fa-globe"></i></a>
//   <a href="#" className="w3-bar-item w3-button"><i className="fa fa-trash"></i></a> 
// </div>

// <div style="margin-left:70px">

// <div class="w3-container">
// <h2>Sidebar Icons</h2>
// <p>In this example we have used icons in the sidebar.</p>
// </div>

// </div>
//     </div>
//   )
// }

// export default Navbar































import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import "../Style/navbar.css"
import Home from '../Pages.jsx/Home';
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";
import { MdOutlineSmartphone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Container fluid>
        <Row className='d-grid d-flex  align-items-center nav_body'>
          <Col>
           
            <div className='icone_round'>
              <Link to="/home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/home')}> <FaHome />   <span className='text fw-bold'>Home</span></button>
              </Link>
            </div>
            <div className='icone_round'>
              <Link to="/about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/about')}> <FaRegUser />   <span className='text fw-bold'>About</span></button>


              </Link>
            </div>
            <div className='icone_round'>
              <Link to="/resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/resume')}><FaFileAlt />  <span className='text fw-bold'>Resume</span></button>


              </Link>
            </div>
            <div className='icone_round'>
              <Link to="/portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/portfolio')}> <MdOutlineLibraryBooks />   <span className='text fw-bold'>Portfolio</span></button>


              </Link>
            </div>
            <div className='icone_round'>
              <Link to="/services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/services')}> <GrDatabase />  <span className='text fw-bold'>Servicec</span></button>


              </Link>
            </div>
            <div className='icone_round'>
              <Link to="/contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500} href="#home" className="nav-link scrollto d-flex">
                <button className='nav_btn' onClick={() => navigate('/contact')}> <MdOutlineSmartphone />  <span className='text fw-bold'>Contact</span></button>


              </Link>
            </div>







           
          </Col>
        </Row>
        <Col>
          <Home />
        </Col>
      </Container>

    </div>
  )
}

export default Navbar
