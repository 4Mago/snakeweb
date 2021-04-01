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
			title, tagline, description, image, heroImage
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
      <HeaderTagline>{vemarjagItem.title}</HeaderTagline>
        <HeaderTagline blocks={vemarjagItem.tagline} />
      </LeftContainer>
      <RightContainer
      style={{ backgroundImage: `url(${urlFor(vemarjagItem.heroImage).quality(80).auto('format').url()})` }}
      >
          <ASoundCloud href="https://soundcloud.com/osignat/sets/snaek-demoes/s-bwFuifGgd6R" target="_blank">
          <SocialImage alt="TEMC Logo" src="/soundcloud.svg" />
          <P>Min musik</P>
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
  right: 0;
  top: 16%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  color: white;
  font-style: bold;
  font-size: 15px;

  @media screen and (max-width: 700px) {
    position: static;
    margin-top: 500px;
    margin-left: 50px;
  }
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
const P = styled.p`
  position: relative;
  bottom: 50px;
  font-weight: 800;
`

const Container = styled(motion.div)`
  width: 100vw - 150px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    padding-left: 10px;
    padding-top: 90px;
  }
`

const LeftContainer = styled.div`
  color: #fff;
  background-color: black;
  width: 50%;
  height: 100vh;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-position: center;

  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`

const RightContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-position: center;
  padding: 0;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-flow: column;
    align-items: center;
    z-index: 999;
  }
`



const HeaderTagline = styled(PortableText)`
  color: white;
  max-width: 470px;
  font-size: 18px;
  text-align: left;
  padding-left: 50px;
  line-height: 24px;
  z-index: 1;
  text-decoration: none;


  &:link { color: white; }
  &:visited { color: white; }

  @media screen and (max-width: 1400px) {
    font-size: 16px;
    position: relative;
    left: 50px;
  }

  @media screen and (max-width: 1200px) {
    left: 90px;
  }
  @media screen and (max-width: 1000px) {
    left: 120px;
  }
  @media screen and (max-width: 700px) {
    text-align: center;
    padding-left: 0;
    left: 0;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 16px;
    position: fixed;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`