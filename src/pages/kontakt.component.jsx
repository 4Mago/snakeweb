import React, { useEffect, useState } from "react"
import styled from "styled-components"
import sanityClient from "../Client"
import { motion } from "framer-motion"

const About = () => {
  const [priskategori, setPriskategori] = useState("")

  useEffect(() => {
    const priskategoriQuery = `*[_type == "priskategori"]{
			title, icon, price, valuta
		  }`
    sanityClient.fetch(priskategoriQuery).then((priskategori) => {
      priskategori.forEach((priskategori) => {
        setPriskategori(priskategori)
      })
    })

    return
  }, [])

  return (
    <>
      <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            
    >
      <Container>
        <LeftContainer>
        <HeaderText2>Hallå där!</HeaderText2>
        <HeaderText>{priskategori.title}</HeaderText>
        </LeftContainer>
        <RightContainer>
          <HeaderTagline>Kom i kontakt med mig!</HeaderTagline>
          <Text>{priskategori.price}</Text>
          <Text>{priskategori.valuta}</Text>
          <Iframe width="100%" height="230" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1196997025%3Fsecret_token%3Ds-bwFuifGgd6R&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Iframe>
          <SoundCloudBox>
            <A href="https://soundcloud.com/osignat" title="Osignat" rel="noreferrer" target="_blank">Osignat</A> · 
            <A href="https://soundcloud.com/osignat/sets/snaek-demoes/s-bwFuifGgd6R" title="snaek demoes" target="_blank">snaek demoes</A>
            </SoundCloudBox>
        </RightContainer>
      </Container>
      </motion.div>
    </>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-left: 150px;
  min-height: 100vh;
  display: flex;
  gap: 50px;
  background-color: #131313;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    padding-top: 35px;
    padding-left: 0;
  }
`
const Iframe = styled.iframe``
const A = styled.a`color: #cccccc; text-decoration: none;`
const SoundCloudBox = styled.div`
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

const LeftContainer = styled.div`
  color: #fff;
  width: 40%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start ;
  align-items: center;
  margin-right: 0;

  @media screen and (max-width: 750px) {
    height: auto;
    padding: 0;
    padding-left: 30px;
    justify-content: center;
    align-self: center;
    width: 70%;
  }
`

const RightContainer = styled.div`
  height: 70%;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  width: 40%;
  padding: 30px 10px 0 10px;

  @media screen and (max-width: 1050px) {
    padding-right: 200px;
    height: 100%;
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
  @media screen and (max-width: 450px) {
    height: 100%;
    width: 90%;
  }
`

const HeaderText = styled.p`
  color: white;
  font-size: 18px;
  text-align: justify;
  width: 90%;
  min-width: 255px;
  padding: 0;
`
const HeaderText2 = styled.p`
  color: white;
  font-size: 35px;
  text-align: left;
  width: 90%;
  min-width: 255px;
  padding-left: 15px;
`
const HeaderTagline = styled.h1`
  color: white;
  max-width: 550px;
  font-size: 22px;
  text-align: right;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
    text-align: center;

  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

// const Icon = styled.img`
//   height: auto;
//   width: 22rem;
//   @media screen and (max-width: 1000px) {
//     width: 15rem;
//   }
//   @media screen and (max-width: 750px) {
//     width: 22rem;
//   }
//   @media screen and (max-width: 450px) {
//     width: 12rem;
//   }
// `

const Text = styled.p`
`
