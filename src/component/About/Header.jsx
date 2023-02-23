import React from 'react'
import './header.scss'
import HeaderDetails from './HeaderDetails'
function Header() {
    return (
        <div className='header'>
            <div className='img'>
                {/* <img className='img-logo' src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" /> */}
                <img className='img-logo' src="https://scontent.fdel41-1.fna.fbcdn.net/v/t39.30808-6/327902588_912725643099182_4298464580837752171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ac1kdvDwD4sAX96ELuV&_nc_ht=scontent.fdel41-1.fna&oh=00_AfCESE5Wb0g5FVI9ghiB_wv425EN9nbivCv3PJaA4wEcLA&oe=63FBB76B" alt="" srcset="" />
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