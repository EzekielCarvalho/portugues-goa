import React from 'react';
import './History.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import HistoryContent from './HistoryContent';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";


const History = () => {
return ( <>
<MDBContainer  className="history">
  <MDBRow id="historybox">
    <MDBCol  md="8"> <MDBTypography blockquote bqColor='success'>
    <MDBBox  tag='p' mb={0} className='bq-title' id="historybox">What is History? Why do we even bother ourselves with it? </MDBBox> </MDBTypography>
   <p className="historytext" >Before we delve into the intricacies of the history of Goa, it is imperative to understand the reasons for us to undertake such an enterprise. Why should we go ahead with this venture? Is it necessary? But before that, we should understand what "history" in and of itself actually is. That's what we'll endeavour to accomplish on this page. </p>
   <p className="historytext" >The main role of History is to stand in the middle of different or various, a tolerant and intelligently difficult debate about our existence: our political organizations, leadership, society, the economy and culture. No matter, how open and free debate is too often lacking, it is not difficult to locate the cause of this inability to tolerate. </p>
    
    </MDBCol>
    <MDBCol  md="4" id="vl"><MDBListGroup className="contents">
    <MDBListGroupItem>Contents:</MDBListGroupItem>
    <MDBListGroupItem id="listone" color="success" href="#definitions">Definitions of History</MDBListGroupItem>
    <MDBListGroupItem id="listtwo" color="success" href="#uses">Uses of History</MDBListGroupItem>
    <MDBListGroupItem id="listthree" color="success" href="#provisions">Provisions of History</MDBListGroupItem>
    <MDBListGroupItem id="listfour" color="success" href="#references">References</MDBListGroupItem>
   
  </MDBListGroup></MDBCol>
  </MDBRow>
 
</MDBContainer>
  <ParallaxProvider>
<HistoryContent /> </ParallaxProvider>
<Footer />
</>

);
}

export default History;