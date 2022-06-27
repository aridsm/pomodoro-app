import React from 'react'
import styled from 'styled-components'

const ContainerBotao = styled.p`
position: relative;
margin: 0 .5rem
`
const Toggle = styled.p`
position: absolute;
bottom: -2.5rem;
left: calc(50% - 1rem);
background: #2C3038;
box-shadow: 0 0 10px 0 #212328;
padding: .5rem 0.8rem;
border-radius: 0.2rem;
opacity:0;
&::before {
  content: '';
  display:block;
  position:absolute;
  top:-10px;
  border:1px solid red;
  width: 0;
  height:0;
  border: 5px solid transparent;
  border-bottom-color: #2C3038
}
`

const Botao = ({ Icon, name }) => {

  const [isToggleVisible, setIsToggleVisible] = React.useState(false)

  return (
    <ContainerBotao>
      <button><Icon /></button>
      <Toggle visible={isToggleVisible}>{name}</Toggle>
    </ContainerBotao>
  )
}

export default Botao