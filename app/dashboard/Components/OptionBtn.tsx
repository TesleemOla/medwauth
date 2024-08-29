"use client"
import React, { MouseEventHandler } from 'react'

interface OptionBtnType{
    handleClick: MouseEventHandler<HTMLButtonElement>
    handleOptions: MouseEventHandler<HTMLButtonElement>
}

const OptionBtn = ({ handleClick, handleOptions}: OptionBtnType) => {
  return (
    <button onClick={handleClick} onMouseOver={handleOptions}>
        ...
    </button>
  )
}

export default OptionBtn