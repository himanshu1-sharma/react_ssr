import React, { useState, useEffect } from 'react'
import Navigation from '../Includes/Navigation/Navigation'
import TopFooter from "../Includes/Footer/TopFooter"
import { BASEURL } from '../Constant'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import './SharePage.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Scrollbar } from "swiper";
import Accordion from 'react-bootstrap/Accordion';
import DownloadBtn from '../Includes/DownloadBtn/DownloadBtn'
import like from '../../img/icons/like.png'
import comment from '../../img/icons/comment.png'
import save from '../../img/icons/save.png'
import shareIcon from '../../img/icons/shareIcon.png'
import { Link } from 'react-router-dom'

const ServiceShare = () => {

    const [cardData, setCardData] = useState()
    const params = useParams()
    const fetchCardData = () => {
        Axios.get(`${BASEURL}api/products/${params.id}`)
            .then(data => {
                setCardData(data.data.data)
                console.log("product data", data.data.data)
            })
    }

    useEffect(() => {
        fetchCardData()
    }, [])

    return (
        <>
            <div className='bmcNavigation'>
                <Navigation />
            </div>
            <section className='container-fluid p-0 bmcMargin'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6'>
                            <div className='bmcMobileHide'>
                                <div className='userCard'>
                                    <div className='userCardProfile'>
                                        <img src={cardData?.user?.profilepic} alt={cardData?.user?.name} className="img-fluid" />
                                    </div>
                                    <div className='userCardName'>
                                        <h1>{cardData?.user?.name}</h1>
                                        <p>({cardData?.user?.username})</p>
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
                            <div className='shareBoxBg'>
                                <div className='shareBox'>
                                    <div className='shareBoxProfileBox'>
                                        <div className='shareBoxProfile'>
                                            <div className='shareBoxProfileImg'>
                                                <img src={cardData?.user?.profilepic} alt={cardData?.brandName} className="img-fluid" />
                                            </div>
                                            <div className='shareBoxProfileContent'>
                                                <h4>{cardData?.user?.name}</h4>
                                                <p>{cardData?.user?.title}</p>
                                            </div>
                                        </div>
                                        <div className='shareBoxProfileFollow'>
                                            <a href="#">follow</a>
                                        </div>
                                    </div>
                                    <div className='sharePageProductSlider service'>
                                        <Swiper
                                            slidesPerView={"auto"}
                                            spaceBetween={10}
                                            className="sharePageProductImgSlider"
                                            scrollbar={true}
                                            modules={[Pagination, Scrollbar]}
                                        >
                                            {cardData?.image1 ?

                                                <SwiperSlide>
                                                    <div className="sharePageProductImgBox" style={{ backgroundImage: `url(${cardData?.image1?.location})` }}></div>
                                                </SwiperSlide>

                                                :

                                                ""

                                            }
                                            {cardData?.image2 ?

                                                <SwiperSlide>
                                                    <div className="sharePageProductImgBox" style={{ backgroundImage: `url(${cardData?.image2?.location})` }}></div>
                                                </SwiperSlide>

                                                :

                                                ""

                                            }
                                            {cardData?.image3 ?

                                                <SwiperSlide>
                                                    <div className="sharePageProductImgBox" style={{ backgroundImage: `url(${cardData?.image3?.location})` }}></div>
                                                </SwiperSlide>

                                                :

                                                ""

                                            }
                                            {cardData?.image4 ?

                                                <SwiperSlide>
                                                    <div className="sharePageProductImgBox" style={{ backgroundImage: `url(${cardData?.image4?.location})` }}></div>
                                                </SwiperSlide>

                                                :

                                                ""

                                            }
                                            {cardData?.image5 ?

                                                <SwiperSlide>
                                                    <div className="sharePageProductImgBox" style={{ backgroundImage: `url(${cardData?.image5?.location})` }}></div>
                                                </SwiperSlide>

                                                :

                                                ""

                                            }
                                        </Swiper>
                                    </div>
                                    <div className='shareBoxContent'>
                                        <div className='shareProductAction'>
                                            <ul>
                                                <Link to="#">
                                                    <li>
                                                        <img src={like} alt="like" className='img-fluid' />
                                                        Like
                                                    </li>
                                                </Link>
                                                {/* <Link to="#">
                                                    <li>
                                                        <img src={comment} alt="comment" className='img-fluid' />
                                                        comment
                                                    </li>
                                                </Link> */}
                                                <Link to="#">
                                                    <li>
                                                        <img src={shareIcon} alt="shareIcon" className='img-fluid' />
                                                        share
                                                    </li>
                                                </Link>
                                                <Link to="#">
                                                    <li>
                                                        <img src={save} alt="save" className='img-fluid' />
                                                        save
                                                    </li>
                                                </Link>
                                            </ul>
                                        </div>
                                        <div className='productImgSliderTitle'>
                                            {cardData?.title}
                                        </div>
                                        <div className='productImgSliderPrice'>
                                            <ul>
                                                <li><small>From</small> <span>₹{cardData?.price}</span></li>
                                                <li>
                                                    <a href="#">
                                                        <img src={cardData?.user?.profilepic} alt={cardData?.user?.name} className="img-fluid" />
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
                                                        {cardData?.description}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Service details</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul>
                                                            {cardData?.detail && cardData?.detail.map((curPoint) => {
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
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ServiceShare