import React from 'react';
import Users from './components/ContactList'
import './App.css';
import Contact from './components/Contact'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function App() {
  return (
    <div className="App">
      {Users.map ((user, i) => {
        return < Contact user name = {user.name}
        avatar = {user.avatar}
        online = {user.online}
        key = {i}/>})
      }
    </div>
  );
}

export default App;
