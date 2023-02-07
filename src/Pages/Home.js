import React from 'react'
import Header from './HomeContent/Header'
import HomeBody from './HomeContent/HomeBody'
import BottomFooter from './Includes/Footer/BottomFooter'
import Navigation from './Includes/Navigation/Navigation'

const Home = () => {
    return (
        <>
            {/* <div className='destopHideNavigation'>
                <Navigation />
            </div> */}
            <Header />
            <HomeBody />
            {/* <Footer /> */}
            <BottomFooter />
        </>
    )
}

export default Home