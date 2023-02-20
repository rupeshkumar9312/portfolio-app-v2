import React from 'react'
import './header.scss'
import HeaderDetails from './HeaderDetails'
function Header() {
    return (
        <div className='header'>
            <div className='img'>
                <img className='img-logo' src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />
            </div>
            <div className='container-description'>
                <div className='col'>
                    <h3>Rupesh Kumar</h3>
                </div>
                <div className='col'>
                <p>Senior Software Engineer at Mindtree | Java | Spring Boot | Microservices | Docker | React JS</p>

                </div>

            </div>

            {/* <HeaderDetails></HeaderDetails> */}
        </div>
    )
}

export default Header