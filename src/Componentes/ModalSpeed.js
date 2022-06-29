import React from 'react'

const ModalSpeed = () => {
  return (
    <section>
      <h2>Velocidade</h2>
      <InputRange label='Velocidade' name='velocidade' value='1000' step='10' min='0' valueRange='25:00' />
    </section>
  )
}

export default ModalSpeed