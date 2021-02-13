import React, { useState, useEffect } from 'react'; 
import { debounce } from './Helpers';  
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Button } from './Button';
import Dropdown from './Dropdown';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect (() => {
//         showButton()
//     }, []);

//     window.addEventListener('resize', showButton);

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar-container">
//                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Goa PT <i className='fab fa-typo3' /></Link>
//                    <div className='menu-icon' onClick={handleClick}>
//                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//                    </div>
//     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//         <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//             </Link>
            
//         </li>
//         <li className='nav-item'>
//             <Link to='/history' className='nav-links' onClick={closeMobileMenu}>
//                 History
//             </Link>
            
//         </li>
      
//         <li className='nav-item'>
//             <Link to='/legacy' className='nav-links' onClick={closeMobileMenu}>
//                 Legacy
//             </Link>
            
//         </li>
       
//         <li className='nav-item'>
//             <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
//                 Sign Up
//             </Link> 
//         </li>
//     </ul>
//     {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//                 </div>
//             </nav>
//  </>
//     );
// }

// export default Navbar;



const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true); 
  
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth <960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth <960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const showButton = () => {
                if (window.innerWidth <= 960) {
                    setButton(false);
                } else {
                    setButton(true);
                }
            };
        
            useEffect (() => {
                showButton()
            }, []);
        
            window.addEventListener('resize', showButton);


  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    height: '80px',
    fontSize: '1.2rem',
    top: 0,
    zindex: 999,
    position: 'fixed',
    width: '100%',
    backgroundColor: 'black',
    textAlign: 'center',
    transition: 'top 0.6s' 
  }
  
      return (
        <>
            <nav className="navbar" style={{ ...navbarStyles, top: visible ? '0' : '-80px' }}>
                <div className="navbar-container" >
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>Português Goa    <img style={{ marginLeft: '2rem' }} src={'/images/portuguese-goa-seal.png'} height={60} />
</Link>
                   <div className='menu-icon' onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            
        </li>
      
        <li 
        className='nav-item'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
    
            <MDBDropdown className='nav-links'>
                <MDBDropdownToggle nav caret >
                <Link to='/history' onClick={closeMobileMenu}>
                History </Link>
                </MDBDropdownToggle>
                <MDBDropdownMenu id= "dropdown-menu">
                  <li><MDBDropdownItem href="/pre-portuguese-era">Pre Portuguese Era</MDBDropdownItem></li>
                  <li> <MDBDropdownItem href="/portuguese-era">Portuguese Era</MDBDropdownItem></li>
                  <li><MDBDropdownItem href="/post-portuguese-era">Post Portuguese Era</MDBDropdownItem></li>
                </MDBDropdownMenu>
              </MDBDropdown>
    
        </li>

        <li className='nav-item'>
            <Link to='/image-gallery' className='nav-links' onClick={closeMobileMenu}>
                Photo Gallery
            </Link>
            
        </li>
      
        <li className='nav-item'>
            <Link to='/legacy' className='nav-links' onClick={closeMobileMenu}>
                Legacy
            </Link>
            
        </li>

        <li className='nav-item'>
            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                About Me
            </Link>
            
        </li>

        <li className='nav-item'>
            <Link to='/contact-me' className='nav-links' onClick={closeMobileMenu}>
                Contact Me
            </Link>
            
        </li>
       
        {/* <li className='nav-item'>
            <Link to='/contact-me' className='nav-links-mobile' onClick={closeMobileMenu}>
               Contact Me
            </Link> 
        </li> */}
    </ul>
    {/* {button && <Button buttonStyle='btn--outline'>Contact Me</Button>} */}
              
                </div>
            </nav>
 </>
    );
}

 

export default Navbar;


