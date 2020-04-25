import React from 'react';
import Navigation from '../src/components/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div>
            <Navigation />
            <div className="contactcontainer">
                <h1 className="contactcontainer__header">Contact</h1>
                <div className="contactcontainer__linkscontainer">
                    <div className="contactcontainer__linkscontainer__facebook">
                        <a href="https://www.facebook.com/woodyfukui"><FontAwesomeIcon icon={faFacebookSquare} className="contactcontainer__icon" /></a>
                        <p className="contactcontainer__linkscontainer__facebook__text">Facebook</p>
                    </div>
                    <div className="contactcontainer__linkscontainer__instagram">
                        <a href="https://www.instagram.com/woody_diary/"><FontAwesomeIcon icon={faInstagramSquare} className="contactcontainer__icon" /></a>
                        <p className="contactcontainer__linkscontainer__instagram__text">Instagram</p>
                    </div>
                    <div className="contactcontainer__linkscontainer__phone">
                        <a><FontAwesomeIcon className="contactcontainer__icon" icon={faPhoneSquare} /></a>
                        <p className="contactcontainer__linkscontainer__phone__number">090-6608-8099</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;