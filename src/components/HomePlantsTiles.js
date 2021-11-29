import React from 'react'

const HomePlantsTiles = ({image, action}) => {
    return (
        
        <div className="tiles-plants" onClick={action}>
            
                <img src={image} alt=""/>
            
        </div>
    )
};
export default HomePlantsTiles
