import React, { useEffect, useState } from "react"
import imageUrlBuilder from "@sanity/image-url"
import styled from "styled-components"
import sanityClient from "../Client"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"


const About = () => {
  const [vemarjag, setVemarjag] = useState("")

  useEffect(() => {
    const vemarjagQuery = `*[_type == "vemarjag"]`
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

      <LeftContainer>
        <HeaderTagline>{vemarjag.title}</HeaderTagline>
        <HeaderTagline>{vemarjag.tagline}</HeaderTagline>
      </LeftContainer>
      <RightContainer>
        <HeroImage     
                    alt="hero image"
                    className="App-logo"
                    id="heroimage"
                    src={urlFor(vemarjag.image).url()}
       />
        <HeaderText>{vemarjag.description}</HeaderText>
      </RightContainer>

        <Text />
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
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-left: 150px;
  min-height: 100vh;
  display: flex;
  flex-flow: row;
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
  padding: 180px 10px;

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

const HeaderText = styled(PortableText)`
  color: white;
  font-size: 32px;
  text-align: center;
  width: 55%;
  cursor: pointer;
  min-width: 255px;
`


const HeaderTagline = styled(PortableText)`
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

const HeroImage = styled.img`
  height: auto;
  width: 22rem;
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
