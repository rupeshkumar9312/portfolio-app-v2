import React from 'react'
import Container from '../commons/Container'

import '../commons/image.scss'
import Wrapper from '../commons/Wrapper'
import Header from './Header'
import './about.scss'

function About() {
  return (
    <div>
      <Header></Header>
      <Wrapper>
        <Container type={'all'}>
          <h1>About</h1>
          <div className='about-description'>
            <p>A focused and goal oriented professional with zeal to make a winning career Software Development in with IT industry .</p>
            <p>Well-versed with the Software Development Lifecycle (SDLC) right from requirement analysis, documentation (functional specifications, technical design), coding and testing (preparation of test cases along with implementation) to maintenance of proposed applications.</p>
            <p>Extensive programming knowledge of Core Java, Servlets, Hibernate, Object Oriented Programming , C# </p>
            <p>Adept at maintenance of program modules including operational support, problem resolution, production support, preventative and corrective maintenance and enhancements </p>
            <p>Skills in analysing and interpreting unique problems, with a combination of workshop experience and logical & analytical thinking to find the right solutions</p>
          </div>
        </Container>
      </Wrapper>
    </div>
  )
}

export default About