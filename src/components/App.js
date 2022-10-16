import React from 'react'
import Branner from './Branner';
import Navbar from './Navbar';
import Card from './Card'
import Achat from './Achat';
import Signup from './Signup';
import Login from './Login';
import Inscript from './inscript';
function App() {
  return (

  <React.Fragment>

    <Branner/>
    <Navbar/>
    <Card/>
    <Signup/>
    <Achat/>
    <Login/>
    <Inscript/>
  </React.Fragment>

   )
}

export default App;
