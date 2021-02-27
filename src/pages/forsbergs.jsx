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

const Iframe = styled.iframe``

const Forsbergs = () => {
  const [pdf, setPdf] = useState(false)

  return (
    <Container>
      <Button onClick={() => setPdf(true)}>jakobs portfolio</Button>

      {pdf ? (
        <Iframe src="/pdf/ta_spranget.pdf" height="100vh" width="70vw" />
      ) : undefined}
    </Container>
  )
}

export default Forsbergs
