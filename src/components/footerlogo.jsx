import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../Client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const MenuLink = styled.p`
  text-decoration: none;
  color: white;
`

const Container = styled.div`
  width: 100%;
  height: 550px;
  padding: 0;
  margin: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 50px;
  @media screen and (max-width: 500px) {
    height: 490px;
  }
`

const ImageDiv = styled.div`
  width: 135px;
  height: auto;
  margin: 0 auto;
  transition: 0.2s all ease;
  display: flex;

  &:hover {
    transform: scale(1.1);
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  padding: 10px;
  gap: 5em;
  height: auto;
  margin: 0 auto;
  transition: 0.2s all ease;
`

const HeroImage = styled.img`
  width: 135px;
  height: auto;
`

const SocialImage = styled.img`
  width: 45px;
  height: auto;
  padding: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`

const ASoundCloud = styled.a``

const AFacebook = styled.a``

const FooterLogo = () => {
  const [header, setHeader] = useState("")

  useEffect(() => {
    const headerQuery = `*[_type == "tagline"]{
			image
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
      <ImageDiv>
        <HeroImage alt="TEMC Logo" src={urlFor(header.image).url()} />
      </ImageDiv>
      <SocialContainer>
        <ASoundCloud href="https://soundcloud.com/osignat" target="_blank">
          <SocialImage alt="TEMC Logo" src="/soundcloud.svg" />
        </ASoundCloud>
        <AFacebook href="https://facebook.com/osignat" target="_blank">
          <SocialImage alt="TEMC Logo" src="/facebook.svg" />
        </AFacebook>
      </SocialContainer>
      <MenuLink>© Copyright Jakob Engwall 2021</MenuLink>
      <br />
    </Container>
  )
}

export default FooterLogo
