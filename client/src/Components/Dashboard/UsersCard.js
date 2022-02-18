import React from 'react'

const UsersCard = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.lastName}</h1>
        <h1>{user.email}</h1>
        <h1>{user.isAdmin}</h1>
    </div>
  )
}

export default UsersCard