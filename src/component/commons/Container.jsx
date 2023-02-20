import React from 'react'
import './container.scss'
import Image from './Image'

function Container(props) {
    const classes = 'container ' + props.type;

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Container