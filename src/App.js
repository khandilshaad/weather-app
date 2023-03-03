import React from 'react';
import './App.css';
import Tempapp from './components/tempapp';
import Image from './components/image/nature.jpg';
function App() {
  return (
    <>
     <Tempapp/> 
     <img src={Image} alt = "weather_image" height="700px" width='100%' marginBottom="20px"/> 
     
     </>
  );
}

export default App;
