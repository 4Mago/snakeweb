import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"
import { motion } from "framer-motion"

const Gnistan = () => {
  const [about, setAbout] = useState("")

  useEffect(() => {
    const aboutQuery = `*[_type == "about"]{
			description, title, image, tagline
		  }`
    sanityClient.fetch(aboutQuery).then((about) => {
      about.forEach((about) => {
        setAbout(about)
      })
    })

    return
  }, [])

  return (
    about ?
    <ContCont>
      <Container
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
      >
        <LeftContainer>
          <HeaderText>{about.title}</HeaderText>
          <HeroImage
            
            alt="hero image"
            className="App-logo"
            id="heroimage"
            src={urlFor(about.image).url()}
          />
        </LeftContainer>
        <RightContainer>
          <HeaderTagline>{about.tagline}</HeaderTagline>
          <Text>{about.description}</Text>
        </RightContainer>
      </Container>
    </ContCont>
    : null
  )
}

export default Gnistan

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled.div`
  width: 100vw - 150px;
  height: 100%;
  background-color: #000000;
`

const Container = styled(motion.div)`
  width: 100vw - 150px;
  height: 100%;
  padding-top: 80px;
  padding-left: 150px;
  min-height: 100vh;
  display: flex;
  gap: 50px;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    padding-top: 35px;
    padding-left: 0;
  }
`

const LeftContainer = styled.div`
  color: #fff;
  width: 40%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start ;
  align-items: center;
  margin-right: 0;

  @media screen and (max-width: 750px) {
    height: auto;
    padding: 0;
    justify-content: center;
    align-self: center;
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
  padding: 60px 10px;

  @media screen and (max-width: 1050px) {
    padding-right: 100px;
    height: 100%;
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    padding: 15px;
    padding-right: 15px;
  }
  @media screen and (max-width: 450px) {
    height: 100%;
    width: 90%;
    padding-right: 0px;
  }
`

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  text-align: center;
  width: 55%;
  cursor: pointer;
  min-width: 255px;

  @media screen and (min-width: 1400px) {
    font-size: 44px;
  }
`
const HeaderTagline = styled.h1`
  color: white;
  max-width: 350px;
  font-size: 22px;
  line-height: 24px;
  text-align: right;

  @media screen and (min-width: 1400px) {
    font-size: 30px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
    text-align: center;

  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    max-width: 320px;

  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const HeroImage = styled.img`
  height: auto;
  width: 22rem;
  border-radius: 22rem;

  @media screen and (min-width: 1400px) {
    width: 80%;
    border-radius: 80%;
  }
  @media screen and (max-width: 1000px) {
    width: 15rem;
  }
  @media screen and (max-width: 750px) {
    width: 22rem;
  }
  @media screen and (max-width: 450px) {
    width: 12rem;
  }
`

const Text = styled.p`
  text-align: center;
  padding-left: 10px;
  width: 70%;

  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`
