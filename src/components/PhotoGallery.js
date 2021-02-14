import React, { useEffect, useState } from 'react';
import './PhotoGallery.css';

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

function PhotoGallery() {
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
    <MDBBox tag='p' mb={0} className='bq-title'>Bem-vindo a nossa galeria de fotos (Welcome to our photograph gallery!) </MDBBox> </MDBTypography>
   <p>Here, I present various photos and pictures originally taken by Pierre Moreira of the   <a href = "https://www.facebook.com/Indo-Portuguese-Peregrinations-Peregrina%C3%A7%C3%B5es-Indo-Portuguesas-546266355542771/" target = "_blank">Indo-Portuguese Peregrinations / Peregrinações Indo-Portuguesas</a> facebook personal blog. Many thanks to him for these remarkable photos! </p>
    </MDBCol>
    </MDBRow>
</MDBContainer>
      
		</div>
			
			<SRLWrapper options={options}>
			<div className='cards__wrapper'>
    
          <ul className='cards__items'>
		  <CardItem 
              src='./images/photos/A 20 Rupees note of 1906..jpg'
              text='A 20 Rupees note of 1906'
              label='Portuguese Goa Currency'
              path='/portuguese-goa-currency'
			  alt='A 20 Rupees note of 1906'
			  
            />
            <CardItem
              src='./images/photos/A bridge in the Ghats mountains.jpg'
              text='A bridge in the Ghats mountains'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='A bridge in the Ghats mountains'
            />
			  <CardItem
              src='./images/photos/A general view of Panjim taken from behind the Immaculate Conception church..jpg'
              text='A general view of Panjim taken from behind the Immaculate Conception church'
              label='Goa & World (Goa)'
              path='/goa-world'
			  alt=' A general view of Panjim taken from behind the Immaculate Conception church'
            />
				  <CardItem
              src='./images/photos/A nice street where most of the houses have been refurbished by Western residents as their leisure or retirement dream homes..jpg'
              text='A nice street where most of the houses have been refurbished by Western residents as their leisure or retirement dream homes'
              label='Goa & World (Africa)'
              path='/goa-world'
			  alt='A nice street where most of the houses have been refurbished by Western residents as their leisure or retirement dream homes'
			 
            />
       
					</ul>
					<ul className='cards__items'>
					<CardItem
                src='./images/photos/A note of 4 Tangas (1 fourth Rupee).jpg'
              text='A note of 4 Tangas (1 fourth Rupee)'
			  label='Portuguese Goa Currency'
              path='/portuguese-goa-currency'
			  alt='A note of 4 Tangas (1 fourth Rupee)'
            />
			   <CardItem
              src='./images/photos/A portrait of King João VI of Portugal (1767-1826)..jpg'
              text='A portrait of King João VI of Portugal (1767-1826).'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='A portrait of King João VI of Portugal (1767-1826).'
            />
			  <CardItem
              src="./images/photos/A Portuguese pad.jpg"
              text='A Portuguese padrão at the extreme Southern point of the island. It is a monument realized during the Salazar era. It has not been destroyed after the 1975 Mozambique independence.'
              label='Goa & World (Africa)'
              path='/goa-world'
			  alt=' A Portuguese padrão at the extreme Southern point of the island. It is a monument realized during the Salazar era. It has not been destroyed after the 1975 Mozambique independence.'
            />
				  <CardItem
              src='./images/photos/A procession in Old Goa at the beginning of the 17th century.jpg'
              text='A procession in Old Goa at the beginning of the 17th century'
              label='Goa & World (Goa)'
              path='/goa-world'
			  alt='A procession in Old Goa at the beginning of the 17th century'
			 
            />
			</ul>
			<ul className='cards__items'>
		  <CardItem 
              src='./images/photos/A Senhora Maria de Lourdes Figueiredo de Albuquerque.jpg'
              text='A Senhora Maria de Lourdes Figueiredo de Albuquerque'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='A Senhora Maria de Lourdes Figueiredo de Albuquerque'
			  
            />
            <CardItem
              src='./images/photos/A simple map of the island from a Portuguese touristic guide.jpg'
              text='A simple map of the island from a Portuguese touristic guide'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='A simple map of the island from a Portuguese touristic guide'
            />
			  <CardItem
              src='./images/photos/A street towards the fortress of São Sebastião..jpg'
              text='A street towards the fortress of São Sebastião.'
              label='Goa & World (Goa)'
              path='/goa-world'
			  alt=' A street towards the fortress of São Sebastião.'
            />
				  <CardItem
              src='./images/photos/A view of Srirangapatam ramparts..jpg'
              text='A view of Srirangapatam ramparts.'
              label='British-India'
              path='/british-india'
			  alt='A view of Srirangapatam ramparts'
			 
            />
       
					</ul>
					<ul className='cards__items'>
		  <CardItem 
              src='./images/photos/A Western coast beach close to the fort..jpg'
              text='A Western coast beach close to the fort.'
              label='British-India'
              path='/british-india'
			  alt='A Western coast beach close to the fort.'
			  
            />
            <CardItem
              src='./images/photos/An old postcard showing the bust of Salazar in the center of the park..jpg'
              text='An old postcard showing the bust of Salazar in the center of the park'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='An old postcard showing the bust of Salazar in the center of the park.'
            />
			  <CardItem
              src="./images/photos/Another dun.jpg"
              text="Another dungeon jails known as Colonel Bailey's dungeon, one of the British officers who died there on 1782, two years before the arrival of Mangalorean Catholics prisoners."
			  label='British-India'
              path='/british-india'
			  alt="Another dungeon jails known as Colonel Bailey's dungeon, one of the British officers who died there on 1782, two years before the arrival of Mangalorean Catholics prisoners."
            />
				  <CardItem
              src='./images/photos/Another view of the barricades in Panjim..jpg'
              text='Another view of the barricades in Panjim'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='Another view of the barricades in Panjim'
			 
            />
       
					</ul>

					<ul className='cards__items'>
		  <CardItem 
              src='./images/photos/Another view of the church. On the left, the former barracks..jpg'
              text='Another view of the church. On the left, the former barracks.'
              label='Portuguese-Goa'
              path='/portuguese-goa'
			  alt='Another view of the church. On the left, the former barracks.'
			  
            />
            <CardItem
              src='./images/photos/Another view of the defenses of Panjim during the revolt..jpg'
              text='Another view of the defenses of Panjim during the revolt.'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='Another view of the defenses of Panjim during the revolt..'
            />
			  <CardItem
              src="./images/photos/Another view of the Eastern coast promenade.jpg"
              text="Another view of the Eastern coast promenade"
			  label='Portuguese-Africa'
              path='/portuguese-africa'
			  alt="Another view of the Eastern coast promenade"
            />
				  <CardItem
              src='./images/photos/Another view of the Eastern promenade. Note the typical calçada portuguese black and white flooring in a bad shape....jpg'
              text='Another view of the Eastern promenade. Note the typical calçada portuguese black and white flooring in a bad shape...'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='Another view of the Eastern promenade. Note the typical calçada portuguese black and white flooring in a bad shape...'
			 
            />
       
					</ul>

					<ul className='cards__items'>
		  <CardItem 
              src="./images/photos/Antonio Sebastião's cenotaph.jpg"
              text="Antonio Sebastião's cenotaph"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Antonio Sebastião's cenotaph"
			  
            />
            <CardItem
              src='./images/photos/Arch of Our Lady of the Conception, one of the entrance gates of the old city of Goa, built on 1679.jpg'
              text='Arch of Our Lady of the Conception, one of the entrance gates of the old city of Goa, built on 1679'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='Arch of Our Lady of the Conception, one of the entrance gates of the old city of Goa, built on 1679.'
            />
			  <CardItem
              src="./images/photos/Armchair of the Estado da India Governor general..jpg"
              text="Armchair of the Estado da India Governor general."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Armchair of the Estado da India Governor general."
            />
				  <CardItem
              src='./images/photos/at Nagoa Bardez..jpg'
              text='at Nagoa Bardez.'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='at Nagoa Bardez.'
			 
            />
       
					</ul>

					<ul className='cards__items'>
		  <CardItem 
              src='./images/photos/at Nagoa Bardez.2.jpg'
              text='at Nagoa Bardez'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='at Nagoa Bardez'
			  
            />
            <CardItem
              src='./images/photos/at the fort.jpg'
              text='at the fort'
              label='Portugal'
              path='/portugal'
			  alt='Portugal at the fort.'
            />
			  <CardItem
              src="./images/photos/At the limit between the city of stone and whitewash and Macuti..jpg"
              text="At the limit between the city of stone and whitewash and Macuti."
			  label='Portugal-World(Africa)'
              path='/portugal-world-africa'
			  alt="At the limit between the city of stone and whitewash and Macuti."
            />
				  <CardItem
              src='./images/photos/Back to the city of stone and whitewash..jpg'
              text='Back to the city of stone and whitewash.'
			  label='Portugal-World(Africa)'
              path='/portugal-world-africa'
			  alt='Back to the city of stone and whitewash.'
			 
            />
       
					</ul>

					<ul className='cards__items'>
		  <CardItem 
              src='./images/photos/Barricades mounted in the streets of Panjim by troops loyal to the Portuguese in order to prevent any rebels attack against the city..jpg'
              text='Barricades mounted in the streets of Panjim by troops loyal to the Portuguese in order to prevent any rebels attack against the city.'
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt='Barricades mounted in the streets of Panjim by troops loyal to the Portuguese in order to prevent any rebels attack against the city.'
			  
            />
            <CardItem
              src="./images/photos/Bird's eye view of the fort.jpg"
              text= "Bird's eye view of the fort"
              label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Bird's eye view of the fort"
            />
			  <CardItem
              src="./images/photos/Braganza house Chandor 2.jpg"
              text="Braganza house Chandor"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor"
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 3 (palanquin).jpg"
              text="Braganza house Chandor (Palanquin)"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor (Palanquin)"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 4.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 5.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 6 (commode).jpg"
              text="Braganza house Chandor (commode)"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor (commode)"
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 7.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

			
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 8 (snake stick).jpg"
              text="Braganza house Chandor (snake stick)"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor (snake stick)"
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 9 (rolling armchair).jpg"
              text="Braganza house Chandor (rolling armchair)"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor (rolling armchair)"
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 10.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor"
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 11.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 12.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 13.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 14.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 15.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 16.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 17.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 18.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 19.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 20.jpg"
              text="Braganza house Chandor"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 21.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 22.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 23.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 24.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 25.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 26.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 27.jpg"
              text="Braganza house Chandor 2"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor 28.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
            <CardItem
              src="./images/photos/Braganza house Chandor 29.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
		<CardItem
              src="./images/photos/Braganza house Chandor 30.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
				<CardItem
              src="./images/photos/Braganza house Chandor 31.jpg"
              text="Braganza house Chandor "
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor "
            />
       
					</ul>

					
					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Braganza house Chandor.jpg"
              text="Braganza house Chandor"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Braganza house Chandor"
            />
            <CardItem
              src="./images/photos/Building of the Prelature..jpg"
              text="Building of the Prelature."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Building of the Prelature."
            />
		<CardItem
              src="./images/photos/Bust of General José Paulo Bernard Guedes, Governor general of the Estado da India from 1952 to 1958..jpg"
              text="Bust of General José Paulo Bernard Guedes, Governor general of the Estado da India from 1952 to 1958."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Bust of General José Paulo Bernard Guedes, Governor general of the Estado da India from 1952 to 1958."
            />
				<CardItem
              src="./images/photos/Bust of Luis Meneses de Bragança.jpg"
              text="Bust of Luis Meneses de Bragança"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Bust of Luis Meneses de Bragança"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Bust of Vasco da Gama..jpg"
              text="Bust of Vasco da Gama."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Bust of Vasco da Gama."
            />
            <CardItem
              src="./images/photos/Camoes board.jpg"
              text="Camoes board"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Camoes board"
            />
		<CardItem
              src="./images/photos/canon at fort Portugal.jpg"
              text="canon at fort Portugal"
			  label='Portugal'
              path='/portugal'
			  alt="canon at fort Portugal"
            />
				<CardItem
              src="./images/photos/carta de Goa.jpg"
              text="carta de Goa"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="carta de Goa"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/casa da moeda (mint house serving from 1834-1841).jpg"
              text="casa da moeda (mint house serving from 1834-1841)"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="casa da moeda (mint house serving from 1834-1841)"
            />
            <CardItem
              src="./images/photos/casa da moeda.jpg"
              text="casa da moeda"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="casa da moeda"
            />
		<CardItem
              src="./images/photos/casa de amor.jpg"
              text="casa de amor"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="casa de amor"
            />
				<CardItem
              src="./images/photos/Chair of the Goa Inquisition Tribunal table set..jpg"
              text="Chair of the Goa Inquisition Tribunal table set."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Chair of the Goa Inquisition Tribunal table set."
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/church architecture.jpg"
              text="church architecture"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church architecture"
            />
            <CardItem
              src="./images/photos/church in goa 2.jpg"
              text="church in goa"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church in goa"
            />
		<CardItem
              src="./images/photos/church in goa 3.jpg"
              text="church in goa"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church in goa"
            />
				<CardItem
              src="./images/photos/church in goa.jpg"
              text="church in goa"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church in goa"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/church of st agustine ruins.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
            <CardItem
              src="./images/photos/church of st agustine ruins2.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
		<CardItem
              src="./images/photos/church of st agustine ruins3.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
				<CardItem
              src="./images/photos/church of st agustine ruins4.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/church of st agustine ruins5.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
            <CardItem
              src="./images/photos/church of st agustine ruins6.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
		<CardItem
              src="./images/photos/church of st agustine ruins7.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
				<CardItem
              src="./images/photos/church of st agustine ruins8.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/church of st agustine ruins9.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
            <CardItem
              src="./images/photos/church of st agustine ruins10.jpg"
              text="church of st agustine ruins"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="church of st agustine ruins"
            />
		<CardItem
              src="./images/photos/coat of arms at church st agustine.jpg"
              text="coat of arms at church st agustine"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="coat of arms at church st agustine"
            />
				<CardItem
              src="./images/photos/Coat of arms of Joao Xavier.jpg"
              text="Coat of arms of Joao Xavier"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Coat of arms of Joao Xavier"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/coat of arms.jpg"
              text="coat of arms"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="coat of arms"
            />
            <CardItem
              src="./images/photos/Col Bailey's dungeon plaque.jpg"
              text="Col Bailey's dungeon plaque"
			  label='British India'
              path='/british-india'
			  alt="Col Bailey's dungeon plaque"
            />
		<CardItem
              src="./images/photos/Col Bailey's dungeon plaque2.jpg"
              text="Col Bailey's dungeon plaque"
			  label='British India'
              path='/british-india'
			  alt="Col Bailey's dungeon plaque"
            />
				<CardItem
              src="./images/photos/Col Bailey's dungeon.jpg"
              text="Col Bailey's dungeon"
			  label='British India'
              path='/british-india'
			  alt="Col Bailey's dungeon"
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Col Bailey's dungeon2.jpg"
              text="Col Bailey's dungeon"
			  label='British India'
              path='/british-india'
			  alt="Col Bailey's dungeon"
            />
            <CardItem
              src="./images/photos/Collection of weights wearing the Portuguese monarchy coat of arms..jpg"
              text="Collection of weights wearing the Portuguese monarchy coat of arms."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Collection of weights wearing the Portuguese monarchy coat of arms."
            />
		<CardItem
              src="./images/photos/Commanding view from one of the turrets..jpg"
              text="Commanding view from one of the turrets."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Commanding view from one of the turrets."
            />
				<CardItem
              src="./images/photos/Complete suite of armor which had belonged to Colonel (Mestre de campo) Aires José Gomes (1775-1830)..jpg"
              text="Complete suite of armor which had belonged to Colonel (Mestre de campo) Aires José Gomes (1775-1830)."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Complete suite of armor which had belonged to Colonel (Mestre de campo) Aires José Gomes (1775-1830)."
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Corner of the Casa Branca (White House) now a guesthouse..jpg"
              text="Corner of the Casa Branca (White House) now a guesthouse."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Corner of the Casa Branca (White House) now a guesthouse."
            />
            <CardItem
              src="./images/photos/Dedication of.jpg"
              text="Dedication of the book by the author to his brother and law and friend Antonio Rogado, tribute of a lot of appreciation, consideration and friendship, Lisbon, on 5th of August, 1956."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Dedication of the book by the author to his brother and law and friend Antonio Rogado, tribute of a lot of appreciation, consideration and friendship, Lisbon, on 5th of August, 1956."
            />
		<CardItem
              src="./images/photos/Detail of the armchair of the Estado da India Governor general..jpg"
              text="Detail of the armchair of the Estado da India Governor general."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Detail of the armchair of the Estado da India Governor general."
            />
				<CardItem
              src="./images/photos/Detail of the armchair of the Estado da India Governor general.2.jpg"
              text="Detail of the armchair of the Estado da India Governor general."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Detail of the armchair of the Estado da India Governor general."
            />
       
					</ul>

					<ul className='cards__items'>
					<CardItem
              src="./images/photos/Detail of the piece of furniture presented as the Estado da India Governor general's desk..jpg"
              text="Detail of the piece of furniture presented as the Estado da India Governor general's desk."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Detail of the piece of furniture presented as the Estado da India Governor general's desk."
            />
            <CardItem
              src="./images/photos/Dr. Miguel Caetano Dias. Casa da Moeda was his residence and continues to be the home of the Dias family..jpg"
              text="Dr. Miguel Caetano Dias. Casa da Moeda was his residence and continues to be the home of the Dias family."
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Dr. Miguel Caetano Dias. Casa da Moeda was his residence and continues to be the home of the Dias family."
            />
		<CardItem
              src="./images/photos/Entrance of the former arsenal..jpg"
              text="Entrance of the former arsenal."
			  label='Portuguese Africa'
              path='/portuguese-africa'
			  alt="Entrance of the former arsenal."
            />
				<CardItem
              src="./images/photos/Entrance of the fort.jpg"
              text="Entrance of the fort"
			  label='Portuguese Goa'
              path='/portuguese-goa'
			  alt="Entrance of the fort"
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



export default PhotoGallery;