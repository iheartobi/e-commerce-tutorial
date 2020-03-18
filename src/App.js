import React from 'react';
import './App.css';
<<<<<<< HEAD
import Homepage from './components/homepage.components.jsx'
import { Route } from 'react-router-dom'
=======
import Homepage from './pages/homepage/homepage.components.jsx'
>>>>>>> 6bf49fe826b0f2d4ca5ad814744a00ba59095037

function App() {
  return (
   <div>
     <Route exact path='/' component={Homepage}/>
   </div>
  );
}

export default App;
