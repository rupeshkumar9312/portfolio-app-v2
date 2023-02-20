import React from 'react'
import Image from '../commons/Image'
import './header.scss'
import '../commons/image.scss'
function Header(props) {
  return (
    <div className='header'>
        <div className='img'>
        <img className='image circle' src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />

        </div>
    </div>
  )
}

export default Header