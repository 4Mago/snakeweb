import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import { motion } from "framer-motion"
import FooterLogo from "../components/footerlogo"
import Gnistan from './Gnistan'

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
    client ?
    <>
    <ContCont>
        <Container
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
          <LeftContainer></LeftContainer>
          <RightContainer>
            <HeaderText>{client.clientName}</HeaderText>
            <HeaderTagline>{client.tagline}</HeaderTagline>
            <Text>{client.description}</Text>
          </RightContainer>
          <MoreSpace />
        </Container>
        <HeroImage
          alt="hero image"
          className="heroimage"
          id="heroimage"
          src={urlFor(client.websiteImage).url()}
        />
    </ContCont>
    <Gnistan />
    <FooterLogo />
</>
: null
  )
}

export default About

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  z-index: -1;

  @media screen and (max-width: 500px) {
    height: auto;
    flex-flow: column;
  }
`
const MoreSpace = styled.div`
  background-color: #000;
  height: 15vh;
  width: auto;
`

const LeftContainer = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  padding-top: 42vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0;

  @media screen and (max-width: 750px) {
    padding-top: 20vh;
  }
`

const RightContainer = styled.div`
  color: #fff;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media screen and (min-width: 1400px) {
    font-size: 18px;
  }

  @media screen and (max-width: 750px) {
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    background-color: black;
  }
`

const HeaderText = styled.h1`
  color: white;
  height: 15px;
  padding-top: 40px;
  font-size: 32px;
  text-align: left;
  cursor: pointer;
`
const HeaderTagline = styled.h1`
  color: white;
  font-size: 22px;
  text-align: left;
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
  background-size: cover;

  @media screen and (max-width: 500px) {
    height: auto;
  }
`

const Text = styled.p`
  max-width: 680px;

  @media screen and (max-width: 900px) {
    max-width: 70vw;
  }
  @media screen and (max-width: 500px) {

  }
`
