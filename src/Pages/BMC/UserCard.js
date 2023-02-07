import React, { useState, useEffect } from 'react'
import './UserCard.css'
import Navigation from '../Includes/Navigation/Navigation'
import DownloadBtn from '../Includes/DownloadBtn/DownloadBtn'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import whatsapp from '../../img/BMC/whatsapp.png'
import phone from '../../img/BMC/phone.png'
import link from '../../img/BMC/link.png'
import bizsicon from '../../img/BMC/bizsicon.png'
import next from '../../img/BMC/next.png'
import back from '../../img/BMC/back.png'
import closeWhite from '../../img/BMC/closeWhite.png'
import close from '../../img/BMC/close.png'
import ReactPlayer from 'react-player'
import Facebook from '../../img/BMC/Facebook.png'
import Instagram from '../../img/BMC/Instagram.png'
import LinkedIn from '../../img/BMC/Linkedin.png'
import Twitter from '../../img/BMC/Twitter.png'
import Web from '../../img/BMC/Web.png'
import Youtube from '../../img/BMC/Youtube.png'
import share from '../../img/BMC/share.png'
import facebookShare from "../../img/BMC/shareIcon/facebook.png"
import copyShare from "../../img/BMC/shareIcon/copy.png"
import gmailShare from "../../img/BMC/shareIcon/gmail.png"
import linkedinShare from "../../img/BMC/shareIcon/linkedin.png"
import telegramShare from "../../img/BMC/shareIcon/telegram.png"
import twitterShare from "../../img/BMC/shareIcon/twitter.png"
import whatsappShare from "../../img/BMC/shareIcon/whatsapp.png"
import { Helmet } from "react-helmet";
import Accordion from 'react-bootstrap/Accordion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper";
import { BASEURL } from '../Constant'




