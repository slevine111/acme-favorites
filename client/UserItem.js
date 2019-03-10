import React from 'react'

const UserItem = ({ user }) => {
  const { username, favorites } = user
  return (
    <li>
      {username}
      <ul>
        {favorites.map(favorite => {
          const { rank, id, thing } = favorite
          return (
            <li key={id}>
              {thing.name} (Ranked: {rank})
            </li>
          )
        })}
      </ul>
    </li>
  )
}

export default UserItem
