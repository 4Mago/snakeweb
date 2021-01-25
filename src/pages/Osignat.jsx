import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

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
    <>
      <Container>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <HeaderText>{client.clientName}</HeaderText>
          <HeaderTagline>{client.tagline}</HeaderTagline>
          <Text>{client.description}</Text>
        </RightContainer>
      </Container>
      <HeroImage
        alt="hero image"
        className="heroimage"
        id="heroimage"
        src={urlFor(client.websiteImage).url()}
      />
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
  padding-top: 50px;
  min-height: 100vh;
  display: flex;
  z-index: -1;

  @media screen and (max-width: 450px) {
    height: auto;
    flex-flow: column;
  }
`

const LeftContainer = styled.div`
  color: #fff;
  width: 50%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0;
`

const RightContainer = styled.div`
  color: #fff;
  width: 50%;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0;
`

const HeaderText = styled.h1`
  color: white;
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
  height: auto;
  width: 100%;
  right: 0;
  top: 0;
  z-index: -1;
  @media screen and (min-width: 1000px) {
    min-height: 100vh;
  }
`

const Text = styled.p``
