import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../Client"

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
    <>
      <Container>
        <LeftContainer>
          <HeaderText>{about.title}</HeaderText>

          <HeroImage
            alt="hero image"
            className="heroimage"
            id="heroimage"
            src={urlFor(about.image).url()}
          />
        </LeftContainer>
        <RightContainer>
          <HeaderTagline>{about.tagline}</HeaderTagline>
          <Text>{about.description}</Text>
        </RightContainer>
      </Container>
    </>
  )
}

export default Gnistan

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
  background-color: #131313;
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
  height: 100%;
  color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  width: 40%;
  padding: 70px;
`

const HeaderText = styled.h1`
  color: white;
  font-size: 32px;
  text-align: right;
  cursor: pointer;
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
  height: 250px;
  width: 250px;
  @media screen and (min-width: 1000px) {
  }
`

const Text = styled.p`
  text-align: center;
`
