import React from 'react';


const MainContent = ({imageURL, imageExplanation}) => {
    return(
        <div className='component1'>
            <img src={imageURL}  />
            
            <p>{imageExplanation}</p>
        </div>
    )

}

export default MainContent