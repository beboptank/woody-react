import React from 'react';
import Navigation from '../src/components/navigation';
import './scss/_components.scss';

const Menu = () => {
    return (
        <div>
            <Navigation />
            <div className="menucontainer">
                <h1 className="menucontainer__header">Menu</h1>
                <div className="menucontainer__blackboard">
                    <ul className="menucontainer__blackboard__list">
                        <span className="menucontainer__blackboard__list__type">Beer</span>
                        <li>Budweiser ¥650</li>
                        <li>Corona ¥700</li>
                        <li>Heinekien ¥700</li>
                        <li>Guinness ¥700</li>
                        <li>Heartland ¥700</li>
                        <li>Hoegarden ¥700</li>
                        <li>Sapporo ¥700</li>
                        <li>Kirin ¥700</li>
                        <li>Shandy Gaff ¥700</li>
                        <li>Campari Beer ¥700</li>
                        <li>Tokyo White ¥750</li>
                        <li>Brooklyn Lager ¥750</li>
                        <li>Blue Moon ¥750</li>
                        <li>Goose Island IPA ¥750</li>
                    </ul>
                    <ul className="menucontainer__blackboard__list">
                        <span className="menucontainer__blackboard__list__type">Cocktails</span>
                        <li>Rum and Coke ¥700</li>
                        <li>Mai-Tai ¥700</li>
                        <li>Sex on the Beach ¥700</li>
                        <li>Sea Breeze ¥700</li>
                        <li>Campari Orange ¥700</li>
                        <li>Campari Soda ¥700</li>
                        <li>Screwdriver ¥700</li>
                        <li>Salty Dog ¥700</li>
                        <li>Moscow Mule ¥750</li>
                        <li>Sakura Ginger ¥750</li>
                        <li>Gin & Tonic ¥750</li>
                        <li>Jägerbomb ¥800</li>
                        <li>Cocabomb ¥800</li>
                        <li>XYZ ¥800</li>
                        <li>Piña Colada ¥800</li>
                    </ul>
                    <ul className="menucontainer__blackboard__list">
                        <span className="menucontainer__blackboard__list__type">Food</span>
                        <li>Curry and Rice ¥1000</li>
                        <li>Potato Wedges ¥800</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu;