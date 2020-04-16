import React from "react";
import styled from 'styled-components'

const Footer = ({ copyright, date }) => {
     return (
          <div className='footer-info'>
               <Copyright>Copyright: {copyright}</Copyright>
               <p>Date: {date}</p>
          </div>
     )
}

const Copyright = styled.p `
font-family: 'Poppins', sans-serif;
margin:20px;
color:red;
`



export default Footer