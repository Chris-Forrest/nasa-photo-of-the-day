import React,{useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'





function App() {

  //const url = 'https://api.nasa.gov/planetary/apod'
 //const apiKey = 'ckNxsCaNbWvDIeJnqcpdPOcwdpw7ax1rp3xz4fdD'


 useEffect(() => { 
axios.get(`https://api.nasa.gov/planetary/apod?ckNxsCaNbWvDIeJnqcpdPOcwdpw7ax1rp3xZ4fdD`)
  .then(nasaInfo =>{
    console.log(nasaInfo.data)
  })
  .catch( err => {
    console.log(err.message)
  })
 },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
