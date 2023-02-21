import React from 'react'
import Header from '../About/Header'
import Container from '../commons/Container'
import Wrapper from '../commons/Wrapper'
import ExpWrapper from './ExpWrapper'

function Experience() {
  return (
    <div>
      <Header></Header>
      <div className='margin'></div>
      <Wrapper>
        <ExpWrapper></ExpWrapper>
        <hr />
        <ExpWrapper></ExpWrapper>
        <hr />
        <ExpWrapper></ExpWrapper>
        <hr />
        <ExpWrapper></ExpWrapper>
        <hr />
      </Wrapper>
    </div>
  )
}

export default Experience