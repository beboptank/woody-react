import React from 'react';
import "../scss/_components.scss";

const SectionHero = ({ header, heroName }) => {
    return (
        <div id={ heroName } className="herocontainer">
            <h1>{ header }</h1>
        </div>
    )
}

export default SectionHero;