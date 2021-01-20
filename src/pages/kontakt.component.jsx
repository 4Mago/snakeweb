import React, { useState, useEffect} from "react"
import sanityClient from '../Client'
import styled from "styled-components"
import { motion } from "framer-motion"
import Sample from "../components/projects/sample"

const Background = styled.div`
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 0;
  transition: 1s all ease-in-out;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15vh;
  font-size: 36px;
  display: flex;
  text-align: center;
  justify-content: center;
`
const Segment = styled.div`
  height: 15vh;
  display: flex;
  justify-content: space-evenly;
`
const Segment2 = styled.div`
  padding-top: 23vh;
`

const Text = styled.p`
  padding: 25px;
  margin-top: 25px;
  font-size: 1rem;
  width: 40%;
  text-align: center;
  text-decoration: none;

  @media screen and (max-width: 670px) {
    width: 100%;
    font-size: 5vw;
  }
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

const A = styled.a`
  text-decoration: none;
`

const transition = { duration: 1, ease: [0.43, 0.013, 0.23, 0.96] }

const Kontakt = () => {

  const [about, setAbout] = useState("")

  useEffect(() => {
    const aboutQuery = `*[_type == "about"]{
			description, title, tagline
		}`
    sanityClient.fetch(aboutQuery).then((about) => {
      about.forEach((about) => {
        setAbout(about)
      })
    })

    return
  }, [])


  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={transition}
    >
      <Background />
      <Container>
        <HeaderText>{about.title}</HeaderText>
        <HeaderTagline>{about.tagline}</HeaderTagline>
      </Container>
        <Text>{about.description}</Text>
    </motion.div>
  )
}
export default Kontakt
