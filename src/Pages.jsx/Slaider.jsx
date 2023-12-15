// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import { ImQuotesLeft } from "react-icons/im";
// import { ImQuotesRight } from "react-icons/im";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Title from '../Component/Title';
import '../Style/salider.css'
import img1 from '../img/testimonials-1.jpg'
import img2 from '../img/testimonials-2.jpg'
import img3 from '../img/testimonials-3.jpg'
import img4 from '../img/testimonials-4.jpg'
import img5 from '../img/testimonials-5.jpg'
import { Card, Button, Container } from 'react-bootstrap'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slaider() {
    const slaider = [
        {
            id: 1,
            img: img1,
            name: "Saul Goodman",
            company: "CEO & Founder",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat eos iusto rem minima, reprehenderit dolore officiis accusamus quia id molestias laudantium architecto consequatur a non quo ipsam facilis odio.",
        },
        {
            id: 1,
            img: img2,
            name: "sara willson",
            company: "Designer",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat eos iusto rem minima, reprehenderit dolore officiis accusamus quia id molestias laudantium architecto consequatur a non quo ipsam facilis odio.",
        },
        {
            id: 1,
            img: img3,
            name: "Jena Karlis",
            company: "Store Owner",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat eos iusto rem minima, reprehenderit dolore officiis accusamus quia id molestias laudantium architecto consequatur a non quo ipsam facilis odio.",
        },
        {
            id: 1,
            img: img4,
            name: "Matt Brandon",
            company: "Freelancer",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat eos iusto rem minima, reprehenderit dolore officiis accusamus quia id molestias laudantium architecto consequatur a non quo ipsam facilis odio.",
        },
        {
            id: 1,
            img: img5,
            name: "John Larson",
            company: "Entrepreneur",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugiat eos iusto rem minima, reprehenderit dolore officiis accusamus quia id molestias laudantium architecto consequatur a non quo ipsam facilis odio.",
        },
        
    ]
    return (
        <>
            <Container>
                <div>
                    <Title title="TESTIMONIALS" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                </div>
                <div className='slaider'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            slaider.map((a)=>{
                                return(
                                    <>
                                    <SwiperSlide><Card className="text-center">
                            <Card.Header> <div className='d-flex justify-content-center '>  <img src={a.img} style={{ height: '100px', width: '100px' }} className='card_img text-center' alt="" />   </div>  </Card.Header>
                            <Card.Body>
                                <Card.Title>{a.name}</Card.Title>
                                <p>{a.company}</p>
                                <Card.Text>
                                    {/* <ImQuotesLeft /> */}
                                    {a.text}
                                    {/* <ImQuotesRight /> */}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted"></Card.Footer>
                        </Card></SwiperSlide>
                                    </>
                                )
                            })
                        }
                       
                    </Swiper>
                </div>
            </Container>
        </>
    );
}