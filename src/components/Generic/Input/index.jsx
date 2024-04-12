import React, { forwardRef } from 'react'
import { Container, Icon, Wrapper } from './style'


const Input = forwardRef(({
  type,
  onchange,
  placeholder,
  name,
  value,
  defaultValue,
  width,
  height,
  icon,
}, ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        ref={ref}
        icon={icon}
        onchange={onchange}
        placeholder={placeholder}
        type={type}
        width={width}
        height={height}
        defaultValue={defaultValue}
        name={name}
        value={value}
      />
    </Wrapper>

  )
})

export default Input