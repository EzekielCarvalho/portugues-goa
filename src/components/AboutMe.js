import React from 'react'



import './AboutMe.css';

import Footer from './Footer';

import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
    return ( <>
        <MDBContainer id="">
          <MDBRow>
            <MDBCol  md="8" id="title"> <MDBTypography blockquote bqColor='success'>
            <MDBBox  tag='p' mb={0} className='bq-title'>Who am I? Quem sou eu? </MDBBox> </MDBTypography>
           <p  className="historytext">Hello everyone! Thank you for visiting my website! Muito prazer! So you may wonder who am I?
           This site was developed by Ezekiel Carvalho, who currently resides in Goa, India. Shortly after completing his graduation in Arts, he embarked upon a journey to further advance his knowledge into IT and computers, but this was yet basic. After obtainining a basic computer education comprised of Microsoft office, and an Indian accounting software, he was also taught graphic designing amongst other courses. It was here, that he also obtained a taste in website designing via Adobe Dreamweaver. Thereafter, he did a three months internship at the same computer training center wherein he would teach whatever he learned, as well as further developed and enhanced his knowledge. </p>

            <p className="historytext">He worked in a hospital subsequently, assisting doctors with work, procedures, managing a department and was also the customer relationship assistant. Eventually, he was led upon to resign from his post after serving for a period of 19 months, he resigned and is further advancing his knowledge by learning computer programming and IT, via the internet. After his resignation, he has thus far learned SQL (PostgreSQL, MySQL), NoSQL (mongoDB), Tableau, QLikview, HTML5, CSS3, Javascript, Node JS, GIT, and React as well as Wordpress. He has also been able to attain some knowledge in RESTful routing as as becoming familiar with deployment sites like Heroku and Firebase.
           
            </p>

            <p className="historytext">In terms of website designing, he has studied using Adobe XD and Figma, whereas in terms of Graphic Designing, he studied using Adobe suite software like Photoshop, Pagemaker, InDesign, Illustrator and Flash as well as Corel Draw, mainly keeping his passion with designing.
            </p>
            </MDBCol>
            <MDBCol  id="avatar"  md="4">
            <img src="./images/EzekielCarvalho.jpg" className="img-fluid z-depth-1 rounded-circle" alt="" />
         </MDBCol>
          </MDBRow>
         
        </MDBContainer>
       
        <Footer />
        </>
        
        );
        }
      
      export default AboutMe;