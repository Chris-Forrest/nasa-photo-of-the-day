import React from "react";

const Footer = ({ copyright, date }) => {
     return (
          <div className='footer-info'>
               <p>Copyright: {copyright}</p>
               <p>Date: {date}</p>
          </div>
     )
}

export default Footer