import React from 'react';

const Footer = () => {
    return (
        <div className="footercontainer">
            <ul className="footercontainer__list">
                <li><a className="footercontainer__list__listitem" href="/">Home</a></li> |
                <li><a className="footercontainer__list__listitem" href="/menu">Menu</a></li> |
                <li><a className="footercontainer__list__listitem" href="/events">Events</a></li> |
                <li><a className="footercontainer__list__listitem" href="/gallery">Gallery</a></li>
            </ul>
            <p className="footercontainer__list__copyright">
                &copy; 2020{new Date().getFullYear() > 2020 && document.write("-" + new Date().getFullYear())}, woody. Created by Seth Christmus with ❤️, ☕, and React.
            </p>
        </div>
    )
}

export default Footer;