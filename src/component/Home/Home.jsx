import React from 'react'
import Container from '../commons/Container'
import Image from '../commons/Image'
import Wrapper from '../commons/Wrapper'
import './home.scss'
import '../commons/image.scss'

function Home() {
  return (
    <div>
        <Wrapper>
        <Container></Container>
        <img className='image circle' src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />

        <Container type = {'down'}>
            <h2 className='name'>Rupesh Kumar</h2>
            <p className='designation'>Senior Software Engineer at Mindtree | Java | Spring Boot | Microservices | Docker | React JS</p>
            <p className='location'>Noida, Uttar Pradesh, India</p>
        </Container>
        </Wrapper>
    </div>
  )
}

export default Home