import React from 'react';

function Footer(props) {
    return (
        <footer className="p-0 position-relative" id="footer">
            <div
                className="bg-very-light-gray border-radius-6px pt-5 pb-5 md-pt-30px md-pb-30px md-ps-15px md-pe-15px sm-pt-50px sm-pb-50px">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 last-paragraph-no-margin order-md-1 md-mb-30px">
                            <a href="demo-blogger.html" className="footer-logo d-inline-block mb-10px"><img
                                src="images/logo2.png"/></a>
                            <p className="lh-28 d-block w-80 mb-15px">401 Broadway, 24th Floor, Orchard View, London</p>
                            <div className="text-dark-gray fw-600"><i
                                className="feather icon-feather-phone-call me-10px"></i>+1 234 567 8910
                            </div>
                            <div className="text-dark-gray fw-600"><i className="feather icon-feather-mail me-10px"></i><a
                                href="/cdn-cgi/l/email-protection#4821262e27082c2725292126662b2725"
                                className="text-dark-gray text-decoration-line-bottom"><span className="__cf_email__"
                                                                                             data-cfemail="cda4a3aba28da9a2a0aca4a3e3aea2a0">[email&#160;protected]</span></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 order-md-3 order-lg-2 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Category</span>
                            <ul>
                                <li><a href="demo-blogger-fashion.html">Fashion</a></li>
                                <li><a href="demo-blogger-lifestyle.html">Lifestyle</a></li>
                                <li><a href="demo-blogger-style.html">Style</a></li>
                                <li><a href="#">Lookbook</a></li>
                                <li><a href="#">Beauty</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 order-md-4 order-lg-3 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Information</span>
                            <ul>
                                <li><a href="demo-blogger-about.html">About us</a></li>
                                <li><a href="#">Readers guide</a></li>
                                <li><a href="demo-blogger-contact.html">Contact us</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 order-md-5 order-lg-4 sm-mb-30px">
                            <span className="fw-700 text-dark-gray d-block mb-5px fs-17">Follow us</span>
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                                <li><a href="https://pinterest.com/" target="_blank">Pinterest</a></li>
                                <li><a href="https://www.behance.net/" target="_blank">Behance</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 order-md-2 order-lg-5 md-mb-30px sm-mb-0">
                            <h5 className="alt-font fw-600 mb-20px text-dark-gray">Subscribe our newsletter.</h5>
                            <div className="d-inline-block w-100 newsletter-style-02 position-relative mb-10px">
                                <form action="email-templates/subscribe-newsletter.php" method="post"
                                      className="position-relative w-100">
                                    <input
                                        className="input-medium bg-transparent border-color-transparent-base-color w-100 form-control pe-50px ps-20px lg-ps-15px required"
                                        type="email" name="email" placeholder="Enter email address"/>
                                    <input type="hidden" name="redirect" value/>
                                        <button className="btn pe-20px submit" aria-label="submit"><i
                                            className="icon feather icon-feather-mail icon-small text-base-color"></i>
                                        </button>
                                        <div className="form-results border-radius-6px pt-5px pb-5px ps-15px pe-15px fs-14 w-100 text-center position-absolute d-none"></div>
                                </form>
                            </div>
                            <div className="d-flex align-items-center fs-14">
                                <div className="d-inline-block"><i
                                    className="line-icon-Handshake me-10px align-middle icon-very-medium"></i>Protecting
                                    your privacy
                                </div>
                            </div>
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