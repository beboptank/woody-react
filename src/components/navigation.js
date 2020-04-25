import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';



class Navigation extends React.Component {

    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="navcontainer">
                <Menu 
                    isOpen={ false }
                >
                    <Link id="home" className="menu-item" to="/">Home</Link>
                    <Link id="drinkmenu" className="menu-item" to="/menu">Menu</Link>
                    <Link id="events" className="menu-item" to="/events">Events</Link>
                    <Link id="gallery" className="menu-item" to="/gallery">Gallery</Link>
                    <Link id="contact" className="menu-item" to="/contact">Contact</Link>
                </Menu>
            </div>
        );
    }
}

export default withRouter(Navigation);