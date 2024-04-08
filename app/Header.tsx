import React from 'react';
import Link from "next/link";

interface HeaderProps {

}


function Header(props: HeaderProps) {
    return (
            <header className="header-with-topbar">
                <div className="header-top-bar top-bar-blue bg-dark-blue ">
                    <div className="container">
                        <div className="row g-0 h-50px align-items-center m-0">
                            <div className="col-md-7 text-center text-md-start">
                  <span className="widget fs-14 me-5px text-white d-none d-md-inline-block fw-500"><i
                      className="fa-sharp fa-solid fa-heart text-base-color"></i>Trending:</span>
                                <a href="#" className="fs-14 text-medium-gray-hover">Top 10 night creams will help your skin to
                                    relax.</a>
                            </div>
                            <div className="col-5 text-end header-icon">
                                <div className="header-search-icon icon d-none d-md-flex">
                                    <a href="#" className="search-form-icon header-search-form fw-600"><i
                                        className="feather icon-feather-search text-base-color align-middle me-5px xl-me-0"></i><span
                                        className="align-middle d-none d-xxl-inline-block">Search</span></a>
                                    <div className="search-form-wrapper">
                                        <button title="Close" type="button" className="search-close">×</button>
                                        <form id="search-form" role="search" method="get" className="search-form text-left"
                                              action="search-result.html">
                                            <div className="search-form-box">
                                                <h2 className="alt-font text-dark-gray text-center mb-4 fw-600 ls-minus-1px">What are you
                                                    looking for?</h2>
                                                <input className="search-input" id="search-form-input5e219ef164995"
                                                       placeholder="Enter your keywords..." name="s" value="" type="text" autoComplete="off"/>
                                                <button type="submit" className="search-button">
                                                    <i className="feather icon-feather-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

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
                                    <li className="nav-item"><Link href="/leadership" className="nav-link">Leadership 101
                                        </Link></li>
                                    <li className="nav-item"><Link href="/business" className="nav-link">Business</Link></li>
                                    <li className="nav-item"><a href="/magazine-editions" className="nav-link">Magazine Editions</a></li>
                                    <li className="nav-item"><a href="/sme-talks-tv" className="nav-link">SME Talks Tv</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-auto ms-auto pe-0">
                            <div className="header-icon">
                                <div className="header-button ms-20px xxl-ms-10px xs-ms-0 d-none d-md-block">
                                    <a href="#footer"
                                       className="btn btn-small btn-base-color btn-slide-right btn-rounded left-icon section-link"><i
                                        className="feather icon-feather-mail"></i>Advertise with Us<span className="bg-white"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
    );
}

export default Header;