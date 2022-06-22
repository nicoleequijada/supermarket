import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../../pages/Home.jsx";
import Menu from "../../pages/Menu.jsx";
import Chef from "../../pages/Chef.jsx";

function App(){
  return(
    <div className='App'>
      <h1>React router</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Chef' element={<Chef/>}/>
      </Routes>
    </div>
  );
}

  
  export default App;
