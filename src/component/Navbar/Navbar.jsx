import React from 'react'
import Item from './Item'
import './navbar.scss'
import {FaHome,FaUser,FaGraduationCap,FaBookOpen,FaPhone,FaDownload} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import Button from '../commons/Button'
import {Link} from 'react-router-dom'
import './item.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <Link className='item' to={'/home'}><Item><FaHome></FaHome></Item></Link>
        <Link className='item' to={'/about'}><Item><FaUser></FaUser></Item></Link>
        <Link className='item' to={'/skills'}><Item><GiSkills></GiSkills></Item></Link>
        <Link className='item' to={'/education'}><Item><FaGraduationCap></FaGraduationCap></Item></Link>
        <Link className='item' to={'/experience'}><Item><FaBookOpen></FaBookOpen></Item></Link>
        <Link className='item' to={'/contact'}><Item><FaPhone></FaPhone></Item></Link>
        <div className='btn-hire-me'><Button>Hire Me <FaDownload></FaDownload></Button></div>
    </div>
  )
}

export default Navbar