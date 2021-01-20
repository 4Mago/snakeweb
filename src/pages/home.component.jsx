import React from "react"
import styled from 'styled-components'
import { motion } from "framer-motion"
import Arrow from "../components/homepage/arrows"
import Homepage from "../components/homepage/homepage"
const transition = { duration: 0.3, ease: [0.43, 0.013, 0.23, 0.96] }

const Container = styled.div`
  background-color: #131313;
`

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={transition}
    >
 <Container>     
      <Homepage />
      <Arrow />
    </Container>
    </motion.div>
  )
}

export default Home
