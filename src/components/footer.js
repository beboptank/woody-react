import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footercontainer">
            <ul className="footercontainer__list">
                <li><Link className="footercontainer__list__listitem" to="/">home</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/events">events</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/gallery">gallery</Link></li> |
                <li><Link className="footercontainer__list__listitem" to="/contact">contact</Link></li>
            </ul>
            <p className="footercontainer__list__copyright">
                &copy; 2020 - 2022, woody. Created by Seth Christmus with ❤️, ☕, and React.
            </p>
        </div>
    )
}

export default withRouter(Footer);