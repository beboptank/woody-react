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
                    <Link id="home" className="menu-item" to="/">home</Link>
                    <Link id="events" className="menu-item" to="/events">events</Link>
                    <Link id="gallery" className="menu-item" to="/gallery">gallery</Link>
                    <Link id="contact" className="menu-item" to="/contact">contact</Link>
                    <div id="google_translate_element"></div>
                </Menu>
            </div>
        );
    }
}

export default withRouter(Navigation);