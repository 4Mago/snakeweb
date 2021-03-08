import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
import imageUrlBuilder from "@sanity/image-url"

const Header = () => {
  const [header, setHeader] = useState("")

  useEffect(() => {
    const headerQuery = `*[_type == "header"]{
			heroImage, title, tagline, logo
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
      <ColumnLeft>
        <HeaderText>{header.title}</HeaderText>
        <HeaderTagline>{header.tagline}</HeaderTagline>
      </ColumnLeft>
      <RightContainer>
        <HeroImage2
          alt="hero image"
          className="heroimage"
          id="heroimage"
          src={urlFor(header.logo).url()}
        />
      </RightContainer>
    </Container>
  )
}

export default Header

const Container = styled.div`
  padding-top: 10px;
  padding-left: 200px;
  height: auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  gap: 100px;

  @media screen and (max-width: 600px) {
    flex-flow: column;
    padding-left: 100px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`

const ColumnLeft = styled.div`
  color: #fff;
  width: 50%;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`
const RightContainer = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw 0 0;

  @media screen and (max-width: 400px) {
    width: 100%;
    padding: 0;
  }
`

const HeaderText = styled.p`
  color: white;
  font-size: 4rem;
  min-width: 120px;
  text-align: left;
  justify-self: left;

  @media screen and (max-width: 500px) {
    min-width: 235px;
  }
`

const HeaderTagline = styled.h1`
  color: white;
  font-size: 1.7rem;
  text-align: left;
  line-height: 1.1;

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    width: 301px;
  }
  @media screen and (max-width: 400px) {
    font-size: 17px;
    width: 150px;
  }
`

// const HeroImage = styled.img`
//   width: auto;
//   height: 100%;
//   right: 0;
//   top: 0;
//   z-index: -1;

//   @media screen and (min-width: 1500px) {
//     height: 100%;
//   }
// `

const HeroImage2 = styled.img`
  width: 550px;
  height: 550px;

  @media screen and (max-width: 1000px) {
    width: 370px;
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 301px;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 400px) {
    width: 270px;
  }
`

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
