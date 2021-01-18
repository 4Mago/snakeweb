import React from "react"
import Header from "../components/homepage/header"
import { motion } from "framer-motion"
import Arrow from "../components/homepage/arrows"
import Intropage from "../components/homepage/intropage"
const transition = { duration: 0.3, ease: [0.43, 0.013, 0.23, 0.96] }
const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={transition}
    >
      <Intropage />
      <Header />
      <Arrow />
    </motion.div>
  )
}

export default Home
