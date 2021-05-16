import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addNewUserHandler = usersData => {
    usersData.id = users.length + 1;

    setUsers((prevState) => {
      return [usersData, ...prevState];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
