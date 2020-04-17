import React from 'react';
import "../scss/_components.scss";
import logo from '../images/woody.png';

const LogoBanner = () => {
    return (
        <div className="bannercontainer">
            <img alt="woody logo" className="bannercontainer__image" src={logo}></img>
        </div>
    )
}

export default LogoBanner;