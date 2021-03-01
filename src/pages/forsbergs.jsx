import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  background-color: black;
`

const Button = styled.button`
  margin-top: 25vh;
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

const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)

  return (
    <Container>
      <Button onClick={() => setPdf(true)}>jakobs portfolio</Button>
      {pdf ? (
        <Modal>
          <ModalContent>
            <ButtonClose onClick={() => setPdf(false)}>tillbaka</ButtonClose>
            <Iframe allowfullscreen src="/pdf/ta_språnget.pdf" />
          </ModalContent>
        </Modal>
      ) : undefined}
    </Container>
  )
}

export default Forsbergs
