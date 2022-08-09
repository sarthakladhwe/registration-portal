import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/Items'

function NewUser() {
  const dispatch = useDispatch()

  const [userForm, setUserForm] = React.useState({})

  function inputChange(e) {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  function formSubmit(e) {
    e.preventDefault();
    console.log("New User:", userForm)
  }

  return (
    <div className='newuser-container'>
      <h3>Fill in the details!</h3>
      <form className='newuser-form' onSubmit={formSubmit}>
          <label for="input-name">Name</label>
          <input id="input-name" type="text" name='name' value={userForm.name} onInput={inputChange} />
          <label for="input-emailId">Email Id</label>
          <input id="input-emailId" type="email" name='email' value={userForm.email} onInput={inputChange} />
          <label for="input-uid">UID</label>
          <input id="input-uid" type="text" name='uid' value={userForm.uid} onInput={inputChange} />
          <label for="input-description">Description</label>
          <textarea id="input-description" type="text" name='description' value={userForm.description} onInput={inputChange} />
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default NewUser