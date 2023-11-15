import React from 'react'
import "./styles.css";
const Footer = () => {
    return (
        <div className="footer border-top">
            <div className="container mt-1">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5> About Us </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Home </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> About Us </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> AI Match Service </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Contact Us </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> All Jobs </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> FAQ </a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5> Campain </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> IT Story </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Writting Contest </a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5> Terms & Conditions </h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Privacy Policy </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Operating Regulation </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Complaint Handling </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Terms & Conditions </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Press </a></li>
                            </ul>
                        </div>
    
                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p className="copyright"> © 2023 Company, Inc. All rights reserved. </p>
                        <ul className="list-unstyled d-flex">
                            {/* <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */
                            }
                        </ul>
                        <div className="contact col-6 col-md-3 mb-3">
                            <p> Want to post a job? Contact us at </p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Ho Chi Minh: (+84) 977 460 519 </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Ha Noi: (+84) 983 131 351 </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Email: love@getjob.com </a></li>
                                <li className="nav-item mb-2"><a href="?" className="nav-link p-0 text-muted"> Submit contact information </a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer