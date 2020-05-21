import React from "react";
import styled from 'styled-components'

const Footer = ({ copyright, date }) => {
     return (
          <div className='footer-info'>
               <Copyright>Copyright: {copyright}</Copyright>
               <Date>Date: {date}</Date>
          </div>
     )
}

const Copyright = styled.p `
font-family: 'Poppins', sans-serif;
margin:20px;
color:red;
`
const Date = styled.p `
font-family: 'Baloo Tammudu 2', cursive;
margin:20px;

`


export default Footer