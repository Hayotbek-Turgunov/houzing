import React, { Children } from 'react'
import { Container } from './style'

const Button = ({ children, width, type, onClick, height }) => {
  return (
    <Container onClick={onClick} type={type} width={width} height={height} >
      {children || 'Generics button'}
    </Container >
  )
}

export default Button