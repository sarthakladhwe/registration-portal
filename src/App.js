import React from 'react'

import Header from "./components/Header";
import NewUser from './components/NewUser';
import Users from "./components/Users";

function App() {

  const [openUserModal, setOpenUserModal] = React.useState(false)

  function openModal() {
      setOpenUserModal(prev => !prev)
  }

  return (
    <div>
      <Header openModal={openModal} />
      {openUserModal && <NewUser /> }
      <Users />
    </div>
  );
}

export default App;
