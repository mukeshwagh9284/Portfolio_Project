import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import Title from '../Component/Title'
import { Row, Col, Container } from 'react-bootstrap'
import '../Style/contact.css'
import axios from "axios"
const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [massage, setMassage] = useState("")
    function handleFormSubmit(e) {
        e.preventDefault()
        let abc = {
            fname: firstName,
            email: email,
            subject: subject,
            massage: massage,

        }
      axios.post(`/student/add`, abc)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        setFirstName("")
        setMassage("")
        setSubject("")
        setEmail("")
    }
    return (
        <>
            <Container>


                <Title title="Contact" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />


                <>

                    <Row>
                        <Col sm={4}>


                            <span>
                                <div className=' d-flex'>
                                    <div className='icons col-2'>
                                        <div id='icons' className='icon d-flex align-items-center justify-content-center mt-2'>
                                            <IoLocationOutline />
                                        </div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Location</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </span>
                            <span>
                                <div className=' d-flex'>
                                    <div className='icons col-2'>
                                        <div id='icons' className='icon d-flex align-items-center justify-content-center mt-2'>
                                            <IoLocationOutline />
                                        </div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Location</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </span> <span>
                                <div className=' d-flex'>
                                    <div className='icons col-2'>
                                        <div id='icons' className='icon d-flex align-items-center justify-content-center mt-2'>
                                            <IoLocationOutline />
                                        </div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Location</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                            </span>
                        </Col>
                        <Col sm={8}>
                            <form onSubmit={handleFormSubmit}>
                                <div class="row">
                                    <div class="col">
                                        <input type="text" className="form-control" placeholder="Your Name" onChange={(e) => setFirstName(e.target.value)}
                                            value={firstName}></input>
                                    </div>
                                    <div class="col">
                                        <input type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email} className="form-control" placeholder="Your Email"></input>
                                    </div>
                                    <div>
                                        <input type="text" onChange={(e)=>setSubject(e.target.value)}  value={subject} className="form-control mt-4" placeholder="Subject"></input>
                                    </div>
                                    <textarea onChange={(e)=>setMassage(e.target.value)} value={massage} type="Maasage" placeholder='Massage' id="" cols="15" rows="5" className='mt-4'></textarea>

                                </div>
                                <div className='d-flex justify-content-center mt-3 '><button className='send_msg' type="submit">send massage</button></div>
                            </form>
                        </Col>
                    </Row>
                </>
            </Container>




        </>
    )
}

export default Contact
