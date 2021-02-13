import React, { useEffect, useState } from 'react';
import './NewsArticles.css';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import CardItem from './CardItem';
import './Cards.css';
import Footer from './Footer';

import { MDBTypography, MDBContainer, MDBRow, MDBCol, MDBBox } from "mdbreact";

const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

function NewsArticles() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="dummy">

<div className='cardsphoto'>
<MDBContainer  >
<MDBRow >

    <MDBCol size="12" md="12">  
    <MDBTypography blockquote bqColor='success'>
    <MDBBox tag='p' mb={0} className='bq-title'>Welcome to our news articles section! </MDBBox> </MDBTypography>
   <p>Here, I present various list of selected articles, letters, columns etc. selected by me, originally taken from the <a href = "http://epaper.heraldgoa.in/" target = "_blank">OHerealdO</a> newspaper, established in 1900. Many thanks to them! </p>
    </MDBCol>
    </MDBRow>
</MDBContainer>
      
		</div>
			
			<SRLWrapper options={options}>
			<div className='cards__wrapper'>
    
          <ul className='cards__items'>
		  <CardItem 
              src='./images/Jan/4 Jan 2020 (2).jpg'
              text='4 Jan 2021, article by Dr Francisco Colaco'
              label='Health Corner'
              path='/health-corner'
			  alt='4 Jan 2020, 4 Jan 2020 article by Dr Francisco Colaco'
			  
            />
            <CardItem
              src='./images/Jan/4 Jan 2020 (3).jpg'
              text='4 Jan 2021, Stray cattle menace in Port Town'
              label='A brief look'
              path='/brief-look'
            />
			  <CardItem
              src='./images/Jan/4 Jan 2020 (4).jpg'
              text='4 Jan 2021, Margao government office still old school'
              label='Goa government'
              path='/goa-government'
            />
				  <CardItem
              src='./images/Jan/4 Jan 2020.jpg'
              text='4 Jan 2021, Letters to the editor'
              label='Letters'
              path='/letters'
            />
       
					</ul>
					<ul className='cards__items'>
					<CardItem
              src='./images/Jan/6 Jan 2020 (2).jpg'
              text='6 Jan 2021, Demarcation of land at Melauli Contd.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/6 Jan 2020 (important).jpg'
              text='6 Jan 2021, Liberation? Really? Que libertação?'
              label='The Drs. input'
              path='/goa-insider'
            />
			  <CardItem
              src='./images/Jan/6 Jan 2021 (3).jpg'
              text='Contd. of article 6 Jan 2021, Demarcation of land at Melauli'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/7 Jan 2020 (2).jpg'
              text='7 Jan 2021, SWR double tracking given the nod Contd.'
              label='Goa & India'
              path='/goa-india'
            />
			</ul>
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/7 Jan 2020 (1).jpg'
              text='Contd. of 7 Jan 2021, SWR double tracking given the nod'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/8 Jan 2021.jpg'
              text='8 Jan 2021, Pramod Sawant a murderer? says AAP'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/8 Jan 2021(2).jpg'
              text='8 Jan 2021, Police take action on protestors'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/8 Jan 2021(3).jpg'
              text='8 Jan 2021, Police action intensifies against Melauli locals, Valpoi turns into a fortress Contd.'
              label='Goa & India'
              path='/goa-india'
            />
			</ul>
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/8 Jan 2021(4).jpg'
              text='Contd. 8 Jan 2021, Police action intesifies against Melauli locals'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/8 Jan 2021(5).jpg'
              text='8 Jan 2021, Environmental Impact Assessment called into question by Experts.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/9 Jan 2021.jpg'
              text='9 Jan 2021, An assessment on recent events at Melauli'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/9 Jan 2021 (2).jpg'
              text='9 Jan 2021, Another assessment on recent events at Melauli'
              label='Goa & India'
              path='/goa-india'
            />
			</ul>
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/9 Jan 2021 (3).jpg'
              text='9 Jan 2021, Bicholim extends support to Melauli'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
                 src='./images/Jan/9 Jan 2021(4).jpg'
              text='9 Jan 2021, Protestors continue into the forest Contd.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/9 Jan 2021(5).jpg'
              text='Contd. of article 9 Jan 2021, Protestors continue into the forest'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/10 Jan 2021.jpg'
              text='10 Jan 2021, Bom Jesus Basilica in danger of deteriorating'
              label='Goa & Portugal'
              path='/goa-portugal'
            />
			</ul>
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/11 Jan 2021.jpg'
              text='11 Jan 2021, Letters to the editor'
              label='Letters'
              path='/letters'
            />
			  <CardItem
              src='./images/Jan/12 Jan 2021.jpg'
              text='12 Jan 2021, Letters to the editor'
              label='Letters'
              path='/letters'
            />
			  <CardItem
              src='./images/Jan/13 Jan 2021.jpg'
              text='13 Jan 2021, A call to awake'
              label='Letters'
              path='/letters'
            />
				  <CardItem
              src='./images/Jan/13 Jan 2021 (2).jpg'
              text='13 Jan 2021, Letters to the editor'
              label='Letters'
              path='/letters'
            />
			</ul>

      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/14 Jan 2021.jpg'
              text='14 Jan 2021, Think like a university student...'
              label='Educational advice'
              path='/educational-advice'
            />
			  <CardItem
              src='./images/Jan/14 Jan 2021(2).jpg'
              text='14 Jan 2021, Villagers demand MLA for action in return for votes'
              label='Goa-India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/14 Jan 2021(3).jpg'
              text='14 Jan 2021, Trump, a danger to the country?'
              label='Goa-World'
              path='/goa-world'
            />
				  <CardItem
              src='./images/Jan/15 Jan 2021.jpg'
              text='15 Jan 2021, the voice of Goa appraisal on the latest police attack on the villagers of Melauli'
              label='Goa & India'
              path='/goa-india'
            />
			</ul>

      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/15 Jan 2021(2).jpg'
              text='15 Jan 2021, Trump impeached over inciting insurrection at Capitol Hill'
              label='Goa & World'
              path='/goa-world'
            />
			  <CardItem
              src='./images/Jan/16 Jan 2021.jpg'
              text='16 Jan 2021, IIT project at Melauli scraped'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/16 Jan 2021(2).jpg'
              text='16 Jan 2021, Government bows to the demands of the people of Melauli, but what of the other projects?'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/16 Jan 2021(3).jpg'
              text='16 Jan 2021, Vijay demands the Government to scrap other projects'
              label='Goa & India'
              path='/goa-india'
            />
			</ul>
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/16 Jan 2021(4).jpg'
              text='16 Jan 2021, Congress party demands the Government to scrap other projects'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/17 Jan 2021.jpg'
              text='17 Jan 2021, Goans asked to unite against the dictatorial authoritarian BJP Government Contd.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/17 Jan 2021(2).jpg'
              text='Contd. from 17 Jan 2021, Goans asked to unite against the dictatorial authoritarian BJP Government Contd.'
              label='Goa & India'
              path='/goa-india'
            />
				  <CardItem
              src='./images/Jan/20 Jan 2021.jpg'
              text='20 Jan 2021, Biden set to become the 46th POTUS'
              label='Goa & World'
              path='/goa-world'
            />
			</ul>
     
      <ul className='cards__items'>
					<CardItem
              src='./images/Jan/23 Jan 2021.jpg'
              text='23 Jan 2021, The so called "freedom fighters" throw out an immature tantrum demanding government jobs for their children.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/25 Jan 2021.jpg'
              text='25 Jan 2021, Goans lives do not count in the tourism plunder of Goa.'
              label='Goa & India'
              path='/goa-india'
            />
			  <CardItem
              src='./images/Jan/30 Jan 2021.jpg'
              text='30 Jan 2021, Letter to the editor'
              label='Letters'
              path='/letters'
            />
				  <CardItem
              src='./images/Jan/31 Jan 2021.jpg'
              text='31 Jan 2021, The wonderful world of the humble pao'
              label='Goa & World'
              path='/goa-world'
            />
             <CardItem
              src='./images/Jan/31 Jan 2021(2).jpg'
              text='31 Jan 2021, Goa loses millions via tourism'
              label='Goa & World'
              path='/goa-world'
            />
			</ul>
				</div>
			</SRLWrapper>
			<Footer />
		</div>
	);
	
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};



export default NewsArticles;