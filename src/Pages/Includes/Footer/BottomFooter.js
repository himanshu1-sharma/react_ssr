import React from 'react'
import youtube from '../../../img/icons/youtube.png'
import facebook from '../../../img/icons/facebook.png'
import insta from '../../../img/icons/insta.png'
import linkedin from '../../../img/icons/linkedin.png'
import twitter from '../../../img/icons/twitter.png'
import { Link } from 'react-router-dom'

const BottomFooter = () => {
    return (
        <>
            <div className='bottomFooterBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bottomFooterContent'>
                                <ul>
                                    <li className='footerLink'>© Digrowfa Pvt. Ltd. | <Link to='/terms'>Terms</Link> | <Link to='/policy'>Privacy Policy</Link> | <Link to='/contactus'>Contact</Link></li>
                                    <li>
                                        Connect with us:
                                        <a href="https://www.youtube.com/@digrowfa" target="_blank">
                                            <img src={youtube} alt="youtube" className='img-fluid' />
                                        </a>
                                        <a href="https://www.instagram.com/digrowfa/" target="_blank">
                                            <img src={insta} alt="insta" className='img-fluid' />
                                        </a>
                                        <a href="https://www.linkedin.com/company/digrowfaofficial/mycompany/verification/" target="_blank">
                                            <img src={linkedin} alt="linkedin" className='img-fluid' target="_blank" />
                                        </a>
                                        <a href="https://www.facebook.com/digrowfa.official/" target="_blank">
                                            <img src={facebook} alt="facebook" className='img-fluid' />
                                        </a>
                                        <a href="https://twitter.com/digrowfa" target="_blank">
                                            <img src={twitter} alt="twitter" className='img-fluid' target="_blank" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomFooter