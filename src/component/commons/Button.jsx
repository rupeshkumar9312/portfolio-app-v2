import React from 'react'
import './button.scss'
function Button(props) {
  return (
    <div className='button'><h3>{props.children}</h3></div>
  )
}

export default Button