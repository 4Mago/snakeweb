import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'

const ContCont = styled.div`
  background-color: black;
  height: auto;
`

const Container = styled(motion.div)`
  height: 100%;
  padding-left: 200px;
  padding-right: 140px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 10vh;


  @media screen and (min-width: 1400px) {
  height: 140vh;
  grid-gap: 140px;
  }
  @media screen and (max-width: 500px) {
  height: 140vh;
  padding-right: 15px;
  }
`

const ProjectCont = styled.div`
  height: 350px;
  width: 100%;
  min-width: 280px;
  background-color: #131313;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid white;
  transition: 1s;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #8e8e8e;
    color: black;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
    max-height: 280px;
    min-height: 90%;
    padding: 2px;
    width: 70%;
    margin-top: 1vh;
  }
`

const Title = styled.h2`
  height: 25px;
  text-align: left;
  padding: 0 5px;
`
const Title2 = styled.h2`
  height: 25px; 
  text-align: right;
  padding: 0 5px;

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
`

const Desc2 = styled.p`
  width: 90%;
  justify-content: center;
`

const TitleImage = styled.img`
  width: 150px;
  height: auto;
`



const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)
  const [pdf1, setPdf1] = useState(false)
  const [pdf2, setPdf2] = useState(false)
  const [pdf3, setPdf3] = useState(false)
  const [forsbergs, setForsbergs] = useState('')

  useEffect(() => {
    const forsbergsQuery = `*[_type == "forsbergs"]{
      title, tagline, description, image
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
    <TitleImage src="/forsbergs.jpg"></TitleImage>
      {forsbergs ? (
    <Container
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
            <ProjectCont onClick={() => setPdf(prevState => !prevState)}>
              <Title>{forsbergs[0].title}</Title>
              <Line />
              <Desc>{forsbergs[0].tagline}</Desc>
              {pdf ? (
                <Modal>
                  <ModalContent>
                        <Iframe allowfullscreen src='/pdf/ta_språnget.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf1(prevState => (!prevState))}>
              <Title2>{forsbergs[1].title}</Title2>
              <Line />
              <Desc2>{forsbergs[1].tagline}</Desc2>
              {pdf1 ? (
                <Modal>
                  <ModalContent>
                    <Iframe allowfullscreen src='/pdf/Creative-task-portfolio.pdf' />                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf2(prevState => (!prevState))}>
              <Title>{forsbergs[2].title}</Title>
              <Line />
              <Desc>{forsbergs[2].tagline}</Desc>
              {pdf2 ? (
                <Modal>
                  <ModalContent>
                        <Iframe allowfullscreen src='/pdf/babyblue_kampanj.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont  onClick={() => setPdf3(prevState => (!prevState))}>
              <Title>{forsbergs[3].title}</Title>
              <Line />
              <Desc>{forsbergs[3].tagline}</Desc>
              {pdf3 ? (
                <Modal>
                  <ModalContent>
                        <Iframe allowfullscreen src='/pdf/Ett-steg-i-taget.pdf' />
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
