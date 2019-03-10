import React from 'react'

const ThingItem = ({ thing }) => {
  const { name, favorites } = thing
  return (
    <li>
      {name}
      <ul>
        {favorites.map(favorite => {
          const { id, user } = favorite
          return <li key={id}>favorited by: {user.username}</li>
        })}
      </ul>
    </li>
  )
}

export default ThingItem
