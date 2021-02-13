import React from 'react';
import './Legacy.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import LegacyContent from './LegacyContent';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";


const Legacy = () => {
return ( <>
<MDBContainer className="">
  <MDBRow id="historybox">
    <MDBCol md="8"> <MDBTypography blockquote bqColor='success'>
    <MDBBox tag='p' mb={0} className='bq-title'>O legado do domínio português em Goa, Índia e Ásia (The legacy of Portuguese rule in Goa, India and Asia) </MDBBox> </MDBTypography>
   <p className="historytext">No doubt there was a significant print left in India and more so in Goa, the remnants of which still remain to this day. Unfortunately, as time goes on, the existence of some of these prints is at stake. In this page, we try to examine the legacy of the Portuguese in India and in Goa. This legacy is present even in Asia, hence we'll try to examine the same.</p>

   <p className="historytext">We've seen from examining the history of Goa that the state went through various transformations as a result of a number of dynasties passing through the region. There were the Indo-Parthians, Bhojas, Chalukyas, Kadambas, Yadavas, and Bahamanis, which ruled Goa from the 1st century BC to 1500 AD. This time also included the Muslims who ruled and destroyed the temples built by the erstwhile Hindu Rulers. The Vijayanagar Empire interrupted their rule in the 14-15th century A.D. However the Muslims returned with an even great amount of power with the coming of the Muslim Bahamani Sultanate by the 1470s.</p>

   <p className="historytext">By 1510,Vasco da Gama had already come to Goa and other great men later on as well. Eventually the arrival of the Portuguese signalled the end of the Sultanate rule. Their arrival included a huge number of fleets. Goa Velha (Old Goa) became the initial capital in Goa and later on Pangim was selected as the proxy. Their rule continued for about 450 years.</p>
    
    </MDBCol>
    <MDBCol  md="4" id="vl"><MDBListGroup className="contents">
      <MDBListGroupItem>Contents:</MDBListGroupItem>
      <MDBListGroupItem id="listone" color="success" href="#Legacy of the Portuguese - The benefits obtained: The printing press">Legacy of the Portuguese - The benefits obtained: The printing press</MDBListGroupItem>
      <MDBListGroupItem id="listtwo" color="success" href="#Legacy of the Portuguese - The benefits obtained: The spice trade, Golden Age of Goa, the Architecture">Legacy of the Portuguese - The benefits obtained: The spice trade, Golden Age of Goa, the Architecture</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Legacy of the Portuguese - The benefits obtained: Forts, Source of water">Legacy of the Portuguese - The benefits obtained: Forts, Source of water</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Legacy of the Portuguese - The benefits obtained: Education, Scools, Religion, Festivals, Architecture, Food">Legacy of the Portuguese - The benefits obtained: Education, Scools, Religion, Festivals, Architecture, Food</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Legacy of the Portuguese - The benefits obtained: The printing press">Legacy of the Portuguese - The benefits obtained: The printing press</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Conclusion">Conclusion</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Legacy in other parts of Asia">Legacy in other parts of Asia</MDBListGroupItem>
      <MDBListGroupItem id="listfour" color="success" href="#references">References</MDBListGroupItem>
     
    </MDBListGroup></MDBCol>
  </MDBRow>
 
</MDBContainer>
  <ParallaxProvider>
<LegacyContent /> </ParallaxProvider>
<Footer />
</>

);
}

export default Legacy;