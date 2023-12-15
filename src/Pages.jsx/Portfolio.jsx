import React, { useState } from 'react'
import Title from '../Component/Title'
import { Row, Container, Col, Button } from 'react-bootstrap'
// import img7 from '../img/m-pic.png'
// import img8 from '../img/portfolio-3.jpg'
import '../Style/portfolio.css'
import Menu from './Menu'

const Portfolio = () => {
    const [items, setitems] = useState(Menu);
    const filterIteam = (catItam) => {
        const updateItems = Menu.filter((curanElement) => {
            return curanElement.category === catItam;
        });
        setitems(updateItems);
    }
    return (
        <div>
            <>

                <Container>
                    <Title title="Portfolio" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                    <Row>
                        <Col lg={12}  className='d-flex justify-content-center '>
                            <Button className='P-button' onClick={() => setitems(Menu)}>All</Button>
                            <Button className='P-button' onClick={() => filterIteam('App')}>App</Button>
                            <Button className='P-button' onClick={() => filterIteam('Card')}>Card</Button>
                            <Button className='P-button' onClick={() => filterIteam('Web')}>Web</Button>
                        </Col>

                        {
                            items.map((elem) => {
                                const { image } = elem;
                                return (
                                    <>

                                        <Col lg={4} className='my-3 d-flex justify-content-center'>
                                            <img src={image} alt="" />

                                        </Col>
                                    </>
                                )
                            })
                        }

                    </Row>
                </Container>
            </>
        </div>
    )
}

export default Portfolio
