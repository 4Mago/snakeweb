import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import sanityClient from "../Client"
import imageUrlBuilder from "@sanity/image-url"
import FooterLogo from "./footerlogo"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const MenuLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s all ease;

  &:hover {
    font-size: 19px;
  }
`
const MenuLinkOpenhours = styled(Link)`
  font-size: 20px;
  color: green;
  text-decoration: none;
  transition: 0.2s all ease;

  &:hover {
    font-size: 22px;
  }
`

const Container = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  gap: 2%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 1%;
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  text-align: center;
  @media screen and (min-width: 600px) {
    &:nth-child(1) {
      align-items: center;
      text-align: left;
    }
    &:nth-child(4) {
      align-items: center;
      @media screen and (min-width: 1500px) {
        padding: 0 50px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    height: 200px;
  }
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  padding: 5px;
  cursor: pointer;
`

const InfoHeader = styled.h3``
const InfoText = styled.p`
  top: 0;
  margin: 0;
  padding-bottom: 8px;
`
const InfoLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 0.2s all ease;

  &:hover {
    font-size: 19px;
  }
`

const Footer = () => {
  const [footer, setFooter] = useState("")

  useEffect(() => {
    const footerQuery = `*[_type == "footer"]`
    sanityClient.fetch(footerQuery).then((footer) => {
      footer.forEach((footer) => {
        setFooter(footer)
      })
    })
    return
  }, [])

  return (
    <>
      <Container>
        <InfoContainer>
          <InfoHeader>Navigation</InfoHeader>

          {footer.menu
            ? footer.menu.map((item, id) => (
                <InfoLink to={item.link} key={id}>
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 8 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4C12.62672 12.79006 12.90954 12.75176 1 17"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {item.name}
                </InfoLink>
              ))
            : null}
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Hitta hit!</InfoHeader>
          {footer.companyLocation
            ? footer.companyLocation.map((item, id) => (
                <MenuLink to={item.link} key={id}>
                  {item.mail} <br />
                  {item.postnr + " "}
                  {item.stad}
                </MenuLink>
              ))
            : null}
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Vardagar</InfoHeader>
          {footer.companyOpenhours
            ? footer.companyOpenhours.map((item, id) => (
                <MenuLinkOpenhours to={item.link} key={id}>
                  {item.vardagar}
                </MenuLinkOpenhours>
              ))
            : null}
          <InfoHeader>Helger</InfoHeader>
          {footer.companyOpenhours
            ? footer.companyOpenhours.map((item, id) => (
                <MenuLinkOpenhours to={item.link} key={id}>
                  {item.helger}
                </MenuLinkOpenhours>
              ))
            : null}
        </InfoContainer>
        <InfoContainer>
          <InfoHeader>Kontakta oss!</InfoHeader>
          Vi har öppet dygnet runt alla dagar. Hör av er till{" "}
          <a href="tel:0707972446">070-797 2446</a>
          <InfoText>
            <InfoHeader>Socials</InfoHeader>
            {footer.socialMedia
              ? footer.socialMedia.map((item, id) => (
                  <Image
                    to={item.link}
                    key={id}
                    id="image"
                    alt="client Image"
                    src={urlFor(item.icon).url()}
                  />
                ))
              : null}
          </InfoText>
        </InfoContainer>
      </Container>
      <FooterLogo />
    </>
  )
}

export default Footer
