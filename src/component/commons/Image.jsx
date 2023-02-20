import React from 'react'
import './image.scss'
function Image(props) {
    const classes = 'image circle ' + props.classes

    return (
        <div>
            <img className={classes} src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />

            {/* {props.children} */}
        </div>
    )
}

export default Image