import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import imageUrlBuilder from "@sanity/image-url"
import styled from 'styled-components'
import sanityClient from '../Client'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const ContCont = styled.div`
  background-color: black;
  height: auto;
  padding-bottom: 15px;
`

const Container = styled(motion.div)`
  height: 100%;
  padding-left: 200px;
  padding-right: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 15px;
  padding-top: 16vh;

  @media screen and (min-width: 1400px) {
  grid-gap: 70px;
  }
  @media screen and (max-width: 500px) {
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  }
`

const ProjectContPrio = styled.div`
  width: 90%;
  min-width: 300px;
  min-height: 400px;
  border: 1px solid white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 1s;
  color: white;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  padding: 0 25px;
  text-align: center;
  position: relative;



  &:hover {
    box-shadow: 0 0 0 0 #fbfcfd, 0 0 1.5rem 0 #fbfcfd;
    }

  @media screen and (max-width: 950px) {
    min-height: 350px;
      padding-top: 0;
      background-size: cover;
      background-position: center;
      height: 350px;

      &:hover {
    box-shadow: 0 0 0 0 #fbfcfd, 0 0 12px 0 #fbfcfd;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    max-height: 350px;
    min-height: 300px;
    padding: 2px;
    width: 70%;
    margin-top: 1vh;  
  }
`

const Button = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 20px;
  border-radius: 20px;
  background-color: #10632d;
  padding: 5px 15px;
  
  &:hover {
    cursor: pointer;
  }
`
const Button1 = styled.div`
  position: absolute;
  top: 10px;
  left: 100px;
  height: 20px;
  border-radius: 20px;
  background-color: #10632d;
  padding: 5px 15px;
`

const PrioContent = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`

const LinePrio = styled.div`
  height: 1px;
  width: 90%;
  padding: 0;
  margin: 5px;
  background-color: white;
`

const ProjectCont = styled.div`
  height: 300px;
  width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  padding-top: 60px;
  align-items: center;
  border: 1px solid white;
  transition: 1s;
  color: white;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    box-shadow: 0 0 0 0 #fbfcfd, 0 0 1.5rem 0 #fbfcfd;
    }

  @media screen and (max-width: 950px) {
      padding-top: 0;
      background-size: cover;
      background-position: center;
      height: 350px;

      &:hover {
    box-shadow: 0 0 0 0 #fbfcfd, 0 0 12px 0 #fbfcfd;
    }
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    max-height: 280px;
    min-height: 250px;
    padding: 2px;
    width: 70%;
    margin-top: 1vh;  
  }
`

const Title = styled.h2`
  height: 25px;
  text-align: left;
  padding: 0 5px;

  @media screen and (max-width: 500px) {
  font-size: 40px;
  }
`
const Title3 = styled.h2`
  text-align: center;
  padding: 0 5px;

  @media screen and (max-width: 500px) {
  font-size: 35px;
  }
`

const Title2 = styled.h2`
  height: 25px; 
  text-align: right;
  padding: 0 5px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`


const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  z-index: 999;
`
const ModalContent = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 0.5rem 1rem;
  width: 75%;
  height: 100%;
  border-radius: 0.5rem;
`

const Line = styled.div`
  height: 1px;
  width: 60%;
  padding: 0;
  margin: 5px;
  background-color: white;
`

const Iframe = styled.iframe`
  height: 95%;
  width: 100%;
`

const Desc = styled.p`
  width: 90%;
  justify-content: center;
  max-width: 600px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-style: bold;
  }
`

const Desc2 = styled.p`
  width: 90%;
  justify-content: center;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-style: bold;
  }
`

const Img = styled.img`
  height: 95%;
  width: auto;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`


