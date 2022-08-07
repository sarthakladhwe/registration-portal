import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/Items'

function NewUser() {
    const dispatch = useDispatch()
  return (
    <div className='modal-container'>
        <div>
            <h3>Fill in the details!</h3>
            <button>x</button>
        </div>
        <form>
            <label for="input-name">Name</label>
            <input id="input-name" type="text" />
            <label for="input-emailId">Email Id</label>
            <input id="input-emailId" type="email" />
            <label for="input-uid">UID</label>
            <input id="input-uid" type="text" />
            <label for="input-description">Description</label>
            <textarea id="input-description" type="text" />
        </form>
    </div>
  )
}

export default NewUser