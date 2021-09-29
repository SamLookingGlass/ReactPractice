import React from 'react';
import './App.css';
import Navbar from './Navbar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import DisplayMessage from './DisplayMessage'
import BorderedImageFrame from './BorderedImageFrame'
import image from "./japanese-food-1.jpg"
import SumOfTwo from './SumOfTwo';

function App() {
  // const styles = {
  //   backgroundColor: "pink",
  //   height:"50px",
  //   margin: "100px"
  // }

  return (
    <React.Fragment>
      <DisplayMessage message="Hello there!"/>
      {/* <BorderedImageFrame img={image} /> */}
      <SumOfTwo NumberOne={1} NumberTwo={3} />
      {/* <Navbar /> */}
      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
    </ React.Fragment>
  )

}

export default App;
