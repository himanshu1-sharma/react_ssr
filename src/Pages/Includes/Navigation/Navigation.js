import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo/logo.webp'

const Navigation = () => {



    return (
        <>
            <nav className='navigationBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='navigationItem'>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            <img src={logo} alt="bizsapp_logo" className='img-fluid logo' />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navigation