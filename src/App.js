import React,{useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'


function App() {

  //const url = 'https://api.nasa.gov/planetary/apod'
 //const apiKey = 'QUZanHUgcIlcKDaaXxxEDIv6gtW2l3upFGJMXbmh'
 const [ nasaData, setNasaData] = useState('')

//`${url}?api_key=${apiKey}`
 useEffect(() => { 
   axios.get('https://api.nasa.gov/planetary/apod?api_key=QUZanHUgcIlcKDaaXxxEDIv6gtW2l3upFGJMXbmh')
  .then(nasaInfo =>{
    console.log(nasaInfo.data)
    return setNasaData(nasaInfo.data)
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
