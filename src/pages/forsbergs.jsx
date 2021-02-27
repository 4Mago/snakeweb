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

const Iframe = styled.button``

const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)

  return (
    <Container>
      <Button onClick={() => setPdf(true)}>jakobs portfolio</Button>

      {pdf ? (
        <Iframe src="/pdf/ta_språnget.pdf" height="100%" width="70%" />
      ) : undefined}
    </Container>
  )
}

export default Forsbergs
