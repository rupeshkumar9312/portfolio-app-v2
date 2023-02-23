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
        {/* <img className='image circle' src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" /> */}
        <img className='image circle' src="https://scontent.fdel41-1.fna.fbcdn.net/v/t39.30808-6/327902588_912725643099182_4298464580837752171_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ac1kdvDwD4sAX96ELuV&_nc_ht=scontent.fdel41-1.fna&oh=00_AfCESE5Wb0g5FVI9ghiB_wv425EN9nbivCv3PJaA4wEcLA&oe=63FBB76B" alt="" srcset="" />

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