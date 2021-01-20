import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import sanityClient from "../Client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const MenuLink = styled(Link)`
  text-decoration: none;
`

const Container = styled.div`
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  background-color: #686868;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 50px;
  @media screen and (max-width: 500px) {
    height: 320px;
  }
`

const ImageDiv = styled.div`
  width: 135px;
  height: auto;
  margin: 0 auto;
  transition: 0.2s all ease;

  &:hover {
    transform: scale(1.1);
  }
`

const HeroImage = styled.img`
  width: 135px;
  height: 135px;
`

const A = styled.a``

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
      <A href="#">
        <ImageDiv>
          <HeroImage
            className="App-logo"
            alt="TEMC Logo"
            src={urlFor(header.image).url()}
          />
        </ImageDiv>
      </A>

      <MenuLink>© Copyright Jakob Engwall 2021</MenuLink>
      <br />
    </Container>
  )
}

export default FooterLogo
