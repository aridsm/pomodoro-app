import React from 'react'

const ItemAlarme = ({ name }) => {
  return (
    <li>
      <button>
        <p>{name}</p>
        <audio src=""></audio>
      </button>
    </li>
  )
}

export default ItemAlarme