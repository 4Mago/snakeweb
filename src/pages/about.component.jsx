import React, { useEffect, useState } from "react"
import imageUrlBuilder from "@sanity/image-url"
import styled from "styled-components"
import sanityClient from "../Client"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"

const About = () => {
  const [vemarjag, setVemarjag] = useState("")

  useEffect(() => {
    const vemarjagQuery = `*[_type == "vemarjag"]{
			title, tagline, description, image
		  }`
    sanityClient.fetch(vemarjagQuery).then((vemarjag) => {
      const vemarjagArray = []
      vemarjag.forEach((vemarjag) => {
        vemarjagArray.push(vemarjag)
      })
      setVemarjag(vemarjagArray)
    })
    return
  }, [])


  return (
    vemarjag ?
    <ContCont>
      <Container
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
    >
      {vemarjag.length > 0
          ? vemarjag.map((vemarjagItem, idx) => (
            <>
      <LeftContainer>
        <ImageDiv>
      <HeroImage     
          alt="hero image"
          id="heroimage"
          src={urlFor(vemarjagItem.image).url()}
       />
       </ImageDiv>
        <HeaderText blocks={vemarjagItem.description} />
        <Text />        
      </LeftContainer>
      <RightContainer>
      <HeaderTagline>{vemarjagItem.title}</HeaderTagline>
        <HeaderTagline blocks={vemarjagItem.tagline} />
          <ASoundCloud href="https://soundcloud.com/osignat/sets/snaek-demoes/s-bwFuifGgd6R" target="_blank">
          <SocialImage alt="TEMC Logo" src="/soundcloud.svg" />
        </ASoundCloud>
      </RightContainer>
      </>
          ))
          : null }
      </Container>
    </ContCont>
    : null
  )
}

export default About

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled.div`
  width: 100vw - 150px;
  height: 100%;
  background-color: #000000;

`
const ASoundCloud = styled.a`
  z-index: 9999;
  position: fixed;
  right: 15%;
`

const SocialImage = styled.img`
  width: 65px;
  height: auto;
  padding: 15px;
  padding-top: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`


const Container = styled(motion.div)`
  width: 100vw - 150px;
  height: 100%;
  padding-top: 60px;
  padding-left: 120px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    padding-left: 100px;
  }
`

const LeftContainer = styled.div`
  color: #fff;
  width: 5%;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const RightContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw 10vh 0;

  @media screen and (max-width: 700px) {
    width: 90%;
    padding: 0;
  }
`


const HeaderText = styled(PortableText)`
  color: white;
  font-size: 22px;
  text-align: center;
  width: 55%;
  min-width: 255px;
  margin-top: 15px;
  border: 1.8px solid white;
  border-radius: 10px;
  line-height: 24px;
`


const HeaderTagline = styled(PortableText)`
  color: white;
  max-width: 450px;
  font-size: 18px;
  text-align: left;
  line-height: 24px;
  z-index: 1;

  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }

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

const ImageDiv = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  @media screen and (max-width: 1000px) {
    width: 32rem;
  }
  @media screen and (max-width: 750px) {
    width: 22rem;
  }
  @media screen and (max-width: 450px) {
    width: 15rem;
  }
`

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
`

const Text = styled.p`
  text-align: center;
  line-height: 24px;
`
