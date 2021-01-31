import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sanityClient from "../../Client"
// import imageUrlBuilder from "@sanity/image-url"
import { Link } from "react-router-dom"

// const builder = imageUrlBuilder(sanityClient)
// function urlFor(source) {
//   return builder.image(source)
// }

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  z-index: 99;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

// const LogoBox = styled.img`
//   width: 200px;
//   padding: 0 50px;
//   height: auto;

//   @media screen and (max-width: 968px) {
//     transition: 0.8s all ease;
//     padding: 0 15px;
//   }
//   @media screen and (max-width: 400px) {
//     padding: 5px 0 10px 25px;
//     width: 150px;
//   }
// `

const NavBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 30px;
  gap: 12px;
  align-items: center;
  font-size: 16.4px;
  height: 22px;
  align-self: flex-start;

  &::nth-child(1) {
    padding: 50px;
  }
`

const MenuLink = styled(Link)`
  font-family: Poppins, cursive;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.42);
  z-index: 99;
  padding: 1rem;
  animation: animate 2s linear infinite;

  @keyframes animate {
    0% {
      text-shadow: 0 0 0 0 rgba(255, 255, 255, 0.42);
    }
    50% {
      text-shadow: 0 0 0 0 #fbfcfd, 0 0 4px 0 #fbfcfd;
    }
    100% {
      text-shadow: 0 0 0 rgba(255, 255, 255, 0.42);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.6s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.1s;
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

const Sidebar = () => {
  const [header, setHeader] = useState("")

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
    <Container id="navbar">
      <Link to="/"></Link>

      <NavBox>
        {header.menu
          ? header.menu.map((item, id) => (
              <MenuLink to={item.link} key={id}>
                {item.name}
              </MenuLink>
            ))
          : null}
      </NavBox>
    </Container>
  )
}

export default Sidebar
