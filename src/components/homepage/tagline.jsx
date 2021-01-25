import React, { useEffect, useState } from "react"
import styled from "styled-components"
import imageUrlBuilder from "@sanity/image-url"
import sanityClient from "../../Client"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Container = styled.div`
  width: 750px;
  height: 750px;
  margin: 25vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin: 0 0 25vh 0;
  }
`
const InnerContainer = styled.div`
`
const Title = styled.h2`
  position: absolute;
  padding-bottom: 70px;

  @media screen and (max-width: 700px) {
    font-size: 5vw;
  }
`
const TaglineText = styled.h3`
  position: absolute;
  margin-top: 20px;

  @media screen and (max-width: 700px) {
    font-size: 3.5vw;
    margin-top: 17%;
  }
`
const TaglineImage = styled.img`
  width: 100px;
  height: auto;
  top: 0;
  left: 0;

  @media screen and (max-width: 700px) {
    width: 90vw;
  }
`

const Tagline = () => {
  const [tagline, setTagline] = useState("")

  useEffect(() => {
    const taglineQuery = `*[_type == "tagline"]{
			image, title, tagline
		}`
    sanityClient.fetch(taglineQuery).then((tagline) => {
      tagline.forEach((tagline) => {
        setTagline(tagline)
      })
    })

    return
  }, [])

  
  return (
    <Container>
      <InnerContainer>
        <TaglineImage alt="hero image" src={urlFor(tagline.image).url()} />
      </InnerContainer>
      <Title>{tagline.title}</Title>
      <TaglineText>{tagline.tagline}</TaglineText>
    </Container>
  )
}

export default Tagline
