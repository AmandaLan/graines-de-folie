import React from 'react'

const HomePlantsTiles = ({image, action}) => {
    return (
        <div className="header-plants" onClick={action}>
            
                <img src={image}/>
            
        </div>
    )
};
export default HomePlantsTiles
