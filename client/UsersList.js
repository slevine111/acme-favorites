import React from 'react'
import UserItem from './UserItem'

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UsersList
