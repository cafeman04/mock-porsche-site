import React from 'react'
import { showdropdown, hidedropdown } from './clicker';

export default function Hero() {
    return (
        <div className="hero-container">
  
        <nav className="navbar">
            <h1 className="logo-text">Porsche</h1>
    
            <div className='menu-div' onClick={showdropdown}>
                <div className="menu-text">
                    <label htmlFor="menu-button">Menu</label>
                </div>
    
                <img id='menu-button' src="src/assets/images/menu-burger.png" />
            </div>
        </nav>
    
        <nav className="dropdown">
            <ul>
                <img onClick={hidedropdown} id='close-button' src="src/assets/logos/cross.svg" />
    
                <a href="/" className="dropdown-item"><li>Porsche Shop</li></a>
                <a href="/" className="dropdown-item"><li>Experience</li></a>
                <a href="/" className="dropdown-item"><li>Shopping Tools</li></a>
                <a href="/" className="dropdown-item"><li>Services</li></a>
            </ul>
        </nav>
    
        
        <div className="container">
            <p className="model-text">Porsche<br />Design</p>
            <img className="porsche-model" src="src/assets/images/porsche-model.png" />
        </div>
        
              
        </div>
    )
}