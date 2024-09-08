import React from 'react'
import CarBox from './CarBox.jsx'

export default function CarSelection() { 
    return (
        <div className='cars-container'>
            <CarBox spec='911' image='911car.webp' logo='911logo.svg' name='911'/>
            <CarBox spec='taycan' image='taycancar.webp' logo='taycanlogo.svg' name='Taycan' size='smaller-logo'/>
            <CarBox spec="macan" image="macan.webp" logo="macanlogo.svg" name="Macan" size='smaller-logo'/>
            <CarBox spec="718" image="718car.jpg" logo="/718logo.svg" name="718" />
            <CarBox spec="cayenne" image="cayennecar.webp" logo="cayennelogo.svg" name="Cayenne" size='smaller-logo'/>
            <CarBox spec="panamera" image="panameracar.webp" logo="panameralogo.svg" name="Panamera" size='smaller-logo' />
        </div>
    )
}