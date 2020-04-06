import React from 'react';
import Users from './ContactList';
import Contact from './Contact';

function List() {
  return (
    <div className="App">
     {Users.map ((user, i) => {
    return < Contact user 
    name = {user.name}
    avatar = {user.avatar}
    online = {user.online}
    key = {i}/>})
  }
    </div>
  );
}

  export default List;