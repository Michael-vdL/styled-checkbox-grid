import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr 1fr;
  width: 25em;
  height: 35em;
  background-color: darkgray;
  border-radius: 6px;
`

const LoginTitle = styled.p`
  align-content: center;
  margin: 0;
  padding: 0;
  font-size: x-large;
  color: white;
`

const LoginButton = ({ className, children }) => {
  return <button className={className}>{children}</button>
}

const StyledLoginButton = styled(LoginButton)`
  display: block;
  height: 3em;
  width: 15em;
  background-color: lightblue;
  border-radius: 6px;
  border: 4px solid coral;
`

export const LoginMenu = () => {
  return (
    <MenuContainer>
      <LoginTitle>Hello World</LoginTitle>
      <StyledLoginButton>This be an auth Button</StyledLoginButton>
    </MenuContainer>
  )
}
