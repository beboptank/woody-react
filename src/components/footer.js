import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footercontainer">
            <ul className="footercontainer__list">
                <li><Link className="footercontainer__list__listitem" to="/">Home</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/events">Events</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/gallery">Gallery</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/contact">Contact</Link></li>
            </ul>
            <p className="footercontainer__list__copyright">
                &copy; 2020{new Date().getFullYear() > 2020 && document.write("-" + new Date().getFullYear())}, woody. Created by Seth Christmus with ❤️, ☕, and React.
            </p>
        </div>
    )
}

export default withRouter(Footer);