import React from 'react'
import Title from '../Component/Title'
import img2 from '../img/DSC_0483.png'
import { Container, Row, Col } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaAward } from "react-icons/fa";
import CountUp from 'react-countup';

const About = () => {
    const mydata = [{
        id: 1,
        itam: "Birthday:",
        info: "29 Aug 2000"
    },
    {
        id: 2,
        itam: "Age",
        info: "23"
    },
    {
        id: 3,
        itam: "Website:",
        info: "www.example.com",

    },
    {
        id: 4,
        itam: "Degree:",
        info: "BCA",

    },
    {
        id: 5,
        itam: "Phone",
        info: "9158996654"
    },
    {
        id: 6,
        itam: "PhEmailone:",
        info: "mukeshwagh298@gmail.com"
    },
    {
        id: 7,
        itam: "City:",
        info: "Jalgaon,Maharashtra"
    },
    {
        id: 8,
        itam: "Freelance:",
        info: "Available"
    }
    ]

    const count = [
        {
            id: 1,
            icon: <FaRegSmile />,
            info: "Happy Clients",
            value: 400
        },
        {
            id: 2,
            icon: <MdLibraryBooks />,
            info: "Projects",
            value: 800
        },
        {
            id: 3,
            icon: <SlEarphonesAlt />,
            info: "Hours Of Support",
            value: 911
        },
        {
            id: 4,
            icon: <FaAward />,
            info: "Awards",
            value: 780
        },
    ]
    const portfolio = [
        {
            id: 1,
            sub: "HTML",
            value: 100
        },
        {
            id: 2,
            sub: "PHP",
            value: 80
        },
        {
            id: 3,
            sub: "CSS",
            value: 90
        },
        {
            id: 4,
            sub: "JAVASCRIPT",
            value: 65
        },
        {
            id: 5,
            sub: "WORDPRESS/CMS",
            value: 82
        },
        {
            id: 6,
            sub: "PHOTOSHOP",
            value: 92
        },

    ]
    return (
        <div>
            <Title title="About" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
            <Container>
                <Row>
                    <Col lg={4}>
                        <img src={img2} className="img-fluid" alt="" />
                    </Col>
                    <Col lg={8} className='d-grid'>
                        <Col className='fs-3 fw-bolder ' style={{ color: "#728394" }}>
                            UI/UX Designer & Web Developer.
                        </Col>
                        <Col className='fst-italic'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem fugit numquam inventore vitae at fuga recusandae labore aliquam dolor! Dolorum architecto, reiciendis ex porro deserunt reprehenderit tempora voluptates illo.</p>
                        </Col>
                        <Col>
                            <Row>
                                {
                                    mydata.map((a) => {
                                        return (
                                            <>
                                                <div className='d-flex col-lg-6 lh-lg'>
                                                    <MdArrowForwardIos size={17} color='blue' className='mt-1' />
                                                    <p className='fw-bold d px-2 '>{a.itam}</p><p className='px-3'>{a.info}</p>

                                                </div>
                                            </>
                                        )
                                    })

                                }
                            </Row>
                        </Col>
                        <Col className='fs-6'>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </Col>

                    </Col>
                    <div>
                        <Title title="Facts" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                        <Row>
                            {
                                count.map((a) => {
                                    return (
                                        <>
                                            <Col className='row col-lg-3 col-md-6'>

                                                <h1 className='text-center' style={{ color: "blue" }}>{a.icon}</h1>


                                                <h1 className='text-center'> <CountUp
                                                    start={0}
                                                    end={a.value}
                                                    duration={4.75}

                                                > </CountUp></h1>
                                                <p className='text-center'>{a.info}</p>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                    </div>

                    <div>
                        <Title title="SKILLS" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />

                        <Row>
                            {
                                portfolio.map((a) => {
                                    return (
                                        <>

                                            <Col lg={6} sm={12} className='p-4'>
                                                <div className='d-flex justify-content-between '>
                                                    <div className=''>{a.sub}</div> <div>{a.value}</div></div>
                                                <div> <ProgressBar now={a.value} /></div>
                                            </Col>

                                        </>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default About
