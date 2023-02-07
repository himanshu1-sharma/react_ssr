import React from 'react'
import DownloadBtn from '../Includes/DownloadBtn/DownloadBtn'
import adsHero from "../../img/home/adsHero.png"
import indianImg from '../../img/home/indianImg.png'
import TopFooter from '../Includes/Footer/TopFooter'
import mission from '../../img/home/mission.png'
import vision from '../../img/home/vision.png'
import Accordion from 'react-bootstrap/Accordion';
import Contact from './Contact'

const HomeBody = () => {
    return (
        <>
            <div className='visionMissionBg'>
                <div className='container'>
                    <div className='row visionMissionBox'>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                            <div className='visionMission'>
                                <h6>Our Mission</h6>
                                <p>“The mission of DIGROWFA is to provide a complete digital growth platform for each & everyone who wants to grow online..."</p>
                            </div>
                        </div>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className='visionMissionImg one'>
                                <img src={mission} alt="mission" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12' id="order2">
                            <div className='visionMissionImg'>
                                <img src={vision} alt="vision" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12' id="order1">
                            <div className='visionMission one'>
                                <h6>Our Vision</h6>
                                <p>"Digrowfa's vision is to make it easy for everyone to grow online in this digital era...”</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeBodyBg'>
                    <div className='container'>
                        <div className='homeAdsBg'>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='order2'>
                                    <div className='homeAdsImg'>
                                        <img src={adsHero} alt="adsHero" className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='order1'>
                                    <div className='homeAdsContent'>
                                        <h4>It's easy to grow online with Digrowfa</h4>
                                        <p>we have made it so simple & easy to use. so that, everyone
                                            can use it easily & can grow  online with the
                                            help of its powerful tools and features. </p>
                                        {/* <div className='homeAdsBtn'>
                                        <DownloadBtn />
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='title'>
                                    <h2>Let's Have a look at your quries</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className='faqBox'>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                Who is This App for?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                For Everyone, who wants to grow online (Products Sellers/Services Providers/Individuals/Self Employed/Freelancers/Business Owners/Working Professionals/Startups/Digital Creators...etc.)
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                Is this App Free Or Paid?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Digrowfa App is Completely free, you don't have to pay a penny...
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                What are the benefits of using the app?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                You can create your online growth platform in seconds, & can build a powerfull online community for your online growth.
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>
                                                Is it a social media App?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                Digrowfa App is an online growth platform,you can use the power of Internet & can accelarate you online growth.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>
                                                How long will it take to create online platform?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                You can create your online growth platform within seconds on Digrowfa App...
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>
                                                Is there any support system for users?
                                                <div className="plus">
                                                    <div className="top"></div>
                                                    <div className="bottom"></div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                If you face any problem in using the App, Our team is available 24x7 for your help, You can request for support in the App.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Contact /> */}

                <TopFooter />
                <div className='indianBg'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='indianText'>
                                    <h3>Proudly Created by </h3>
                                    <h2>indians</h2>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
                                <div className='indianImg'>
                                    <img src={indianImg} alt="indianImg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBody