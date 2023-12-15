import React from "react"
// import '../css/foote.css'
// import img6 from '../img/website_footer_logo.png'
import '../Style/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Container } from "react-bootstrap";

const Footer = () =>
    <Container>
        <footer className="page-footer font-small blue pt-12">
            <div className="container-fluid text-center text-md-left marg mt-5">
                <div className="row">
                    <div className="col-lg-12 mt-md-0 mt-3">
                        <h1 className="text-uppercase">Mukesh Wagh</h1>
                        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                        <div className=" d-flex  justify-content-center align align-items-center px-left-4">
                           <a href="" className="footer_bt"><FaFacebookF /></a>
                           <a href="" className="footer_bt"><FaInstagram /></a>
                            <a href="" className="footer_bt"><FaYoutube /></a>
                           <a href="" className="footer_bt"><CiLinkedin /> </a>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-0" />

                        {/* <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>



        </footer>
    </Container>

export default Footer