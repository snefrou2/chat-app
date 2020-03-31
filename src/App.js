import React from 'react';

import './App.css';
import Contact from './components/Contact'

const ariel = {
  name : "Arielle Sirène",
  avatar : 'https://media.cultura.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/a/canevas-12x12-ariel-8435282505738_1.jpg?t=1509811988',
  online : true
}

const alice = {
  name : "Alice Merveilles",
  avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxCj65lc6vi7_mBxXesuUsZ945SR7K0AbfjbwEKB1WC1L1rvp6&usqp=CAU',
  online : false
}

const aladin = {
  name : "Aladin Voleur",
  avatar : 'https://4.bp.blogspot.com/-Ig8G3WY-6Js/VwEjbCoqvtI/AAAAAAAAAAM/ZO4gdL6rkbUPuMOsQKLY_iTpBNNqTasjQ/s320/aladin%2B3.jpg',
  online : true
}
function App() {
  return (
    <div className="App">
      <Contact user={ariel}/>
      <Contact user={alice}/>
      <Contact user={aladin}/>
    </div>
  );
}

export default App;
