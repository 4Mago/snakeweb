import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"
import CTA from "../cta"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const Container = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  width: 100%;
`

const HeaderText = styled.h1`
  color: white;
  font-size: 52px;
  text-align: left;
  width: 40vw;
  margin-bottom: 0;

  @media screen and (min-width: 1550px) {
    font-size: 4vw;
  }
  @media screen and (max-width: 1300px) {
    width: 48vw;
  }
  @media screen and (max-width: 1100px) {
    font-size: 45px;
    position: relative;
    top: -10%;
    padding: 0 5vw;
  }
  @media screen and (max-width: 700px) {
    width: auto;
  }
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
  @media screen and (max-width: 400px) {
    font-size: 36px;
  }
`
const HeaderTagline = styled.p`
  color: white;
  font-size: 32px;
  text-align: left;

  @media screen and (max-width: 1000px) {
    font-size: 22px;
    position: relative;
    top: -10%;
    padding: 0 5vw;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    width: 301px;
  }
  @media screen and (max-width: 400px) {
    font-size: 14px;
    width: 150px;
  }
`

const HeroImage = styled.img`
  width: auto;
  height: 100%;
  z-index: 1;

  @media screen and (min-width: 1500px) {
    height: 100%;
  }
  @media screen and (max-width: 800px) {
    height: 80%;
  }
  @media screen and (max-width: 500px) {
    height: 73%;
  }
`

const Header = () => {
  const [header, setHeader] = useState("")

  useEffect(() => {
    const headerQuery = `*[_type == "header"]{
			heroImage, title, tagline
		}`
    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setHeader(header)
      })
    })

    return
  }, [])

  return (
    <Container>
        <HeroImage
          alt="hero image"
          className="heroimage"
          id="heroimage"
          src={urlFor(header.heroImage).url()}
        />
        <HeaderText>{header.title}</HeaderText>
        <HeaderTagline>{header.tagline}</HeaderTagline>
        <CTA>Kontakt</CTA>
    </Container>
  )
}

export default Header
