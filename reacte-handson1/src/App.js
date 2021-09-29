import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import SectionOne from './SectionOne.js'
import SectionTwo from './SectionTwo.js'

function App() {
  const styles = {
    backgroundColor: "pink",
    height:"50px",
    margin: "100px"
  }

  return (
    <React.Fragment>
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </ React.Fragment>
  )

}

export default App;
