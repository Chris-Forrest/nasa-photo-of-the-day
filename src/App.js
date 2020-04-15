import React,{useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

const url = 'https://api.nasa.gov/#apod'
const api_key = 'ckNxsCaNbWvDIeJnqcpdPOcwdpw7axlrp3xz4fdD'

axios.get(`${url}?api_key=${api_key}`)
.then(nasaData =>{
  return (nasaData)
})
.catch( err => {
  debugger
})


function App() {
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
