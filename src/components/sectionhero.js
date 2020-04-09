import React from 'react';
import LinkButton from './linkbutton';
import "../scss/_components.scss";

const SectionHero = ({ header, heroName, buttonText, href }) => {
    return (
        <div id={ heroName } className="herocontainer">
            <div className="herocontainer__items">
                <h1 className="herocontainer__items__header">{header}</h1>
                <LinkButton text={buttonText} href={href} />
            </div>
        </div>
    )
}

export default SectionHero;