const UserCard = () => {

    const [active, setActive] = useState(false);
    const [cardData, setCardData] = useState()
    const params = useParams()
    const [isActive, setIsActive] = useState("false")
    const pageURL = `https://www.digrowfa.com/BMC/usercard/${params.id}`
    const [productActive, setProductActive] = useState(false)
    const [selectProduct, setSelectProduct] = useState()
    const [serviceActive, setServiceActive] = useState(false)
    const [selectService, setSelectService] = useState()
    const handleModal = () => {
        setIsActive(!isActive)
    }
    const handleProduct = (e) => {
        setSelectProduct(e)
        setProductActive(true)
    }
    const closeProductSlide = () => {
        setProductActive(false)
    }

    const handleService = (e) => {
        setSelectService(e)
        setServiceActive(true)
    }
    const closeServiceSlide = () => {
        setServiceActive(false)
    }

    const [copied, setCopied] = useState(false);
    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    const fetchCardData = () => {
        Axios.get(`${BASEURL}api/business/card/${params.id}`)
            .then(data => {
                setCardData(data.data.data)
                console.log("user data", data.data.data)
            })
    }

    useState(() => {
        fetchCardData()
    }, [])

    return (
        <>

            <div className='bmcNavigation'>
                <Navigation />
            </div>
            <section className='container-fluid p-0 bmcMargin'>
                <Helmet>
                    <title>{`${cardData?.brandName} BMC | Business Management Card`}</title>
                    <meta name="description" content={cardData?.about} />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="msapplication-TileImage" content={cardData?.brandLogo} />
                    <meta property="og:site_name" content={cardData?.brandName} />
                    <meta property="og:BMC" content={cardData?.businessName} />
                    <meta property="og:title Card" content="Business Managment Card" />
                    <meta property="og:image" itemprop="image" content={cardData?.brandLogo} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="300" />
                    <meta property="og:image:height" content="300" />
                    <meta property="og:url" content="digrowfa.com" />
                </Helmet>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='bmcMobileHide'>
                                <div className='userCard'>
                                    <div className='userCardProfile'>
                                        <img src={cardData?.brandLogo} alt={cardData?.brandName} className="img-fluid" />
                                    </div>
                                    <div className='userCardName'>
                                        <h1>{cardData?.brandName}</h1>
                                        <p>({cardData?.designation})</p>
                                    </div>
                                </div>
                                <div className='bmcProfileView'>View Profile Only on BizsApp Mobile App</div>
                                <div className='bmcFooter'>
                                    <h4>Download For iOS & Android</h4>
                                    <div className='d-flex'>
                                        <DownloadBtn />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='bmc_box'>
                                <div className='flip_card'>
                                    <div className={active ? 'cardBox active' : 'cardBox'}>
                                        {/* ----front side----- */}
                                        <div className='card__face card__face_front' style={{ backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})` }}>
                                            <div className='cardFrontContent'>
                                                <div className='cardName'>
                                                    Business Management Card
                                                    <div className="cardShareBtn">
                                                        <img src={share} alt="share" className='img-fluid' data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" />
                                                    </div>
                                                </div>
                                                <div className='forntProfileBox'>
                                                    <div className='companyLogo'>
                                                        <img src={cardData?.brandLogo} alt={cardData?.brandName} className="img-fluid" />
                                                    </div>
                                                    <div className='companyName'>
                                                        <h1>{cardData?.brandName}</h1>
                                                    </div>
                                                    <div className='designationName'>
                                                        <p>({cardData?.designation})</p>
                                                    </div>
                                                </div>

                                                <div className='catalogBox'>
                                                    <Accordion defaultActiveKey="1">
                                                        {cardData?.about ?
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header>About</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className='dateTimeContent aboutUser'>
                                                                        {cardData?.about}
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            :
                                                            ""
                                                        }
                                                        {cardData?.products ?
                                                            <Accordion.Item eventKey="1">
                                                                <Accordion.Header>Our Products</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className='productSlider'>
                                                                        <Swiper
                                                                            slidesPerView={"auto"}
                                                                            // centeredSlides={true}
                                                                            spaceBetween={20}
                                                                            className="productSlider"
                                                                        >
                                                                            {cardData?.products && cardData?.products?.map((curElt) => {
                                                                                {/* console.log("products data", curElt) */ }
                                                                                return (
                                                                                    <>
                                                                                        <SwiperSlide>
                                                                                            <div className="prouctSliderBox" >
                                                                                                <div className="productImg">
                                                                                                    {curElt.image1 ?
                                                                                                        (
                                                                                                            <div className='productImgBox' style={{ backgroundImage: `url(${curElt.image1?.location})` }} onClick={() => handleProduct(curElt)}></div>
                                                                                                        )
                                                                                                        :
                                                                                                        ""

                                                                                                    }
                                                                                                </div>
                                                                                                <div className='productPrice'>
                                                                                                    <p>₹{curElt?.price}</p>
                                                                                                </div>
                                                                                                <div className="productName">
                                                                                                    <p>{curElt.title}</p>
                                                                                                </div>

                                                                                            </div>
                                                                                        </SwiperSlide>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </Swiper>
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            : ""}

                                                        {cardData?.services ?
                                                            <Accordion.Item eventKey="2">
                                                                <Accordion.Header>Our Services</Accordion.Header>
                                                                <Accordion.Body>
                                                                    <div className='productSlider'>
                                                                        <Swiper
                                                                            slidesPerView={"auto"}
                                                                            // centeredSlides={true}
                                                                            spaceBetween={20}
                                                                            className="serviceSlider"
                                                                        >
                                                                            {cardData?.services && cardData?.services?.map((curElt) => {
                                                                                return (
                                                                                    <>
                                                                                        <SwiperSlide>
                                                                                            <div className="prouctSliderBox service" >
                                                                                                <div className="productImg ">
                                                                                                    {curElt?.image1 ?

                                                                                                        <div className='productImgBox' style={{ backgroundImage: `url(${curElt?.image1.location})` }} onClick={() => handleService(curElt)}></div>

                                                                                                        :

                                                                                                        ""

                                                                                                    }
                                                                                                    {/* {curElt.images && curElt.images?.map((servicesImg, index) => {
                                                                                                        if (index <= 1) {
                                                                                                            return (
                                                                                                                <>
                                                                                                                    <div className='productImgBox' style={{ backgroundImage: `url(${servicesImg.location})` }} onClick={() => handleService(curElt)}></div>
                                                                                                                </>
                                                                                                            )
                                                                                                        }
                                                                                                    })} */}
                                                                                                </div>

                                                                                                <div className="productName">
                                                                                                    {/* <p>{curElt.title}</p> */}
                                                                                                    <p>I will design beautiful logo, blog header I will design beautiful logo, blog header</p>
                                                                                                </div>
                                                                                                <div className='productPrice'>
                                                                                                    <p><span>From</span> ₹{curElt?.price}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </SwiperSlide>
                                                                                    </>
                                                                                )
                                                                            })}
                                                                        </Swiper>
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            : ""}
                                                    </Accordion>
                                                </div>

                                                <div className='bottomButtonBox'>
                                                    <ul>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={`https://wa.me/${cardData?.contacts[1]?.contactNumber}?text=Hello ${cardData?.brandName}`}>
                                                                    <img src={whatsapp} alt="whatsapp" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={`tel:${cardData?.contacts[0]?.contactNumber}`}>
                                                                    <img src={phone} alt="phone" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <img src={link} alt="link" className='img-fluid' />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={``}>
                                                                    <img src={bizsicon} alt="bizsicon" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox' onClick={() => setActive(!active)}>
                                                                <img src={next} alt="next" className='img-fluid' />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                            {/* =======share modal====== */}
                                            <div className={!isActive ? "shareModalBoxOpen" : "null"}>
                                                <div className="iconBox openShareModal" onClick={handleModal}>
                                                    <img src={link} alt="link" className='img-fluid' />
                                                    <img src={close} alt="link" className='img-fluid' />
                                                </div>
                                                <div className="shareModalBox">
                                                    <ul>
                                                        <li>
                                                            <a href="#">

                                                                <img src={bizsicon} alt="arow" className='img-fluid' />

                                                            </a>
                                                        </li>
                                                        {cardData?.socialLinks && cardData?.socialLinks?.map((curElt) => {
                                                            return (
                                                                <>
                                                                    {curElt.socialLinkType === "Facebook" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">
                                                                                <img src={Facebook} alt="Facebook" className='img-fluid' />
                                                                                Facebook
                                                                            </a>
                                                                        </li>

                                                                    }
                                                                    {curElt.socialLinkType === "Instagram" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={Instagram} alt="Instagram" className='img-fluid' />
                                                                                Instagram

                                                                            </a>
                                                                        </li>
                                                                    }
                                                                    {curElt.socialLinkType === "Youtube" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={Youtube} alt="Youtube" className='img-fluid' />
                                                                                YouTube

                                                                            </a>
                                                                        </li>
                                                                    }
                                                                    {curElt.socialLinkType === "LinkedIn" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={LinkedIn} alt="LinkedIn" className='img-fluid' />
                                                                                Linkedin

                                                                            </a>
                                                                        </li>

                                                                    }
                                                                    {curElt.socialLinkType === "Twitter" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">
                                                                                <img src={Twitter} alt="Twitter" className='img-fluid' />
                                                                                Twitter
                                                                            </a>
                                                                        </li>
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                        {cardData?.websiteLink &&

                                                            <li>
                                                                <a href={cardData?.websiteLink} target="_blank">
                                                                    <img src={Web} alt="Web" className='img-fluid' />
                                                                    Website
                                                                </a>
                                                            </li>

                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* =======end====== */}
                                        </div>
                                        {/* -----back side------ */}
                                        <div className='card__face card__face_back' style={{ backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})` }}>
                                            <div className='cardBackContent'>
                                                <div className='cardName'>
                                                    Business Management Card
                                                </div>

                                                <div className='cardVideoBox'>
                                                    <div className="cardVideo">
                                                        <ReactPlayer
                                                            url={cardData?.brandVideo?.location ? cardData?.brandVideo?.location : cardData?.brandVideo?.link}
                                                            controls
                                                            config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                                            onContextMenu={(e) => e.preventDefault()}
                                                        />
                                                        <div className="cardVideoTitle">
                                                            {cardData?.brandVideo?.videoTitle}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='cardDateTimeBox'>
                                                    <div className="cardDataTime">
                                                        <h2>Day & Time</h2>
                                                        <div className="dateTimeContent">
                                                            <h4>{cardData?.businessTiming}</h4>
                                                            <ul>
                                                                {cardData?.businessDays.includes('monday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>MO</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>MO</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                                {cardData?.businessDays.includes('tuesday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>TU</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>TU</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                                {cardData?.businessDays.includes('wednesday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>WE</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>WE</p></li>
                                                                        </>
                                                                    )

                                                                }


                                                                {cardData?.businessDays.includes('thursday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>TH</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>TH</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                                {cardData?.businessDays.includes('friday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>FR</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>FR</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                                {cardData?.businessDays.includes('saturday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>SA</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>SA</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                                {cardData?.businessDays.includes('sunday') ?

                                                                    (
                                                                        <>
                                                                            <li><p>SU</p></li>
                                                                        </>
                                                                    )

                                                                    :

                                                                    (
                                                                        <>
                                                                            <li className="disable"><p>SU</p></li>
                                                                        </>
                                                                    )

                                                                }

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='cardAddress'>
                                                    <div className="cardDataTime">
                                                        <h2>Address</h2>
                                                        <div className="dateTimeContent">
                                                            <p>{cardData?.address}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='bottomButtonBox'>
                                                    <ul>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={`https://wa.me/${cardData?.contacts[1]?.contactNumber}?text=Hello ${cardData?.brandName}`}>
                                                                    <img src={whatsapp} alt="whatsapp" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={`tel:${cardData?.contacts[0]?.contactNumber}`}>
                                                                    <img src={phone} alt="phone" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <img src={link} alt="link" className='img-fluid' />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox'>
                                                                <a href={``}>
                                                                    <img src={bizsicon} alt="bizsicon" className='img-fluid' />
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className='iconBox' onClick={() => setActive(!active)}>
                                                                <img src={back} alt="next" className='img-fluid' />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* =======share modal====== */}
                                            <div className={!isActive ? "shareModalBoxOpen" : "null"}>
                                                <div className="iconBox openShareModal" onClick={handleModal}>
                                                    <img src={link} alt="link" className='img-fluid' />
                                                    <img src={close} alt="link" className='img-fluid' />
                                                </div>
                                                <div className="shareModalBox">
                                                    <ul>
                                                        <li>
                                                            <a href="#">

                                                                <img src={bizsicon} alt="arow" className='img-fluid' />

                                                            </a>
                                                        </li>
                                                        {cardData?.socialLinks && cardData?.socialLinks?.map((curElt) => {
                                                            return (
                                                                <>
                                                                    {curElt.socialLinkType === "Facebook" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">
                                                                                <img src={Facebook} alt="Facebook" className='img-fluid' />
                                                                                Facebook
                                                                            </a>
                                                                        </li>

                                                                    }
                                                                    {curElt.socialLinkType === "Instagram" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={Instagram} alt="Instagram" className='img-fluid' />
                                                                                Instagram

                                                                            </a>
                                                                        </li>
                                                                    }
                                                                    {curElt.socialLinkType === "Youtube" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={Youtube} alt="Youtube" className='img-fluid' />
                                                                                YouTube

                                                                            </a>
                                                                        </li>
                                                                    }
                                                                    {curElt.socialLinkType === "LinkedIn" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">

                                                                                <img src={LinkedIn} alt="LinkedIn" className='img-fluid' />
                                                                                Linkedin

                                                                            </a>
                                                                        </li>

                                                                    }
                                                                    {curElt.socialLinkType === "Twitter" &&
                                                                        <li key={curElt._id}>
                                                                            <a href={curElt.link} target="_blank">
                                                                                <img src={Twitter} alt="Twitter" className='img-fluid' />
                                                                                Twitter
                                                                            </a>
                                                                        </li>
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                        {cardData?.websiteLink &&

                                                            <li>
                                                                <a href={cardData?.websiteLink} target="_blank">
                                                                    <img src={Web} alt="Web" className='img-fluid' />
                                                                    Website
                                                                </a>
                                                            </li>

                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* =======end====== */}
                                        </div>
                                    </div>
                                    <div className='card_share_modal'>
                                        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ backgroundImage: `linear-gradient(to top, #${cardData?.theme?.dark} , #${cardData?.theme?.light})` }} >

                                            <div className="offcanvas-body small">
                                                <div className="share_card_content">
                                                    <h2>Share Via</h2>

                                                    <div className="share_media">
                                                        <ul>
                                                            <li>
                                                                <a onClick={copy}>
                                                                    <img src={copyShare} alt="copy_to_clipboard" width={35} height={35} />
                                                                    <div className="icon_name">{!copied ? "Copy to clipboard" : "Copied!"}</div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${pageURL}${cardData?.user?._id}`}>
                                                                    <img src={facebookShare} alt="facebook" width={35} height={35} />
                                                                    <div className="icon_name">
                                                                        Facebook
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={`whatsapp://send?text=${pageURL}${cardData?.user?._id}`}>
                                                                    <img src={whatsappShare} alt="whatsapp" width={35} height={35} />
                                                                    <div className="icon_name">
                                                                        Whatsapp
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={`https://twitter.com/intent/tweet?url=${pageURL}${cardData?.user?._id}`}>
                                                                    <img src={twitterShare} alt="twitter" width={35} height={35} />
                                                                    <div className="icon_name">
                                                                        Twitter
                                                                    </div>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageURL}${cardData?.user?._id}`}>
                                                                    <img src={linkedinShare} alt="linkedin" width={35} height={35} />
                                                                    <div className="icon_name">
                                                                        Linkedin
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href={`https://telegram.me/share/url?url=${pageURL}${cardData?.user?._id}`}>
                                                                    <img src={telegramShare} alt="telegram" width={35} height={35} />
                                                                    <div className="icon_name">
                                                                        Telegram
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='productDetailSlide'>
                                        <div className={productActive ? "productSlideBg active" : "productSlideBg"}>
                                            <div className='productSlideClose'>
                                                <img src={closeWhite} alt="closeIcon" className='img-fluid' onClick={closeProductSlide} />
                                            </div>
                                            <div className='productSlider productImgSlider'>

                                                <Swiper
                                                    slidesPerView={"auto"}
                                                    spaceBetween={10}
                                                    className="productImgSlider"
                                                    scrollbar={true}
                                                    modules={[Pagination, Scrollbar]}
                                                >
                                                    {selectProduct?.image1 ?

                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectProduct?.image1?.location})` }}></div>
                                                        </SwiperSlide>

                                                        :

                                                        ""
                                                    }

                                                    {selectProduct?.image2 ?

                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectProduct?.image2?.location})` }}></div>
                                                        </SwiperSlide>

                                                        :

                                                        ""
                                                    }

                                                    {selectProduct?.image3 ?

                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectProduct?.image3?.location})` }}></div>
                                                        </SwiperSlide>

                                                        :

                                                        ""
                                                    }

                                                    {selectProduct?.image4 ?

                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectProduct?.image4?.location})` }}></div>
                                                        </SwiperSlide>

                                                        :

                                                        ""
                                                    }

                                                    {selectProduct?.image5 ?

                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectProduct?.image5?.location})` }}></div>
                                                        </SwiperSlide>

                                                        :

                                                        ""
                                                    }
                                                    {/* {selectProduct?.images && selectProduct?.images?.map((curImg) => {
                                                        console.log("selectProduct", selectProduct?.title)
                                                        return (
                                                            <>
                                                                <SwiperSlide>
                                                                    <div className="productSliderBox" style={{ backgroundImage: `url(${curImg.location})` }}></div>
                                                                </SwiperSlide>
                                                            </>
                                                        )
                                                    })} */}
                                                </Swiper>
                                            </div>
                                            <div className='productImgSliderTitle'>
                                                {selectProduct?.title}
                                            </div>
                                            <div className='productImgSliderPrice'>
                                                <ul>
                                                    <li><span>₹{selectProduct?.price}</span></li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={cardData?.brandLogo} alt={cardData?.brandName} className="img-fluid" />
                                                            Chat
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='productImgSliderDetail'>
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Description</Accordion.Header>
                                                        <Accordion.Body>
                                                            {selectProduct?.description}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Product details</Accordion.Header>
                                                        <Accordion.Body>
                                                            <ul>
                                                                {selectProduct?.detail && selectProduct?.detail.map((curPoint) => {
                                                                    return (
                                                                        <>
                                                                            <li>{curPoint}</li>
                                                                        </>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='serviceDetailSlide'>
                                        <div className={serviceActive ? "serviceSlideBg active" : "serviceSlideBg"}>
                                            <div className='productSlideClose'>
                                                <img src={closeWhite} alt="closeIcon" className='img-fluid' onClick={closeServiceSlide} />
                                            </div>
                                            <div className='productSlider serviceImgSlider'>
                                                <Swiper
                                                    slidesPerView={"auto"}
                                                    spaceBetween={10}
                                                    className="productImgSlider"
                                                    scrollbar={true}
                                                    modules={[Pagination, Scrollbar]}
                                                >
                                                    {selectService?.image1 ?
                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectService?.image1?.location})` }}></div>
                                                        </SwiperSlide>
                                                        :
                                                        ""
                                                    }

                                                    {selectService?.image2 ?
                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectService?.image2?.location})` }}></div>
                                                        </SwiperSlide>
                                                        :
                                                        ""
                                                    }

                                                    {selectService?.image3 ?
                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectService?.image3?.location})` }}></div>
                                                        </SwiperSlide>
                                                        :
                                                        ""
                                                    }

                                                    {selectService?.image4 ?
                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectService?.image4?.location})` }}></div>
                                                        </SwiperSlide>
                                                        :
                                                        ""
                                                    }

                                                    {selectService?.image5 ?
                                                        <SwiperSlide>
                                                            <div className="productSliderBox" style={{ backgroundImage: `url(${selectService?.image5?.location})` }}></div>
                                                        </SwiperSlide>
                                                        :
                                                        ""
                                                    }

                                                    {/* {selectService?.images && selectService?.images?.map((curImg) => {
                                                        return (
                                                            <>
                                                                <SwiperSlide>
                                                                    <div className="productSliderBox" style={{ backgroundImage: `url(${curImg.location})` }}></div>
                                                                </SwiperSlide>
                                                            </>
                                                        )
                                                    })} */}
                                                </Swiper>
                                            </div>
                                            <div className='productImgSliderTitle'>
                                                {selectService?.title}
                                            </div>
                                            <div className='productImgSliderDetail'>
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Description</Accordion.Header>
                                                        <Accordion.Body>
                                                            {selectService?.description}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                            <div className='productImgSliderPrice mt-4'>
                                                <ul>
                                                    <li><small>From</small><span>₹{selectService?.price}</span></li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={cardData?.brandLogo} alt={cardData?.brandName} className="img-fluid" />
                                                            Chat
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default UserCard