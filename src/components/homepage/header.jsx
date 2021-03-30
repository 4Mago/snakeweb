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
    header ?
    <Container>
      <ColumnLeft>
        <HeaderText>Jakob Engwall <br /> Creative Copywriter</HeaderText>
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
    : null
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
    gap: 10px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`

const ColumnLeft = styled.div`
  color: #fff;
  width: 55%;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 0;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`
const RightContainer = styled.div`
  height: auto;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5vw 0 0;

  @media screen and (max-width: 420px) {
    width: 100%;
    padding: 0;
  }
`

const HeaderText = styled.h1`
  color: white;
  font-size: 50px;
  min-width: 300px;
  text-align: left;
  justify-self: left;

  @media screen and (max-width: 500px) {
    min-width: 235px;
    font-size: 2rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 24px;
    min-width: 200px;
  }
`

const HeaderTagline = styled.p`
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
  @media screen and (max-width: 420px) {
    font-size: 17px;
    min-width: 150px;
    max-width: 250px;
  }
  @media screen and (max-width: 350px) {
    font-size: 17px;
    min-width: 150px;
    max-width: 200px;
  }
`

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
  @media screen and (max-width: 420px) {
    width: 270px;
  }
  @media screen and (max-width: 350px) {
    width: 220px;
  }
`

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
