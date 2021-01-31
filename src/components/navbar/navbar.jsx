import React from "react"
import styled from "styled-components"

import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: transparent;
  @media screen and (max-width: 968px) {
    font-size: 0;
    width: 50%;
    justify-content: flex-start;
  }
`

const LogoBox = styled.img`
  width: 140px;
  padding: 0 25px;
  height: auto;
  @media screen and (max-width: 968px) {
    transition: 0.8s all ease;
    padding: 0 15px;
  }
  @media screen and (max-width: 400px) {
    width: 100px;
    padding: 0;
  }
`

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  right: 0;
  padding: 0 30px;
  gap: 12px;
  align-items: center;
  font-size: 16.4px;
  height: 22px;

  @media screen and (max-width: 968px) {
    display: none;
  }
`

// const MenuLink = styled(Link)`
//   font-family: Poppins, cursive;
//   text-decoration: none;
//   color: rgba(255, 255, 255, 0.42);
//   z-index: 99;
//   padding: 1rem;

//   &:hover {
//     color: rgba(255, 255, 255, 0.666);
//   }
// `

// const [header, setHeader] = useState("")

// useEffect(() => {
//   const headerQuery = `*[_type == "header"]{
// 		menu, logo
// 	}`
//   sanityClient.fetch(headerQuery).then((header) => {
//     header.forEach((header) => {
//       setHeader(header)
//     })
//   })

//   return
// }, [])
const NavigationDesktop = () => {
  return (
    <Container id="navbar">
      <Link to="/">
        <LogoBox className="App-logo2" alt="TEMC Logo" src="/snakeweb.gif" />
      </Link>
      <NavBox></NavBox>
    </Container>
  )
}

export default NavigationDesktop
