import React, {useEffect, useState} from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sanityClient from '../Client'
import styled from 'styled-components'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
	return builder.image(source)
}

const HomeCarousel = styled(Carousel)`
  height: 100vh;
  width: 100%;
  font-size: 40px;
  overflow: hidden;

.slide iframe {
    margin: 0 !important;
    width: 100% !important;
    min-height: -webkit-fill-available;
  }
  .carousel-slider .control-arrow {
    padding: 20px !important;
  }
  @media only screen and (max-width: 800px) {
  }

`

const Title = styled.p`
  font-size: 32px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    width: 74vw;
  }
`

const HomeContainer = styled.div`
position: relative;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 700px) {
    padding-bottom: 0;
  }
  .carousel.carousel-slider .control-arrow:hover  {
    }
`

const HeaderImage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100vh;
	position: relative;
  background-color: black;
	@media only screen and (max-width: 800px) {

	}
`

const Thumbnail = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
  opacity: 0.6;
	left: 0;
	top: 0;
	z-index: 0;
	@media only screen and (max-width: 800px) {
	}
`

const ContCont = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
height: 100%;
width: 100%;
overflow-x: hidden;
`

const Sliderboy = () => {
  const [tagline, setTagline] = useState("")
  
  useEffect(() => {
      const taglineQuery = `*[_type == "tagline"]`
      sanityClient.fetch(taglineQuery).then((tagline) => {
        const taglineArray = []
        tagline.forEach((tagline) => {
          taglineArray.push(tagline)
        })
        setTagline(taglineArray)
      })
      return
    }, [])

    const settings = {
        autoPlay: true,
        showArrows: true,
        showThumbs: true,
        interval: 10000,
        infiniteLoop: true,
        showStatus: false,
        transitionTime: 1000,
      }
      
      return (
        <ContCont>
        <HomeContainer id="Home">
        {tagline.length > 0 ? (
            <HomeCarousel {...settings}>
              {tagline.map((taglineItem, idx) => {
                return(
                    <>
                <HeaderImage>
                  <Thumbnail 
                    style={{ backgroundImage: `url(${urlFor(taglineItem.image).quality(80).auto('format').url()})` }}
                    key={idx}
                    slider={taglineItem}
                  />
                  <Title>{taglineItem.title}</Title>
                </HeaderImage>
                </>
              )})}
            </HomeCarousel>
        )
        : null }
        </HomeContainer>
        </ContCont>
    )
}

export default Sliderboy
