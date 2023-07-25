import React from "react";
import './hemisphere.css';
import northernHemisphere from './image/Northern.jpg';
import southernHemisphere from './image/Southern.jpg';

const HemisphereConfig = {

    Southern: {
        text: 'it is Southern Hemisphere',
        picture: southernHemisphere
    },
    Northern: {
        text: 'it is Northern Hemisphere',
        picture: northernHemisphere
    }
};

const HemisphereDisplay = ({latitude}) => {

    // console.log(latitude);

    // const picture = latitude > 0 ? northernHemisphere : southernHemisphere;
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const{ text, picture } = HemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={ picture } alt="hemisphere picture"/>
                </div>
                <div>
                    <h1>{ text }</h1>
                </div>
            </div>
        </div>
    )
}

// export
export default HemisphereDisplay;
