import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Security } from '@okta/okta-react'
import { OktaAuth } from '@okta/okta-auth-js'

import { LoginMenu } from './components/oktaLogin/LoginMenu'
import { CheckboxDemo } from './views/CheckboxDemo'
import { config } from './okta.config'

const oktaAuth = new OktaAuth(config)

const TestContainer = styled.div`
  display: grid;
  height: 100vh;
  justify-items: center;
  place-items: center;
`

function App() {
  return (
    <Router>
      <TestContainer>
        <LoginMenu></LoginMenu>
      </TestContainer>
      <Security oktaAuth={oktaAuth}>
        <TestContainer>
          <CheckboxDemo></CheckboxDemo>
        </TestContainer>
      </Security>
    </Router>
  )
}

export default App
