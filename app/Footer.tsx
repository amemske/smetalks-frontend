import React from 'react';
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FooterProps {

}

function Footer(props: FooterProps) {
    return (
        <footer className="p-0 position-relative" id="footer">
            <div
                className="bg-very-light-gray border-radius-6px pt-5 pb-5 md-pt-30px md-pb-30px md-ps-15px md-pe-15px sm-pt-50px sm-pb-50px">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 last-paragraph-no-margin order-md-1 md-mb-30px">
                            <a href="demo-blogger.html" className="footer-logo d-inline-block mb-10px"><img
                                src="images/logo2.png"/></a>
                            <p className="lh-28 d-block w-80 mb-15px">Cheiko Plaza, Kikuyu Town, </p>
                            <div className="text-dark-gray fw-600"><FaPhoneAlt /> 0724321703
                            </div>
                            <div className="text-dark-gray fw-600">
                            <MdEmail />  &nbsp;
                            
                            <span>info@smetalks.co.ke</span>
                                
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 order-md-3 order-lg-2 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Category</span>

                            
                            <ul className="navbar-nav">
                                <li>
                                <Link href="/leadership" className="nav-link">Leadership</Link>                                    
                                    </li>
                                <li>
                                <Link href="/business" className="nav-link">Business</Link> 
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3 order-md-4 order-lg-3 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Information</span>
                            <ul>
                                <li><a href="demo-blogger-about.html">About us</a></li>
                                <li><a href="demo-blogger-contact.html">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 order-md-5 order-lg-4 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Follow us</span>
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row align-items-center pt-25px pb-25px">
                    <div
                        className="col-xl-6 col-lg-7 last-paragraph-no-margin md-mb-10px lg-mb-0 fs-14 text-center text-lg-start">
                        <p className="lg-w-70 md-w-100"><a href="#" className="text-decoration-line-bottom">privacy
                            policy</a> | <a href="#" className="text-decoration-line-bottom">terms of service</a></p>
                    </div>
                    <div className="col-xl-6 col-lg-5 last-paragraph-no-margin fs-14 text-center text-lg-end">
                        <p>&copy; 2024 SME Business Magazine is Proudly Powered by <a
                            href="http://www.heligonsystems.com/" target="_blank"
                            className="text-decoration-line-bottom text-dark-gray fw-600">Heligon Systems Ltd.</a></p>
                    </div>


                </div>

            </div>
        </footer>
    );
}

export default Footer;