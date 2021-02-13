import React from 'react';
import './PostPortugueseEra.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import PostPortugueseContent from './PostPortugueseContent';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";

const PostPortugueseEra = () => {
  return ( <>
  <MDBContainer  className="">
    <MDBRow id="historybox">
    
      <MDBCol id ="Major changes"  md="8"> <MDBTypography blockquote bqColor='success'>
      <MDBBox  tag='p' mb={0} className='bq-title' id="historybox">Post "liberation" or rather annexation, what happened to Goa? The change of status of new territories </MDBBox> </MDBTypography>
     <p className="historytext" >After India gained independence from the British in 1947, the days of the Portuguese were numbered. Within India, a colony of the Portuguese named Dadra and Nagar Haveli sought to end Portuguese rule and were able to obtain the same bu 1954, however they remained separte until they were merged with the Indian union in 1961. </p>
     <p className="historytext" >
      After the Portuguese lost, Goa, Damao and Diu, along with Dadra and Nagar Haveli became union territories of the Indian union. Goa, Damao and Diu also got a military governor of Goa. Goa's first general elections were held in 1963.</p>
      <p className="historytext" >
      There were people in Goa wanted Goa to be made a separate state and some who wanted it to be merged with Maharashtra, so in 1967 a referendum was held to see what would be the public view. However no such referendum was conducted on whether they wanted to remain part of Portugal or not. It was just a fight and grab scenario for the Indians to do, which they did. However, in spite of this, Goa didn't get statehood until 30 May 1947 wherein Goa became the 25th state of India, with Dadra and Nagar Haveli and Daman and Diu all being separated and made union territories.</p>
      <p className="historytext" >
      The major changes in Portuguese India after annexation was the intruduction of democratic elections as well as the replacement of Portuguese with English as the general language of government and education.</p>
      <p className="historytext" >
      Konkani in the Devnagari script became the official language of the union territory of Goa, Daman and Diu. India allowed for certain Portuguese institutions to continue unreformed such as the land ownership system of the communidade wherein land would be held by the community and would be given on rent to the individuals.</p>
      <p className="historytext" >
      The Goans under the rule of the Indian government left the Portuguese Goa civil code unchanged, that is why Goa and Damaon today are the only territories  in India that have a common civil code no dependent on religion.</p>


 
      
      </MDBCol>
      <MDBCol  md="4" id="vl"><MDBListGroup className="contents">
      <MDBListGroupItem>Contents:</MDBListGroupItem>
      <MDBListGroupItem id="listone" color="success" href="#Forceful change of citizenship">Forceful change of citizenship</MDBListGroupItem>
      <MDBListGroupItem id="listtwo" color="success" href="#Major changes">Major changes</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Portuguese Response">Portuguese Response</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Desire of Goans post annexation">Desire of Goans post annexation</MDBListGroupItem>
     
      <MDBListGroupItem id="listfour" color="success" href="#references">References</MDBListGroupItem>
     
    </MDBListGroup></MDBCol>
    </MDBRow>
   
  </MDBContainer>
    <ParallaxProvider>
  <PostPortugueseContent /> </ParallaxProvider>
  <Footer />
  </>
  
  );
  }
  
  export default PostPortugueseEra;