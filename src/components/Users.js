import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'

function Users() {

  const userList = useSelector((state) => state.users.value )

  const allUsers = userList.map(user => <User />)

  return (
    <div className='users'>
      {allUsers}
    </div>
  )
}

export default Users