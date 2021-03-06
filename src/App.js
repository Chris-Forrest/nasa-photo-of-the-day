import React,{useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'
import styled from 'styled-components'


function App() {

  //const url = 'https://api.nasa.gov/planetary/apod'
 //const apiKey = 'QUZanHUgcIlcKDaaXxxEDIv6gtW2l3upFGJMXbmh'
 const [ nasaData, setNasaData] = useState('')

//`${url}?api_key=${apiKey}`
 useEffect(() => { 
   axios.get('https://api.nasa.gov/planetary/apod?api_key=QUZanHUgcIlcKDaaXxxEDIv6gtW2l3upFGJMXbmh')
  .then(nasaInfo =>{
    console.log(nasaInfo.data)
    setNasaData(nasaInfo.data)
  })
  .catch( err => {
    console.log(err.message)
  })
 },[])

  return (
    <Body className="App">
    

      {nasaData && <Header imageTitle={nasaData.title} />}

      {nasaData && <MainContent  imageURL={nasaData.url} imageExplanation={nasaData.explanation}/>} 

      {nasaData && <Footer copyright={nasaData.copyright} date={nasaData.date} hdUrl={nasaData.hdurl} />}
      
      </Body>
);
}

const Body = styled.div `
background-color:#163763

`


export default App;
