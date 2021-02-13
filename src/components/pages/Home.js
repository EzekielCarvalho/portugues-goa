import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
 

function Home () {
    return (
        <>
            <HeroSection />
            <ParallaxProvider>
            <Cards />
            </ParallaxProvider>
            <Footer />
        </>

    );
}

export default Home;