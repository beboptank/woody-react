import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';



class Navigation extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }


    render() {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="drinkmenu" className="menu-item" href="/menu">Menu</a>
                <a id="events" className="menu-item" href="/events">Events</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        );
    }
}

export default Navigation;