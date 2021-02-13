import React from 'react';
import './PortugueseEra.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Footer';
import PortugueseContent from './PortugueseContent';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { MDBTypography, MDBBox } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";

const PortugueseEra = () => {
  return ( <>
  <MDBContainer  className="">
    <MDBRow id="historybox">
      <MDBCol  md="8"> <MDBTypography blockquote bqColor='success'>
      <MDBBox  tag='p' mb={0} className='bq-title' id="historybox">A Era do Domínio Português em Goa (The Era of Portuguese rule in Goa) </MDBBox> </MDBTypography>
     <p className="historytext" >Here, we examine the intricacies concerning the Portuguese era in Goa. We'll examine various aspects towards it, based on research. This era is closely connected to the present time of Goa as it was just after this time that India annexed Goa, hence there are various cultural aspects which still exist to this day in the very fiber and being of native Goans. </p>
     <p className="historytext" >The main purpose of visit by the Portuguese was for trade and proselytization, so that Christianity could reach to the heathen Goans. Many Goans still appreciate this in the form of the renown Spaniard St. Francis Xavier, who was a Jesuit from Spain commissioned by St. Ignatius de Loyola, also from Spain, to get the gospel to the heathens of Goa, that were largely plagued by Hinduism, Islam and Buddhism. For centuries, Goa remained as a heathen region with rulers and dynasties rising and falling. Thus with the coming of the Portuguese, changes occurred.</p>
     <p className="historytext" >
     Prior to being known plainly as "Goa", or the Republic of India, it was known as the State of India (Portuguese: Estado da Índia), also known as the Portuguese State of India (Estado Português da Índia, EPI) or simply Portuguese India (Índia Portuguesa). It was established six years after the sea route to the Indian subcontinent. It was a colonial state of the empire of Portugal. </p>
     <p className="historytext" >

     Portuguese India had a range of viceroys and Governor Generals, the first being Viceroy Francisco de Almeida. He set up his headquarters at Cochim (presently Cochin (Kochi)). Not every ruler was of the rank of Viceroy. Later on, post 1510, the capital of the Portuguese viceroyalty shifted to the Velhas Conquistas (Old conquests) of what is today known as Goa and Damaon.

     What is known as Mumbai today (Bombay), was also part of Portuguese India, known as "Bom Baim" until it was given to the British in 1661.  They leased it to the East India Company. The Portuguese governor in Goa had rule and power over all territory owned by the Portuguese in the Indian Ocean, even from Southern Africa to the Southeast of Asia. This rule came to an end somewhere in the 18th century. Mozambique got its own government in 1752. The territories of Macau, Solor and Timor, stopped being governed by the Portuguese government of India by 1844. Their authority was instead given to the colonial holdings of the Konkan and Malabar coasts of Western India.</p>

      <p className="historytext" >
      By the time the British rule in India came to an end in 1947, Portuguese India was subdivided into three areas namly, Goa, Damão, which included Dadra and Nagar Haveli, which were inland enclaves, and Diu. Dadra and Nagar Haveli were lost by 1954, and Goa by 1961. However, Portugal recognised Indian control by 1974, after the Carnation Revolution and the fall of the Estado Novo regime, as a result of a treaty signed on 31 December 1974.</p>
      
      </MDBCol>
      <MDBCol  md="4" id="vl"><MDBListGroup className="contents">
      <MDBListGroupItem>Contents:</MDBListGroupItem>
      <MDBListGroupItem id="listone" color="success" href="#The first arrival of the Portuguese: The European discoverer of India -- Vasco Da Gama">The first arrival of the Portuguese: The European discoverer of India -- Vasco Da Gama</MDBListGroupItem>
      <MDBListGroupItem id="listtwo" color="success" href="#The first arrival of the Portuguese: Pedro Álvares Cabral">The first arrival of the Portuguese: Pedro Álvares Cabral</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#The first arrival of the Portuguese: Dom Francisco de Almeida">The first arrival of the Portuguese: Dom Francisco de Almeida</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#The first arrival of the Portuguese: Afonso de Albuquerque and the governors since">The first arrival of the Portuguese: Afonso de Albuquerque and the governors since</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#The Inquisition">The Inquisition</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#Later Events during Portuguese occupancy">Later Events during Portuguese occupancy</MDBListGroupItem>
      <MDBListGroupItem id="listthree" color="success" href="#The final unfortunate ending - 1947 - 1961">The final unfortunate ending - 1947 - 1961</MDBListGroupItem>
      <MDBListGroupItem id="listfour" color="success" href="#references">References</MDBListGroupItem>
     
    </MDBListGroup></MDBCol>
    </MDBRow>
   
  </MDBContainer>
    <ParallaxProvider>
  <PortugueseContent /> </ParallaxProvider>
  <Footer />
  </>
  
  );
  }
  
  export default PortugueseEra;