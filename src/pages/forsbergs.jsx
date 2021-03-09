import React, { useState } from 'react'
import styled from 'styled-components'
import sanityClient from '../Client'

const Container = styled.div`
  height: 125vh;
  background-color: black;
  padding-bottom: 15px;
`

const ProjectCont = styled.div`
  height: auto;
  width: 35%;
  padding: 0 12%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 70%;
  }
`

const TitleTitle = styled.div`
  height: 150px;
  width: 150px;
`

const Title = styled.h2`
  color: white;
  text-align: left;
  padding: 0 5px;

  :nth-child(3) {
    text-align: right;
  }
  :nth-child(5) {
    text-align: right;
  }
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

const Iframe = styled.iframe`
  height: 95%;
  width: 100%;
`

const Desc = styled.p`
  width: auto;
  color: white;
  justify-content: center;
`

const TitleImage = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)

  const [forsbergs, setForsbergs] = useState('')

  const forsbergsQuery = `*[_type == "forsbergs"]`

  sanityClient.fetch(forsbergsQuery).then((forsbergs) => {
    const forsbergsArray = []
    forsbergs.forEach((forsbergs) => {
      forsbergsArray.push(forsbergs)
    })
    setForsbergs(forsbergsArray)
  })

  return (
    <Container>
      <br />
      <TitleTitle></TitleTitle>
      <TitleImage src="/forsbergs.jpg"></TitleImage>
      {forsbergs.length
        ? forsbergs.map((forsbergsItem, id) => (
            <ProjectCont key={id}>
              <Title>{forsbergsItem.title}</Title>
              <Desc>{forsbergsItem.tagline}</Desc>
              <Button onClick={() => setPdf(true)}>Öppna projekt</Button>
              {pdf ? (
                <Modal>
                  <ModalContent>
                    <ButtonClose onClick={() => setPdf(false)}>
                      Tillbaka
                    </ButtonClose>
                    {() => {
                      if (pdf === forsbergs.length[0]) {
                        <Iframe allowfullscreen src='/pdf/ta_språnget.pdf' />
                      } else if (pdf === forsbergs.length[1]) {
                        <Iframe
                          allowfullscreen
                          src='/pdf/babyblue_kampanj.pdf'
                        />
                      } else {
                        <Iframe
                          allowfullscreen
                          src='/pdf/Creative-task-portfolio.pdf'
                        />
                      }
                    }}
                  </ModalContent>
                </Modal>
              ) : undefined}
            </ProjectCont>
          ))
        : undefined}
    </Container>
  )
}

export default Forsbergs
