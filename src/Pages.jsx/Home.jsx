import React from 'react'
import '../Style/Home.css'
import img1 from '../img/DSC_0483.png'
// import Navbar from '../Component/Navbar';
import About from './About';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { TypeAnimation } from 'react-type-animation';
import { Row, Col, Container } from 'react-bootstrap'
import Portfolio from './Portfolio';
import Services from './Services';
import Slaider from './Slaider';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
  const icon = [
    {
      id: 1,
      item: <FaTwitter />,
    },
    {
      id: 2,
      item: <FaFacebookF />,
    },
    {
      id: 3,
      item: <FaInstagram />
      ,
    },
    {
      id: 4,
      item: <IoLogoSkype />,
    },
    {
      id: 5,
      item: <CiLinkedin />,
    }


  ]
  return (
    <>
      <Container>
        <Row className='d-flex  align-items-center'>
          <Col className='name d-flex justify-content-center fw-bold flex-column '> <h1 style={{ fontSize: '4em', color: '#45505b' }} className='ms-4'>Mukesh Wagh</h1>
            <div className='ms-5 '>
              <TypeAnimation
                sequence={[
                  "I'm a Developer",
                  1000,
                  "I'm a Writer",
                  1000,
                  "I'm a Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '3em', color: '#6e5067' }}
              />
            </div>
            <Col className='d-flex justify-content-center'>
              {
                icon.map((a) => {
                  return (
                    <a href="#icon" className='icon'>{a.item}</a>
                  )
                })
              }


            </Col>
          </Col>

          <Col className='d.flex'>
            <img className='home_img ms-3' src={img1} alt="" />
          </Col>



        </Row>
      </Container>
      <Col xl={12} md={12}>

        <About />
        <Portfolio />
        <Services />
        <Slaider />
        <Contact />
        <Footer />
      </Col>

    </>
  )
}

export default Home
