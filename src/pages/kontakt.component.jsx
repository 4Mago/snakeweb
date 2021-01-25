import React, { useState, useEffect} from "react"
import sanityClient from '../Client'
import styled from "styled-components"
import { motion } from "framer-motion"
import imageUrlBuilder from '@sanity/image-url'

const Kontakt = () => {

  const [about, setAbout] = useState("")

  useEffect(() => {
    const aboutQuery = `*[_type == "about"]{
			description, title, tagline, image
		}`
    sanityClient.fetch(aboutQuery).then((about) => {
      about.forEach((about) => {
        setAbout(about)
      })
    })

    return
  }, [])


  return (
    <Background>
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
      <Container>
        <SanityImage 
        alt="bild på Jakob Engwall"
        src={urlFor(about.image).url()}
        />
      </Container>
      <ContentContainer>
        <HeaderText>{about.title}</HeaderText>
        <HeaderTagline>{about.tagline}</HeaderTagline>
        <Text>{about.description}</Text>
      </ContentContainer>
    </motion.div>
    </Background>
  )
}
export default Kontakt


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Background = styled.div`
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 0;
  transition: 1s all ease-in-out;
  background-color: #C4C4C4;
`
const Container = styled.div`
  width: 100%;
  min-height: 25vh;
  margin-top: -60px;
  font-size: 36px;
  display: flex;
  text-align: flex-end;
  justify-content: flex-end;
`

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
`

const SanityImage = styled.img`
  width: 500px;
  height: 500px;
`

const Text = styled.p`
  padding: 25px;
  font-size: 1rem;
  width: 40%;
  text-align: left;
  text-decoration: none;

  @media screen and (max-width: 670px) {
    width: 100%;
    font-size: 5vw;
  }
`
const HeaderText = styled.h1`
	color: white;
	font-size: 2rem;
	text-align: left;
	width: 40vw;
	margin-bottom: 0;

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
const HeaderTagline = styled.p`
	color: white;
	font-size: 14px;
	text-align: left;

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