const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)
  const [pdf1, setPdf1] = useState(false)
  const [pdf2, setPdf2] = useState(false)
  const [pdf3, setPdf3] = useState(false)
  const [pdf4, setPdf4] = useState(false)
  const [pdf5, setPdf5] = useState(false)
  const [pdf6, setPdf6] = useState(false)
  const [forsbergs, setForsbergs] = useState('')

  useEffect(() => {
    const forsbergsQuery = `*[_type == "forsbergs"]{
      title, tagline, description, logo
      }`
      if(!forsbergs.length) {
        console.log('fetching')
        sanityClient.fetch(forsbergsQuery).then((forsbergs) => {
          const forsbergsArray = []
          forsbergs.forEach((forsbergs) => {
            forsbergsArray.push(forsbergs)
          })
          setForsbergs(forsbergsArray)
        })
      }
    return
  }, [forsbergs.length])
 
  return (
    forsbergs ?
    <ContCont>
      {forsbergs ? (
    <Container
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
            <ProjectContPrio onClick={() => setPdf6(prevState => !prevState)}
              style={{ backgroundImage: `url(${urlFor(forsbergs[7].logo).quality(80).auto('format').url()})` }}
            >
              <Button>Hottest</Button>
              <Button1>Newest</Button1>
              <PrioContent>
              <Title>{forsbergs[7].title}</Title>
              <LinePrio />
              <Desc>{forsbergs[7].tagline}</Desc>
              </PrioContent>
              {pdf6 ? (
                <Modal>
                  <ModalContent>
                        <Iframe allowfullscreen src='/pdf/Budweiser.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectContPrio>
            <ProjectCont onClick={() => setPdf(prevState => !prevState)}
              style={{ backgroundImage: `url(${urlFor(forsbergs[4].logo).quality(80).auto('format').url()})` }}
            >
              <Title>{forsbergs[4].title}</Title>
              <Line />
              <Desc>{forsbergs[4].tagline}</Desc>
              {pdf ? (
                <Modal>
                  <ModalContent>
                        <Iframe allowfullscreen src='/pdf/MALVA.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf1(prevState => (!prevState))}
              style={{ backgroundImage: `url(${urlFor(forsbergs[1].logo).quality(80).auto('format').url()})` }}
            >
              <Title>{forsbergs[1].title}</Title>
              <Line />
              <Desc>{forsbergs[1].tagline}</Desc>
              {pdf1 ? (
                <Modal>
                  <ModalContent>
                    <Iframe allowfullscreen src='/pdf/ta_språnget.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf2(prevState => (!prevState))}
              style={{ backgroundImage: `url(${urlFor(forsbergs[2].logo).quality(80).auto('format').url()})` }}
            >
              <Title2>{forsbergs[2].title}</Title2>
              <Line />
              <Desc2>{forsbergs[2].tagline}</Desc2>
              {pdf2 ? (
                <Modal>
                  <ModalContent>
                  <Iframe allowfullscreen src='/pdf/Creative-task-portfolio.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf3(prevState => (!prevState))}
              style={{ backgroundImage: `url(${urlFor(forsbergs[3].logo).quality(80).auto('format').url()})` }}
            >
              <Title2>{forsbergs[3].title}</Title2>
              <Line />
              <Desc>{forsbergs[3].tagline}</Desc>
              {pdf3 ? (
                <Modal>
                  <ModalContent>
                  <Iframe allowfullscreen src='/pdf/babyblue_kampanj.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf4(prevState => (!prevState))}
              style={{ backgroundImage: `url(${urlFor(forsbergs[5].logo).quality(80).auto('format').url()})` }}
            >
              <Title3>{forsbergs[5].title}</Title3>
              <Line />
              <Desc>{forsbergs[5].tagline}</Desc>
              {pdf4 ? (
                <Modal>
                  <ModalContent>
                  <Iframe allowfullscreen src='/pdf/Ett-steg-i-taget.pdf' />                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf5(prevState => (!prevState))}
              style={{ backgroundImage: `url(${urlFor(forsbergs[6].logo).quality(80).auto('format').url()})` }}
            >
              <Title3>{forsbergs[6].title}</Title3>
              <Line />
              <Desc>{forsbergs[6].tagline}</Desc>
              {pdf5 ? (
                <Modal>
                  <ModalContent>
                        <Img allowfullscreen src={urlFor(forsbergs[0].logo).url()} />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
  </Container>
    ): null}
  </ContCont>
  : null
  )
}

export default Forsbergs
