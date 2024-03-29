import React from 'react'
import { Container } from './style'

const Input = ({
  type,
  onchange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height
}) => {
  return (
    <Container
      onchange={onchange}
      placeholder={placeholder}
      type={type}
      width={width}
      height={height}
      defaultValue={defaultValue}
      name={name}
      value={value}
    />
  )
}

export default Input