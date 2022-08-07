import React from 'react'

function Header() {
  return (
    <header className='header'>
        <div>
            <h1 className='logo'>Registration Portal</h1>
        </div>
        <div className='header-btns'>
            <div>
                <select>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <button className='btn btn-cat'>+</button>
            </div>
            <button className='btn'>Add User</button>
        </div>
    </header>
  )
}

export default Header