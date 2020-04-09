import React from 'react';
import LinkButton from './linkbutton';
import "../scss/_components.scss";

const SectionHero = ({ header, heroName, buttonText, href }) => {
    return (
        <div id={ heroName } className="herocontainer">
            <h1>{ header }</h1>
            <LinkButton text={buttonText} href={href}/>
        </div>
    )
}

export default SectionHero;