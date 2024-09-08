import React from 'react'

export default function CarBox(props) {
    return (
        <a href= {`https://www.porsche.com/usa/models/${props.spec}/`} className="car-links" target="_blank">
        <div className="image-wrapper">
            <img className='car-boxes' src={`src/assets/images/${props.image}`} />
        </div>

        <div className="car-menu">
            <div id={`${props.size}`} className="logo">
                <img src={`src/assets/logos/${props.logo}`} />
            </div>

            <div className="car-button">
                See all {props.name} Models
            </div>
        </div>
        </a>
    )
}