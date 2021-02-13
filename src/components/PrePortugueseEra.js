import React from 'react';
import './PrePortugueseEra.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import PrePortugueseContent from './PrePortugueseContent';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";

const PrePortugueseEra = () => {
  return ( <>
  <MDBContainer  className="">
    <MDBRow id="historybox">
      <MDBCol  md="8"> <MDBTypography blockquote bqColor='success'>
      <MDBBox  tag='p' mb={0} className='bq-title' id="historybox">A Brief Introduction to the history of Goa </MDBBox> </MDBTypography>
      <p className="historytext" >Goa as a state technically got its statehood in 1987, but it's history goes all the way back to the prehistoric times. Goa is huge and multi faceted. It has relations to India in terms of colonial rule and multi cultural influence.</p>
      <p className="historytext" >
The earliest evidences of human settlement in India and evident from the usgalimal rock engravings, which belonged to the upper paleolithic or mesolithic eras. The Iron Age in Goa saw the evidence of the Mauryan and Satavahana empires ruling what is today, modern Goa. The Medieval era involved Goa being governed by the Kadamba kingdom, the Vijayanagara Empire, the Bahmani Sultanate and the Bijapur Sultanate.</p>
<p className="historytext" >
The Portuguese were able to conquer Goa in 1510 after invasion, putting an end to the Bijapur Sultanate after defeating them. The Portuguese rule went on for about 450 years in total, and has significantly and profoundly influenced Goan culture and architecture.</p>
<p className="historytext" >
The mid 1900s saw the rise of rebellion within Goa, as well as India wanting to take over Goa from the Portuguese after their independence from the British, which culminated with the Indian army invading and annexing Goa after a brief battle. The region was absorbed into the Indian Union and by 1987, Goa was granted statehood.

</p>
      
      </MDBCol>
      <MDBCol  md="4" id="vl"><MDBListGroup className="contents">
      <MDBListGroupItem>Contents:</MDBListGroupItem>
      <MDBListGroupItem id="listone" color="success" href="#Prehistory: Paleolithic and Mesolithic era">Prehistory: Paleolithic and Mesolithic era</MDBListGroupItem>
      <MDBListGroupItem id="listtwo" color="success" href="#Prehistory: Kushavati Shamanic culture">Prehistory: Kushavati Shamanic culture</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Prehistory: Neolithic period">Prehistory: Neolithic period</MDBListGroupItem>
      <MDBListGroupItem id="listfour" color="success" href="#Iron Age (from 16th century BCE): The Formations of Gaumkaris and the self rule">Iron Age (from 16th century BCE): The Formations of Gaumkaris and the self rule</MDBListGroupItem>
      <MDBListGroupItem id="listfive" color="success" href="#Iron Age (from 16th century BCE):The Mauryas (322 - 185 BCE)">Iron Age (from 16th century BCE):The Mauryas (322 - 185 BCE)</MDBListGroupItem>
      <MDBListGroupItem id="listsix" color="success" href="#Iron Age (from 16th century BCE): The Satavahanas (c. 2nd century BCE to 2nd CE)">Iron Age (from 16th century BCE): The Satavahanas (c. 2nd century BCE to 2nd CE)</MDBListGroupItem>
      <MDBListGroupItem id="listseven" color="success" href="#Iron Age (from 16th century BCE):Bhojas (c. 2nd century BCE to 4th CE)">Iron Age (from 16th century BCE):Bhojas (c. 2nd century BCE to 4th CE)</MDBListGroupItem>
      <MDBListGroupItem id="listeight" color="success" href="#Kingdoms to Late Medieval period (1st century CE to 16th): The dynasties (to 16th century)">Kingdoms to Late Medieval period (1st century CE to 16th): The dynasties (to 16th century)</MDBListGroupItem>
      <MDBListGroupItem id="listnine" color="success" href="#references">References</MDBListGroupItem>
     
    </MDBListGroup></MDBCol>
    </MDBRow>
   
  </MDBContainer>
    <ParallaxProvider>
  <PrePortugueseContent /> </ParallaxProvider>
  <Footer />
  </>
  
  );
  }
  
  export default PrePortugueseEra;