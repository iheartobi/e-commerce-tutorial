import React from 'react';
import './App.css';
import Homepage from './components/homepage.components.jsx'
import { Route } from 'react-router-dom'

function App() {
  return (
   <div>
     <Route exact path='/' component={Homepage}/>
   </div>
  );
}

export default App;
