import React from 'react'
import './DownloadBtn.css'
import apple from '../../../img/icons/apple.png'
import playStore from '../../../img/icons/playStore.png'

const DownloadBtn = () => {
    return (
        <>

            <a href="https://apps.apple.com/in/app/digrowfa/id1667079351" target="_blank">
                <div className='homeHeaderStorBtn'>
                    <div className='storeImg'>
                        <img src={apple} alt="apple" className='img-fluid' />
                    </div>
                    <div className='storeName'>
                        <span>Download on the</span>
                        <p>App Store</p>
                    </div>
                </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.digrowfa.digrowfa" target="_blank">
                <div className='homeHeaderStorBtn'>
                    <div className='storeImg'>
                        <img src={playStore} alt="playStore" className='img-fluid' />
                    </div>
                    <div className='storeName'>
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                    </div>
                </div>
            </a>

        </>
    )
}

export default DownloadBtn