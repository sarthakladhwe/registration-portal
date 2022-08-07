import React from 'react'

function NewUser() {
  return (
    <div className='new-user-container'>
        <h3>Fill down the details!</h3>
        <form>
            <label for="input-name">Name</label>
            <input id="input-name" type="text" />
            <label for="input-emailid">Email Id</label>
            <input id="input-emailid" type="email" />
        </form>
    </div>
  )
}

export default NewUser