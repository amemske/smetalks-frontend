import React from 'react';
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6"

interface HeaderProps {

}


function Header(props: HeaderProps) {
    return (
            <header className="header-with-topbar">
                <div className="header-top-bar top-bar-blue bg-dark-blue ">
                    <div className="container">
                        <div className="row g-0 h-50px align-items-center m-0">
                            <div className="col-md-7 text-center text-md-start">
                  <span className="widget fs-14 me-5px text-white d-none d-md-inline-block fw-500"></span>
                                <a href="#" className="fs-14 text-medium-gray-hover"></a>
                            </div>
                            <div className="col-5 text-end header-icon">
                               

                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg header-light bg-white " data-header-hover="dark">
                    <div className="container">
                        <div className="col-auto p-0">
                            <Link className="navbar-brand" href="/">
                                <img src="/images/logo2.png" className="default-logo" width="193" height="66" alt="Your Company Logo" />
                            </Link>
                        </div>
                        <div className="col-auto menu-order left-nav ps-40px md-ps-15px">
                            <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/expert-opinion" className="nav-link">Expert Opinion
                                        </Link></li>
                                    <li className="nav-item"><Link href="/business-news" className="nav-link">Business News</Link></li>
                                    <li className="nav-item"><a href="/magazine-editions" className="nav-link">Magazine Editions</a></li>
                                    <li className="nav-item"><a href="/sme-talks-tv" className="nav-link">SME Talks Tv</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-auto ms-auto pe-0">
                            <div className="header-icon">
                                <div className="header-button ms-20px xxl-ms-10px xs-ms-0 d-none d-md-block">

                                <Link href="/advertise-with-us" className="nav-link btn btn-small btn-base-color btn-slide-right btn-rounded left-icon section-link" > Advertise with Us</Link>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
    );
}

export default Header;