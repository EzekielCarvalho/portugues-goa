import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import History from './components/History';
import PhotoGallery from './components/PhotoGallery';
import Legacy from './components/Legacy';

import AboutMe from './components/AboutMe';
// import ContactMe from './components/pages/ContactMe(standby)';
import PrePortugueseEra from './components/PrePortugueseEra';
import PostPortugueseEra from './components/PostPortugueseEra';
import PortugueseEra from './components/PortugueseEra';
import GoaWorld from './components/GoaWorld';
import GoaIndia from './components/GoaIndia';
import NewsArticles from './components/NewsArticles';
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>


    <Router>
      
      <Navbar />

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/history' exact component={History} />
        <Route path='/image-gallery' exact component={PhotoGallery} />
        <Route path='/legacy' exact component={Legacy} />
        {/* <Route path='/contact-me' exact component={ContactMe} /> */}
        <Route path='/pre-portuguese-era' exact component={PrePortugueseEra} />
        <Route path='/portuguese-era' exact component={PortugueseEra} />
        <Route path='/post-portuguese-era' exact component={PostPortugueseEra} />
        <Route path='/about-me' exact component={AboutMe} />
        <Route path='/goa-world' exact component={GoaWorld} />
        <Route path='/goa-india' exact component={GoaIndia} />
        <Route path='/news-articles' exact component={NewsArticles} />
        <div className="App">
      <ContactMe />
    </div>
        {/* <Route path='/contact-me' exact component={ContactMe} /> */}
      </Switch>
    
    </Router>
    
  
    </>
  );
}




export default App;
