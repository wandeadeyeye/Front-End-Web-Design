import React from "react";

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude);
    const picture = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';
    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';

    return(
        <div>
            <img src { picture } alt=""/>
           { hemisphere }
        </div>
    )
}

// export
export default HemisphereDisplay;
