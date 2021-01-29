import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import { motion } from 'framer-motion'

const About = () => {
  const [client, setClient] = useState("")

  useEffect(() => {
    const headerQuery = `*[_type == "client"]{
			  clientName, description, websiteImage, tagline, logo
		  }`
    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setClient(header)
      })
    })

    return
  }, [])

  return (
    <motion.div
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
  >
      <Container>
        <ContentContainer>
        <LeftContainer>
        <HeaderText>{client.clientName}</HeaderText>
          <HeaderTagline>{client.tagline}</HeaderTagline>
          <Text2>{client.description}</Text2>
        </LeftContainer>
        <MiddleContainer>
        <HeaderTagline>{client.clientName}</HeaderTagline>
        <Iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1196997025%3Fsecret_token%3Ds-bwFuifGgd6R&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></Iframe>
        <SoundCloud>
          <A2 href="https://soundcloud.com/osignat" title="Osignat" target="/">Osignat</A2> · 
          <A2 href="https://soundcloud.com/osignat/sets/snaek-demoes/s-bwFuifGgd6R" title="snaek demoes" target="/">snaek demoes</A2>
        </SoundCloud>
        </MiddleContainer>
        <RightContainer>
          <HeaderText>{client.clientName}</HeaderText>
          <HeaderTagline>{client.tagline}</HeaderTagline>
          <Text>{client.description}</Text>
          <Text>{client.description}</Text>
        </RightContainer>
        </ContentContainer>
      <HeroImage
        alt="hero image"
        className="heroimage"
        id="heroimage"
        src={urlFor(client.websiteImage).url()}
        />
        </Container>
    </motion.div>
  )
}

export default About

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;

  @media screen and (max-width: 450px) {
    flex-flow: column;
  }
`

const ContentContainer = styled.div`
  padding-left: 150px;
  padding-top: 80px;
  display: flex;
`

const Iframe = styled.iframe`
`

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

const A2 = styled.a`
color: #cccccc; 
text-decoration: none;
`


const LeftContainer = styled.div`
  color: #fff;
  width: 33%;
  display: flex;
  padding: 25vh 0 0 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
`

const MiddleContainer = styled.div`
    color: #fff;
  width: 33%;
  display: flex;
  padding: 10vh 0 0 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
`

const RightContainer = styled.div`
  display: flex;
  color: #fff;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: right;
  width: 33%;
  padding: 50px;
`

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  text-align: right;
  cursor: pointer;
  height: 17px;
`
const HeaderTagline = styled.h1`
  color: white;
  font-size: 22px;
  text-align: right;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const HeroImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  z-index: -1;
  @media screen and (min-width: 1000px) {
  }
`

const Text = styled.p`
  font-size: 0.5rem;
  width: 100%;
  text-align: right;
  text-decoration: none;
`
const Text2 = styled.p`
  font-size: 0.5rem;
  width: 100%;
  text-align: left;
  text-decoration: none;
`
