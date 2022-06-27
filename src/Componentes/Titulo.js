import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
background: -webkit-linear-gradient(120deg,
  #EA7652 0%,
  #E08CBF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 3rem;text-shadow: 0px 0px 40px rgba(224, 140, 191, 0.2);
`

const App = styled.p`
font-size: 1rem;
position: absolute;
top: -0.5rem;
right:0
`

const Til = styled.header`
position: relative;
display: inline-block
`


const Titulo = () => {
  return (
    <Til className='titulo'>
      <H1>Pomodoro</H1>
      <App>App</App>
    </Til>
  )
}

export default Titulo