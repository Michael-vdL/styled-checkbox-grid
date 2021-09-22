import { CardArea } from './components/CardArea'
import { GridArea } from './components/GridArea'
import styled from 'styled-components'

const TestContainer = styled.div`
  display: grid;
  height: 100vh;
  justify-items: center;
  place-items: center;
`

function App() {
  const items = [
    { title: 'Health Care', text: "We offer great healthcare. Because we're not the government." },
    { title: 'Dental Care', text: "We offer really amzaing dental wow it's so good." },
    { title: 'Health Care', text: "We offer great healthcare. Because we're not the government." },
    { title: 'Dental Care', text: "We offer really amzaing dental wow it's so good." },
    { title: 'Health Care', text: "We offer great healthcare. Because we're not the government." },
    { title: 'Dental Care', text: "We offer really amzaing dental wow it's so good." },
    { title: 'Health Care', text: "We offer great healthcare. Because we're not the government." },
    { title: 'Dental Care', text: "We offer really amzaing dental wow it's so good." },
    { title: 'Health Care', text: "We offer great healthcare. Because we're not the government." },
    { title: 'Dental Care', text: "We offer really amzaing dental wow it's so good." },
  ]

  return (
    <TestContainer>
      <GridArea>
        {items.map((item, i) => (
          <CardArea key={i} {...item}></CardArea>
        ))}
      </GridArea>
    </TestContainer>
  )
}

export default App
