import React from 'react'
import UserItem from './UserItem'

const UsersList = ({ users }) => {
  console.log('in user list')
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UsersList
