import React from 'react';
import LinkButton from './linkbutton';
import "../scss/_components.scss";

const SectionHero = ({ header, heroName, buttonText, linkTo }) => {
    return (
        <div id={ heroName } className="herocontainer">
            <div className="herocontainer__items">
                <h1 className="herocontainer__items__header">{header}</h1>
                <LinkButton text={buttonText} linkTo={linkTo} />
            </div>
        </div>
    )
}

export default SectionHero;