import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Português Goa newsletter to receive latest news and history posts
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className = "input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            {/* <Link to='/sign-up'>How it works</Link> */}
            <Link to='http://localhost:3000/about-me'>Brief Biography</Link>
            <Link to='/'>Curriculum Vitae</Link>
            {/* <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='http://localhost:3000/contact-me'>Contact</Link>
            <Link to='http://localhost:3000/contact-me'>Support</Link>
            {/* <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
       
        </div> */}
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            
            <img style={{ marginLeft: '0rem' }} src={'/images/portuguese-goa-seal.png'} height={150} />
            </Link>
          </div>
          <medium class='website-rights'>Português Goa © 2020</medium>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
              </div>
          </div>
      </section>
        </div>
    )
}

export default Footer
