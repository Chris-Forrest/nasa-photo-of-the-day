import React from 'react';
import styled from 'styled-components'


const MainContent = ({imageURL, imageExplanation}) => {
    return(
        <div className='component1'>
            <img src={imageURL}  />
            
            <ImageExplaned>{imageExplanation}</ImageExplaned>
        </div>
    )

}

const ImageExplaned = styled.p `
margin-left:13%;
width:75%;
color:white;
font-family: 'Mukta', sans-serif;
font-size:17px;
text-align:center;
`


export default MainContent