import React from 'react'
import Container from '../commons/Container'

import '../commons/image.scss'
import Wrapper from '../commons/Wrapper'
import Header from './Header'

function About() {
  return (
    <div>
       <Header></Header>
       <Wrapper>
        <Container type={'all'}>
          <h3>About</h3>
          <p>
            
          </p>
        </Container>
       </Wrapper>
    </div>
  )
}

export default About