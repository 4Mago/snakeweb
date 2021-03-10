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
    <>
      <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
    >
      <Container>
      {vemarjag.length > 0
          ? vemarjag.map((vemarjagItem, idx) => (
            <>
      <LeftContainer>
      <HeroImage     
          alt="hero image"
          id="heroimage"
          src={urlFor(vemarjagItem.image).url()}
       />
        <HeaderText blocks={vemarjagItem.description} />
        <Text />        
      </LeftContainer>
      <RightContainer>
      <HeaderTagline>{vemarjagItem.title}</HeaderTagline>
        <HeaderTagline blocks={vemarjagItem.tagline} />
      </RightContainer>
      </>
          ))
          : null }
      </Container>
      </motion.div>
    </>
  )
}

export default About

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 100vw - 150px;
  height: 100%;
  padding-top: 40px;
  padding-left: 150px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    
  }
`

const LeftContainer = styled.div`
  color: #fff;
  width: 55%;
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
  width: 45%;
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
  text-align: right;
  line-height: 24px;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
    text-align: justify;
    
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const HeroImage = styled.img`
  height: auto;
  width: 22rem;
  border-radius: 10rem;
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
`
