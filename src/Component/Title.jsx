import React from 'react'
import '../Style/components.css'
import { Row, Col, Container } from 'react-bootstrap'


const Title = (props) => {
  return (
    <Container>
    <div className='col-12'>
      <h2 className='title fw-bolder ' > {props.title}</h2>
      <hr style={{border:"2px solid blue",width:"60px",marginLeft:"48%" }}/>
      <p className='dec text-center'>{props.desc}</p>
    </div>
    </Container>
  )
}

export default Title
