import React from 'react'
import { CardArea } from '../components/CardArea'
import { GridArea } from '../components/GridArea'

export const CheckboxDemo = () => {
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
    <div>
      <GridArea>
        {items.map((item, i) => (
          <CardArea key={i} {...item}></CardArea>
        ))}
      </GridArea>
    </div>
  )
}
