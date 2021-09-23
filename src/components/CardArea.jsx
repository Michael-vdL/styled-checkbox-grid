import React, { useState } from 'react'
import styled from 'styled-components'
import { CheckIcon } from '@heroicons/react/outline'

const ContainerDiv = styled.div`
  width: auto;
  max-width: 20em;
  min-width: 5em;
  display: flex;
  flex-wrap: wrap;
`

const TempCheckBox = styled.div`
  width: 1em;
  height: 1em;
  margin-top: 1em;
  border: 3px solid #413535;
  border-radius: 3px;
`

const HeaderText = styled.p`
  margin-top: 0.6em;
  margin-left: 0.5em;
  margin-bottom: 0;
  margin-right: 0;
  font-weight: 600;
  font-size: larger;
  color: #0055a3;
`
const StandardText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: medium;
  color: #6c5f5f;
  transition: opacity 0.4s ease-in;
`

const Icon = styled(CheckIcon)`
  height: 2.5em;
  width: 2.5em;
  color: orange;
  transform: translate(-0.45em, -1.1em);
`

export const CardArea = ({ title, text }) => {
  const [checked, setChecked] = useState(false)

  return (
    <ContainerDiv onMouseEnter={() => setChecked(true)}>
      <TempCheckBox>{checked && <Icon></Icon>}</TempCheckBox>
      <HeaderText>{title}</HeaderText>
      {checked ? (
        <StandardText>{text}</StandardText>
      ) : (
        <StandardText style={{ opacity: 0 }}>{text}</StandardText>
      )}
    </ContainerDiv>
  )
}
