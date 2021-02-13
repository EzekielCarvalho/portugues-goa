import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Buttontwo } from './Buttontwo';
import ScrollAnimation from 'react-animate-on-scroll';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
               <ScrollAnimation delay={5000}   animateIn='tada'>
            <h1 className="headingmain">Explore a great historical adventure!</h1></ScrollAnimation>
            
       <div className="hero-btns">
           <Button className="linktwo" className="btns"
           buttonStyle="btn--outline"
           buttonSize="btn--large" 
           >
        
           GET STARTED FROM THE BEGINNING</Button>

           <Buttontwo className="link" className="btns"
           buttonStyle="btn--primary"
           buttonSize="btn--large">
           EXPLORE FROM THE PORTUGUESE RULE <i className="far fa-play-circle" /></Buttontwo>
           </div></div>
    );
}

export default HeroSection;
