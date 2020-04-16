import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const Header = ({ imageTitle }) => {
     return (
          <div className='header-info'>
               <H1>{imageTitle}</H1>
          </div>
     )
}

const H1 = styled.h1 `
border: 1px solid reb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
margin:8px;
padding: 12px;
background-color: white;
transition: all .8s ease-in-out;
font-family: 'Roboto Slab', serif;

     &:hover{
          background-color: #3089fc;
          transition: all .8s ease-in-out;
     }

`


export default Header