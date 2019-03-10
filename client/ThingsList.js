import React from 'react'
import ThingItem from './ThingItem'

const ThingssList = ({ things }) => {
  return (
    <ul>
      {things.map(thing => (
        <ThingItem key={thing.id} thing={thing} />
      ))}
    </ul>
  )
}

export default ThingssList
