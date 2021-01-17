import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 0;
  transition: 1s all ease-in-out;
  background: radial-gradient(
    circle at bottom,
    rgba(234, 109, 145, 0.2) 0%,
    rgba(32, 27, 61, 0) 100%
  );
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

const A = styled.a`
  text-decoration: none;
`

const transition = { duration: 1, ease: [0.43, 0.013, 0.23, 0.96] }

const Kontakt = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={transition}
    >
      <Background />
      <Container>
        <Text>
          Vi är en liten studio baserad i Stockholm som bygger hemsidor med det
          senaste inom webbdesign och webbutveckling. Detta innebär mer insyn
          under arbetets gång, inga löpande kostnader och tillgång till ett
          lättförståeligt redigeringsprogram. Utöver detta lägger vi stort fokus
          på användarvänlighet, mobilanpassning, och kundupplevelsen i
          utformningen av hemsidan
        </Text>
      </Container>
      <Segment>
        <Text>
          Hör av dig till <A href="tel:0707972446">070-797 2446</A>
        </Text>
      </Segment>
      <Segment2>Hej</Segment2>
    </motion.div>
  )
}
export default Kontakt
