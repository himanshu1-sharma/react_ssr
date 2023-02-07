import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='footerBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                            <div className='footerList'>
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/leadership">Leadership</Link>
                                    </li>
                                    <li>
                                        <Link to="/branding">Branding</Link>
                                    </li>
                                    <li>
                                        <a href="https://digrowfa.com/" target="_blank">Digrowfa</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                            <div className='footerList'>
                                <h4>Features</h4>
                                <ul>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/create-bmc">BMC</Link>
                                    </li>
                                    <li>
                                        <Link to="/updates">Updates</Link>
                                    </li>
                                    <li>
                                        <Link to="/conversation">Chat</Link>
                                    </li>
                                    <li>
                                        <Link to="/search-and-explore">Search & Explore</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                            <div className='footerList'>
                                <h4>Community</h4>
                                <ul>
                                    <li>
                                        <Link to="/community">Guidlines</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
                            <div className='footerList'>
                                <h4>Help Center</h4>
                                <ul>
                                    <li>
                                        <Link to="/terms">Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer