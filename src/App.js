// import logo from './logo.svg';
import React,{useState} from 'react';
import Users from './component/Users';
import Dropdown from './component/Dropdown';
//import Table from './component/Table';
 import Popup from './component/Popup';

import './App.css';

function App() {
  const [selected, setSelected] = useState("Choose One");
  
  return (
    <div className="App">
     
      <Dropdown selected={selected} setSelected={setSelected}/>
      <Users  selected={selected}/>
       <Popup  /> 
      {/* <Table/> */}
      
    </div>
  );
}

export default App;
