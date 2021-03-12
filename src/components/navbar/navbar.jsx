import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
// import imageUrlBuilder from "@sanity/image-url"
import { Link } from "react-router-dom"
import Sidebar from "./sidebar"
import { motion } from 'framer-motion'

// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source) {
//   return builder.image(source)
// }


const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  z-index: 99;
`

const NavBox = styled(motion.div)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 30px 0;
  gap: 24px;
  font-size: 16.4px;
  height: 22px;

  @media screen and (max-width: 800px) {
    padding: 20px 0;
    gap: 1px;
    width: 70px;
  }
`

const MenuLink = styled(Link)`
  font-family: Poppins, cursive;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.42);
  z-index: 99;
  padding: 1rem;
  animation: animate 1.5s ease-in-out infinite;

  @keyframes animate {
    0% {
      text-shadow: 0 0 0 0 rgba(255, 255, 255, 0.42);
    }
    25% {
      text-shadow: 0 0 0 0 #fbfcfd, 0 0 4px 0 #fbfcfd;
    }
    50% {
      text-shadow: 0 0 0 rgba(255, 255, 255, 0.42);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.5s;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
  }
  &:nth-child(4) {
    animation-delay: 0.5s;
  }
  &:nth-child(5) {
    animation-delay: 0.3s;
  }
  &:nth-child(6) {
    animation-delay: 0.4s;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.666);
    // vore kul om man kan visa en bild också vid hover
  }
`

const LogoBox = styled.img`
   width: 140px;
   padding: 0 25px;
   top: 0;
   left: 0;
   height: auto;
   @media screen and (max-width: 968px) {
     transition: 0.8s all ease;
     padding: 0 15px;
   }
   @media screen and (max-width: 500px) {
     width: 115px;
     padding: 20px 0;
   }
`




const Navbar = () => {
  const [header, setHeader] = useState("")
  const [side, setSide] = useState(true)


  useEffect(() => {
    const headerQuery = `*[_type == "header"]{
              menu, logo
          }`
    sanityClient.fetch(headerQuery).then((header) => {
      header.forEach((header) => {
        setHeader(header)
      })
    })

    return
  }, [])

  return (
    <>
    {side ?
    
    <Container id="navbar">
    <Link onClick={() => setSide(false)}>
        <LogoBox alt="TEMC Logo" src="/snakeweb.gif" />
      </Link>
      <NavBox
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
      >
        {header.menu
          ? header.menu.map((item, id) => (
              <MenuLink to={item.link} key={id}>
                {item.name}
              </MenuLink>
            ))
          : null}
      </NavBox>
    </Container>
    : 
    <Sidebar />
    }
    </>
  )
}

export default Navbar
