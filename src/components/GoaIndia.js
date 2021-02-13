import React from "react";
import { MDBTypography, MDBContainer, MDBRow, MDBCol, MDBBox } from "mdbreact";
import './GoaWorld.css'; //Import here your file style
import Footer from './Footer';
import { MDBMask, MDBView} from "mdbreact";

const gridExamplesPage = () => {
    return (
<>
       
        <h2 className="heading">Bem-vindo à nossa coluna de notícias entre Goa e a Índia!</h2>
  
     
      
    <MDBContainer   className="contentbox">

    <MDBRow>
            <MDBCol  md="6"> <MDBTypography blockquote bqColor='success'>
            <MDBBox tag='p' mb={0} className='bq-title'>Welcome to our column on news between Goa and India!</MDBBox> <MDBBox tag="footer" mb={3} className="blockquote-footer">by Ezekiel Carvalho <cite title="Source Title"><p>Published on 4th February 2021</p></cite></MDBBox></MDBTypography>
           <p  className="historytext">In this column we try to analyze and scrutinize on the various though latest news developments in Goa's relation to the rest of the Indian Union. </p> <p className="historytext">In this issue, all eyes are focussed on Goa's handeling of the novel COVID-19 pandemic. The state was known to have just 7 cases initially, but due to the CM's rash decisions, the state had a great number of cases and deaths, but with the peak finally being reached, the number has dropped.</p><p className="historytext"> With each wave coming and going, Goa has not been severely stricken as much as other countries, even though a much more challenging variant has emerged, the Union is been swift to respond to ensure that it won't face another tragic peak or even worse, as it experienced a few months ago. </p>
           </MDBCol>
            
            <MDBCol  id="avatar"  md="6"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://static.dw.com/image/56119685_403.jpg"
          
                alt=""
              />
                <MDBMask className="flex-center" overlay="green-strong">
                <p className="white-text">A relatively empty beach in Goa as tourists avoid travel due to COVID-19</p>
              </MDBMask>
         
            </MDBView>
          </MDBCol></MDBCol>
          </MDBRow>

  
  
          <MDBRow>

        
            <MDBCol  id="avatar"  md="6"><MDBCol className="mb-3 text-center">
            <MDBView hover zoom>
              <img
                src="https://static.dw.com/image/56119620_401.jpg"
                
                alt=""
              />
               <MDBMask className="flex-center" overlay="green-strong">
                <p className="white-text">International visitors are missing from Goa's beaches this year, hitting the state's tourism-dependent economy</p>
              </MDBMask>
         
            </MDBView>
          </MDBCol></MDBCol>

          <MDBCol  md="6"> <MDBTypography blockquote bqColor='success'>
            <MDBBox tag='p' mb={0} className='bq-title'>The general conundrum </MDBBox> </MDBTypography>
           <p  className="historytext">Goa, a tourism dependent economy, hasn't been immune to the COVID pandemic. The state's Tourism Ministry in December 2020, they alluded that the tourism industry in Goa might have suffered losses between $273 million (€222 million) and $985 million (€801 million) as a result of the COVID pandemic. To top that off, there was job losses at the range of 35%-58%.</p> <p>
             The typical tourism season in Goa (December and January), which is supposed to cause Goa to have a peak of tourists, more so from the Northern Indian state as a result of the drop in climate, many of these people flock Goa to bask in the hot sun in the beaches, unfortunately faced a severe blow due to COVID. The International tourists who come are mainly from Russia, Israel, the UK and Italy, often stay for months in Goa.</p> <p> This time, in December, there was no usual flow of crowds. Beaches in Goa carried an abandoned look, and the local businesses in these areas grappled to survive as a result of the drop in tourists.</p><p>A case in point was a woman who for almost 18 years, moved to Goa from a neighbouring state (Karnataka) every October. She is known for making accessories to sell at the beach. She apparently earns more than what she does as a farmer in Karnataka. She has been married for seven years, and is 25 years old with 3 children.</p>
           
            
            </MDBCol>
          </MDBRow>
          <MDBRow>
    <MDBCol > <MDBTypography note noteColor='success'>  <MDBTypography blockquote className="text-center">
    <p>"We were under lockdown for nearly eight months, which meant no income. Standing in the sun all day isn't easy, but what's the alternative? This is the only way we can stay alive. As the season ends, so do our means of livelihood,"</p><MDBBox tag="footer" mb={3} className="blockquote-footer">Woman from Karnataka <cite title="Source Title"><p>DW - Made for Minds</p></cite></MDBBox></MDBTypography></MDBTypography></MDBCol></MDBRow>
  
    <MDBRow >

<MDBCol size="12" md="12">  

<p> Once the lockdown restrictions were lifted in Karnataka, the family came to Goa with the optimism that they would earn enough to feed themselves as tourists return. But this year was quite a contrast as the industry was hit severely. Her husband tries to find whatever job he can at the nearby shacks but there is no guarantee that he will get back any money.</p>
</MDBCol>
</MDBRow>

<MDBRow>

<MDBCol  md="6"> <MDBTypography blockquote bqColor='success'>
            <MDBBox tag='p' mb={0} className='bq-title'>The Hotel industry - An awful battering</MDBBox> </MDBTypography>
           <p  className="historytext">In the case of the hotels in Goa, they've surely but certainly been dealt an awful battering. The normal scenario in December in Goa was that it would be difficult to find accommodation at the end of December. But 2020 was different.</p> <p className="historytext">The hotels yearn for international tourists in Goa mainly due to the foreign currency exchange which helps feed the coffers of the hotels with extra money. The domestic tourists who were able to make it to Goa, but the hotels had to give their rooms to the domestic tourists at reduced rates. This would severely hit the hotels earnings.</p>
      
           </MDBCol>
            
            <MDBCol  id="avatar"  md="6"><MDBCol>
            <MDBView hover zoom>
              <img
                src="https://static.dw.com/image/56119669_403.jpg"
          
                alt=""
              />
                  <MDBMask className="flex-center" overlay="green-strong">
                <p className="white-text">Empty deck chairs at a beach in Goa as tourists mostly stay away from the state</p>
              </MDBMask>
         
            </MDBView>
          </MDBCol></MDBCol>
          </MDBRow>

  
  <MDBRow >

    <MDBCol size="12" md="12">  
    <MDBTypography blockquote bqColor='success'>
    <MDBBox tag='p' mb={0} id = "crasjustoodio" className='bq-title'>A possible recovery? Maybe not</MDBBox> </MDBTypography>
   <p>Unfortunately with such a severe blow dealt to the tourism industry of Goa, there are chances that Goa may never recover from this pandemic. Last year, a 2 month lockdown cost the tourism industry US$1 billion.</p>

   

<MDBCol size="12" md="12">  
<MDBTypography blockquote bqColor='danger'>
<MDBBox tag='p' mb={0} id = "crasjustoodio" className='bq-title'>Author's Note and conclusion</MDBBox> </MDBTypography>
<p>This has probably been the first time in my life when Goa and it's tourism industry has been severely crippled by a disease. Indeed with the state being severely in debt and the Indian Union as a whole trying to pull things together after facing a severe rise in COVID cases months ago and thereby reaching the second place in highest countries having COVID, the Union will find it difficult to raise the state back to it's former glory days of the Portuguese rule. It is certainly possible that the industry will recover, but it may take a number of years to do so.</p>
</MDBCol>


</MDBCol>
</MDBRow>

<MDBCol size="12" md="12">  
<MDBTypography blockquote bqColor='warning'>
<MDBBox tag='p' mb={0} id = "crasjustoodio" className='bq-title'>References:</MDBBox> </MDBTypography>
<p></p>
</MDBCol>

<MDBRow>
<MDBCol > <MDBTypography note noteColor='warning'>  <MDBTypography blockquote className="text-left">
<ul>
  <li><a href="https://www.dw.com/en/goa-economy-hit-by-coronavirus/a-56125326" target="_blank">Goa economy bears the brunt of India's coronavirus lockdown</a></li>
  <li><a href="https://www.scmp.com/lifestyle/travel-leisure/article/3117715/indian-tourist-hotspot-goa-may-never-recover-coronavirus" target="_blank">Indian tourist hotspot Goa may never recover from the coronavirus pandemic</a></li>

</ul>  </MDBTypography></MDBTypography></MDBCol></MDBRow>



</MDBContainer>

<Footer />
</>

);
}

export default gridExamplesPage;