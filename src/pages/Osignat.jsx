import React, { useEffect, useState } from "react"
import styled from "styled-components"
import sanityClient from "../Client"
import { motion } from "framer-motion"
import FooterLogo from "../components/footerlogo"
import Sliderboy from "./sliderboy"

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
    client ?
    <>
    <ContCont>
        <Container
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
          <Sliderboy />
          <MoreSpace />
        </Container>
    </ContCont>
    <FooterLogo />
</>
: null
  )
}

export default About

const ContCont = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @media screen and (max-width: 500px) {
    height: auto;
    flex-flow: column;
  }
`
const MoreSpace = styled.div`
  background-color: #000;
  height: 13vh;
  width: auto;
  @media screen and (max-width: 800px) {
    height: 10vh;
  }
`
