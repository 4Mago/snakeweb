import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../Client'
import CTA from '../components/cta'
import Tagline from '../components/homepage/tagline'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Container = styled.div`
	height: auto;
	min-height: 100vh;
	display: flex;
	width: 50%;
	justify-content: center;
	align-items: flex-start;
	flex-flow: column;
`
const HeaderContentContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	@media screen and (min-width: 1000px) {
		padding-left: 110px;
	}
`

const HeaderText = styled.h1`
	color: white;
	font-size: 52px;
	text-align: left;
	width: 40vw;
	hover: 
	margin-bottom: 0;
	cursor: pointer;

	@media screen and (min-width: 1550px) {
		font-size: 4vw;
	}
	@media screen and (max-width: 1300px) {
		width: 48vw;

	}
	@media screen and (max-width: 1100px) {
		font-size: 45px;
		position: relative;
		top: -10%;
		padding: 0 5vw;
	}
	@media screen and (max-width: 700px) {
		width: auto;
	}
	@media screen and (max-width: 500px) {
		font-size: 36px;
	}
	@media screen and (max-width: 400px) {
		font-size: 36px;
	}
`
const HeaderTagline = styled.h1`
	color: white;
	font-size: 32px;
	text-align: left;
	cursor: pointer;

	@media screen and (max-width: 1000px) {
		font-size: 22px;
		position: relative;
		top: -10%;
		padding: 0 5vw;
	}
	@media screen and (max-width: 700px) {
	}
	@media screen and (max-width: 500px) {
		font-size: 18px;
		width: 301px;
	}
	@media screen and (max-width: 400px) {
		font-size: 14px;
		width: 150px;
	}
`

const HeroImage = styled.img`
	position: absolute;
	width: auto;
	height: 90%;
	right: 0;
	top: 0;
	z-index: -1;

	@media screen and (min-width: 1500px) {
		height: 100%;
	}
	@media screen and (max-width: 800px) {
		height: 80%;
	}
	@media screen and (max-width: 500px) {
		height: 73%;
	}
`

const CTAContainer = styled.div`
	position: absolute;
	top: 75vh;	
	left: 55vw;
	display: flex;
`

const About = () => {
	const [client, setClient] = useState("")

	useEffect(() => {
	  const headerQuery = `*[_type == "client"]{
			  clientName, description, logo, websiteImage, tagline
		  }`
	  sanityClient.fetch(headerQuery).then((header) => {
		header.forEach((header) => {
		  setClient(header)
		})
	  })
  
	  return
	}, [])
  

	return (
		<Container>
		  <HeaderContentContainer>
	
			  <HeroImage
				alt="hero image"
				className="heroimage"
				id="heroimage"
				src={urlFor(client.websiteImage).url()}
				/>
			  <HeaderText>{client.clientName}</HeaderText>
			  <HeaderTagline>{client.tagline}</HeaderTagline>
		  </HeaderContentContainer>
		</Container>
	)
}
export default About
