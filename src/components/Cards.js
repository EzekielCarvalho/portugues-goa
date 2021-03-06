import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Cards() {
    return (
        
        <div className='cards'>
        <ScrollAnimation delay={1000} animateIn='bounceInRight'>
        <h2>Bem vindo ao site! (Welcome to the site!)</h2>
        </ScrollAnimation>
        <div className="cards__container">
      
      
        <MDBContainer  className="mt-5">
      
   
        <MDBRow>
        <MDBCol xl="7" className="imgsize">
    
          <MDBView   className="z-depth-5" hover>

          <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-w/1a/a7/f9/6c/figueiredo-old-heritage.jpg',
            amount: 0.5,
        },
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-w/1a/a7/f9/6c/figueiredo-old-heritage.jpg',
            amount: 0.2,
        },
    ]}
    style={{
        height: '500px',
    }}
>
      
              
              
              <MDBMask className="flex-center" overlay="green-strong">
                <p className= "text" >A stunning feature of the Portuguese rule in Goa is visible from the architecture left behind by 
                the Portuguese. Houses bearing European styles and origin, though not many in Goa due to their gradual demolition are visible as one travels 
                through Goa. Each house has distinct features of styles implemented in the house.</p>
              </MDBMask>
              </ParallaxBanner> 
            </MDBView>
           
              
          
            </MDBCol>
            
          <MDBCol xl="5">
          <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
          <p> Welcome to my website. Muito Prazer. It's a pleasure to have you visit. This website was made with the sole intention
          to make unbiased news and history related to Goa available to the general public. There has been a lot of biased information
          given concerning and justifying the forced annexation of Goa into the Indian Union without any referendum. So I felt it best
          to bring out the facts of the situation of the history of Goa. It is said that the Portuguese rule was far better (though not perfect)
          than the present Indian rule. The Portuguese ruled for more than 400 years while the Indian ruled has been less than 100 years
          and already their rule has seen protests to the present day as a result of the present Indian Government having a more undemocratic
          stance on carrying out its own agenda rather than listening to the will of the people. Visit the site in detail to learn more about the
          history of Goa unbiased as well as the latest news concerning this state.</p>
          </ScrollAnimation>
          </MDBCol>
         
          
        </MDBRow>
      
      </MDBContainer>

      <ScrollAnimation delay={1000} animateIn='bounceInRight'>
        <h2 className="news-heading">As not??cias (The News)</h2>
        </ScrollAnimation>

        <div className='cards__wrapper'>
    
          <ul className='cards__items'>
            <CardItem
              src='https://www.inditales.com/wp-content/uploads/2016/06/aldona-goa-cemetery.jpg'
              text='Explore the latest news between Goa and the world'
              label='Goa & World'
              path='/goa-world'
            />
            <CardItem
              src='http://www.bharatonline.com/goa/pics/location-of-goa.jpg'
              text='Explore the latest news between Goa and India'
              label='Goa & India'
              path='/goa-india'
            />
            <CardItem
              src='data:image/jpeg;base64,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'
              text='Selected news articles from various news sources'
              label='Articles'
              path='/news-articles'
            />
          </ul>
        </div>

        <ScrollAnimation delay={1000} animateIn='bounceInRight'>
        <h2>??ltima atualiza????o (Latest Update)</h2>
        </ScrollAnimation>
        <div className="cards__container">
      
      
        <MDBContainer  className="mt-5">
      
   
        <MDBRow>
        <MDBCol xl="7" className="imgsize">
    
          <MDBView   className="z-depth-5" hover>

          <ParallaxBanner
    className="your-class"
    layers={[
        {
            image: 'https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1647994d1497346046t-old-automotive-pictures-portuguese-india-13254428_978332208948552_8386771801062474432_n.jpg',
            amount: 0.1,
        },
        {
            image: 'https://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1647994d1497346046t-old-automotive-pictures-portuguese-india-13254428_978332208948552_8386771801062474432_n.jpg',
            amount: 0.2,
        },
    ]}
    style={{
        height: '500px',
    }}
>
      
              
              
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
              </ParallaxBanner> 
            </MDBView>
           
              
          
            </MDBCol>
            
          <MDBCol xl="5">
          <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'><p>A Letter from the webmaster</p> <p>My dear visitors,</p>
          <p> Bem vindo and Welcome everyone to my new and latest website, my first ever built with React. My latest update is the completion of this website. Not every page is ready, so if you do notice gibberish or words in certain pages which don't make sense, remember that that page is under construction. If you have any queries, don't hesitate to get in touch with me via the Contact Me page and I'll do my best to reach out to you as soon as possible. Thank you for visiting this site and enjoy. </p><p>
          Com os melhores cumprimentas, </p><p>
          Ezekiel </p>
          </ScrollAnimation>
          </MDBCol>
         
          
        </MDBRow>
      
      </MDBContainer>

      </div>
      
        </div>  
        </div>



        
    );
}

export default Cards;
