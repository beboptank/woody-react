import React from 'react';
import '../scss/_components.scss';

export default function Button({ text, linkTo }) {
    return (
        <div className='linkbuttoncontainer'>
            <a href={linkTo}>
                <button className='linkbuttoncontainer__button' type='button'>{text}</button>
            </a>
        </div>
    )
}

Button.defaultProps = {
    text: "Woody",
    href: "www.google.com"
}