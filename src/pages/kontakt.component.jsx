import React, { useEffect, useState } from "react"
import styled from "styled-components"
import sanityClient from "../Client"
import { motion } from "framer-motion"

const About = () => {
  const [priskategori, setPriskategori] = useState("")

  useEffect(() => {
    const priskategoriQuery = `*[_type == "priskategori"]{
			title, icon, price, valuta
		  }`
    sanityClient.fetch(priskategoriQuery).then((priskategori) => {
      priskategori.forEach((priskategori) => {
        setPriskategori(priskategori)
      })
    })

    return
  }, [])

  return (
    priskategori ?
    <ContCont>
      <Container
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
    >
        <LeftContainer>
        <HeaderText2>Hallå där!</HeaderText2>
        <HeaderText>{priskategori.title}</HeaderText>
        </LeftContainer>
        <RightContainer>
          <CatButton><P>Vägen till mitt hjärta</P>
          <PhotoDiv src="/cat.png" />
          </CatButton>
          <div>
          <HeaderTagline>Kom i kontakt med mig!</HeaderTagline>
          <Text><SocialImage src="/mail.png"/>{priskategori.valuta}</Text>
          <Text><SocialImage2 src="/phone.png"/>{priskategori.price}</Text>
          <br />
          </div>
      </RightContainer>
      </Container>
    </ContCont>
    : null
  )
}

export default About

const ContCont = styled.div`
  width: 100vw - 150px;
  height: 100%;
  background-color: #000000;
`

const Container = styled(motion.div)`
  height: 100%;
  padding-top: 80px;
  padding-left: 180px;
  min-height: 100vh;
  display: flex;
  gap: 20px;
  z-index: -1;


  @media screen and (max-width: 750px) {
    height: auto;
    flex-flow: column;
    padding-top: 35px;
    padding-left: 120px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`

const PhotoDiv = styled.img`
height: 400px;
width: 400px;
top: 0;
left: 0;
opacity: 0;
transition-duration: 1s;
position: absolute;


&:hover {
   opacity: 1;
  }
`

const CatButton = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
  cursor: default;
`

const P = styled.p`
font-family: 'Lora', serif;
  font-size: 18px;
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

const SocialImage2 = styled.img`
  width: 45px;
  height: auto;
  padding: 15px;
  padding-top: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`

const LeftContainer = styled.div`
  color: #fff;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 0;
  

  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding-left: 120px;
    width: 270px;
  }
`

const RightContainer = styled.div`
  height: 60%;
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: right;
  width: 40%;
  padding: 30px 50px 0 20px;

  @media screen and (max-width: 1050px) {
    height: 100%;
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
  @media screen and (max-width: 450px) {
    height: 100%;
    width: 100%;
    padding: 0;
  }
`

const HeaderText = styled.p`
  color: white;
  font-size: 18px;
  text-align: left;
  width: 90%;
  min-width: 255px;
  padding: 0;

  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    min-width: 205px;
  }
`
const HeaderText2 = styled.p`
  color: white;
  font-size: 35px;
  text-align: left;
  width: 80%;
  min-width: 255px;
  padding-left: 15px;

  @media screen and (min-width: 1400px) {
    font-size: 38px;
  }

  @media screen and (max-width: 500px) {
    min-width: 205px;
  }
`
const HeaderTagline = styled.h1`
  color: white;
  max-width: 550px;
  font-size: 22px;
  text-align: right;
  cursor: pointer;

  @media screen and (min-width: 1400px) {
    font-size: 36px;
  }

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

// const Icon = styled.img`
//   height: auto;
//   width: 22rem;
//   @media screen and (max-width: 1000px) {
//     width: 15rem;
//   }
//   @media screen and (max-width: 750px) {
//     width: 22rem;
//   }
//   @media screen and (max-width: 450px) {
//     width: 12rem;
//   }
// `

const Text = styled.a`
display: flex;
justify-content: center;
align-items: center;
margin: 0;

@media screen and (min-width: 1400px) {
    font-size: 22px;
  }
`
