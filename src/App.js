// import logo from './logo.svg';
import React,{useState} from 'react';
import Users from './component/Users';
import Dropdown from './component/Dropdown';


import './App.css';

function App() {
  const [selected, setSelected] = useState("Choose One");
  
  return (
    <div className="App">
     
      <Dropdown selected={selected} setSelected={setSelected}/>
      <Users  selected={selected}/>
      
    </div>
  );
}

export default App;
