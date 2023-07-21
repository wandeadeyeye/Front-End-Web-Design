import React from "react";

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude);
    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere';

    return(
        <div>
           {hemisphere}
        </div>
    )
}

// export
export default HemisphereDisplay;
