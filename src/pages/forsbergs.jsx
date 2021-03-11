import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'

const ContCont = styled.div`
  background-color: black;
`

const Container = styled(motion.div)`
  height: 125vh;
  padding-left: 140px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`

const ProjectCont = styled.div`
  height: 92%;
  width: 100%;
  margin-top: 10vh;
  background-color: #131313;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid white;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 70%;
    border: none;
    margin-top: 1vh;
  }
`

const Title = styled.h2`
  height: 25px;
  color: white;
  text-align: left;
  padding: 0 5px;
`
const Title2 = styled.h2`
  height: 25px; 
  color: white;
  text-align: right;
  padding: 0 5px;

`

const Button = styled.button`
  padding: 2px;
`

const ButtonClose = styled.button`
  float: right;
  width: 4.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: lightgray;

  :hover {
    background-color: darkgray;
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
`
const ModalContent = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 0.5rem 1rem;
  width: 65%;
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
  color: white;
  justify-content: center;
`

const Desc2 = styled.p`
  width: 90%;
  color: white;
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
  const [forsbergs, setForsbergs] = useState('')

  useEffect(() => {
    const forsbergsQuery = `*[_type == "forsbergs"]{
			title, tagline, description, image
		  }`
    sanityClient.fetch(forsbergsQuery).then((forsbergs) => {
      const forsbergsArray = []
      forsbergs.forEach((forsbergs) => {
        forsbergsArray.push(forsbergs)
      })
      setForsbergs(forsbergsArray)
    })
    return
  }, [])

  return (
    <ContCont>
    <TitleImage src="/forsbergs.jpg"></TitleImage>
      {forsbergs ? (
    <Container
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
            <ProjectCont>
              <Title>{forsbergs[0].title}</Title>
              <Line />
              <Desc>{forsbergs[0].tagline}</Desc>
              <Button onClick={() => setPdf(true)}>Öppna projekt</Button>
              {pdf ? (
                <Modal>
                  <ModalContent>
                    <ButtonClose onClick={() => setPdf(false)}>
                      Tillbaka
                    </ButtonClose>
                        <Iframe allowfullscreen src='/pdf/ta_språnget.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont>
              <Title2>{forsbergs[1].title}</Title2>
              <Line />
              <Desc2>{forsbergs[1].tagline}</Desc2>
              <Button onClick={() => setPdf1(true)}>Öppna projekt</Button>
              {pdf1 ? (
                <Modal>
                  <ModalContent>
                    <ButtonClose onClick={() => setPdf1(false)}>
                      Tillbaka
                    </ButtonClose>
                    <Iframe allowfullscreen src='/pdf/Creative-task-portfolio.pdf' />                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
            <ProjectCont>
              <Title>{forsbergs[2].title}</Title>
              <Line />
              <Desc>{forsbergs[2].tagline}</Desc>
              <Button onClick={() => setPdf2(true)}>Öppna projekt</Button>
              {pdf2 ? (
                <Modal>
                  <ModalContent>
                    <ButtonClose onClick={() => setPdf2(false)}>
                      Tillbaka
                    </ButtonClose>
                        <Iframe allowfullscreen src='/pdf/babyblue_kampanj.pdf' />
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
  </Container>
    ): null}
  </ContCont>
  )
}

export default Forsbergs
