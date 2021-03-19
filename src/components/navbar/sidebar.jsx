import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
// import imageUrlBuilder from "@sanity/image-url"
import { Link } from "react-router-dom"
import Navbar from './navbar'
import { motion } from 'framer-motion'


// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source) {
//   return builder.image(source)
// }

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 90%;
  z-index: 99;

`

const NavBox = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 35px;
  gap: 12px;
  align-items: center;
  font-size: 16.4px;
  align-self: flex-start;
  margin-top: 8.5em;

  @media screen and (max-width: 950px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 0;
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
  position: absolute;
  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
    padding: 0 15px;
  }
  @media screen and (max-width: 500px) {
    width: 115px;
    padding: 20px 0;
  }
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
 

const Sidebar = () => {
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
        <LogoBox className="App-logo2" alt="TEMC Logo" src="/snakeweb.gif" />
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
      <a href="mailto:jakobengwall@gmail.com"><SocialImage src="/mail.png"/></a>
      <a href="tel:+46707102996"><SocialImage2 src="/phone.png"/></a>
      </NavBox>
</Container>
    : 
    <Navbar />
          }  
</>
  )
}

export default Sidebar
