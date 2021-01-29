import React, { useState, useEffect} from "react"
import sanityClient from '../Client'
import styled from "styled-components"
import { motion } from "framer-motion"
import imageUrlBuilder from '@sanity/image-url'

const Kontakt = () => {

  const [priskategori, setPriskategori] = useState("")

  useEffect(() => {
    const priskategoriQuery = `*[_type == "priskategori"]{
			icon, title, price, valuta
		}`
    sanityClient.fetch(priskategoriQuery).then((priskategori) => {
      priskategori.forEach((priskategori) => {
        setPriskategori(priskategori)
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
        <LeftContainer>
        <Iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1196997025%3Fsecret_token%3Ds-bwFuifGgd6R&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Iframe>
          <SoundCloud>
            <A2 href="https://soundcloud.com/osignat" title="Osignat" target="/">Osignat</A2> · 
            <A2 href="https://soundcloud.com/osignat/sets/snaek-demoes/s-bwFuifGgd6R" title="snaek demoes" target="/">snaek demoes</A2>
          </SoundCloud>
        </LeftContainer>
        <ContentContainer>
        <HeaderText>{priskategori.title}</HeaderText>
        <Text>Mailadress</Text>
        <HeaderTagline>{priskategori.price}</HeaderTagline>
        <Text>        
        </Text>
        <SanityImage 
        alt="bild på Jakob Engwall"
        src={urlFor(priskategori.icon).url()}
        />
        <Text>{priskategori.valuta}</Text>

      </ContentContainer>
      </Container>
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
  height: 106.5vh;
  width: auto;
  margin-top: -60px;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 0;
  transition: 1s all ease-in-out;
  background-color: #131313;
`
const Container = styled.div`
  width: 100%;
  min-height: 25vh;
  padding-top: 60px;
  font-size: 36px;
  display: flex;
  text-align: flex-end;
  justify-content: flex-end;
`

const LeftContainer = styled.div``

const SoundCloud = styled.div`
font-size: 10px; 
color: #cccccc;
line-break: anywhere;
word-break: normal;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis; 
font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
font-weight: 100;
`

const Iframe = styled.iframe``

const A2 = styled.a`
color: #cccccc; 
text-decoration: none;
`

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 80px;
  color: #C4C4C4;
`

const SanityImage = styled.img`
  width: 100px;
  height: 100px;
`

const Text = styled.p`
  font-size: 1rem;
  width: 100%;
  text-align: left;
  text-decoration: none;
  height: 15px;
`
const SVG = styled.svg`
  height: 50px;
`

const HeaderText = styled.h1`
	font-size: 2rem;
	text-align: left;
	width: 40vw;
	margin-bottom: 0;

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
	font-size: 14px;
	text-align: left;

	@media screen and (max-width: 1000px) {
		font-size: 22px;
		top: -10%;
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

