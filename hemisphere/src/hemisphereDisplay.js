import React from "react";
import northernHemisphere from './image/Northern.jpg';
import southernHemisphere from './image/Southern.jpg';


const HemisphereDisplay = ({latitude}) => {

    console.log(latitude);

    const picture = latitude > 0 ? northernHemisphere : southernHemisphere;
    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';

    return(
        <div>
            <img src={ picture } alt=""/>
           { hemisphere }
        </div>
    )
}

// export
export default HemisphereDisplay;
