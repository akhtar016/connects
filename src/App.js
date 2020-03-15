import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';


function App() {

  
return (
  <div>

    <Header></Header>

    {/* {
      people.map(player => <Profile players={player}></Profile>)
    } */}

   
    <Profile></Profile>

    
    



     
    
  </div>
);
}

export default App;
