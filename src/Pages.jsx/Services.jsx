import React from 'react'
import Title from '../Component/Title'
import { Container, Col, Row } from 'react-bootstrap';
import { FaBasketballBall } from "react-icons/fa";
import '../Style/services.css'

const Services = () => {

  const card = [
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      id: 1,
      icon: <FaBasketballBall />,
      tital: 'Lorem Ipsum',
      contain: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
  ]
  return (
    <>
      <Container>
        <div>
          <Title title="SERVICES" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
        </div>
        <Row>
          {
            card.map((a) => {
              return (
                <>
                  <Col lg={4} className='card_body mt-5 '>
                    <Col className='d-flex justify-content-center'>
                      <div className='shep d-flex justify-content-center align-items-center'>
                       {a.icon}
                      </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center mt-4'>
                      <h4>{a.tital}</h4>
                      <p className='text-center mt-4'>{a.contain}</p>
                    </Col>
                  </Col>

                </>

              )
            })
          }

        </Row>
      </Container>
    </>
  )
}

export default Services
