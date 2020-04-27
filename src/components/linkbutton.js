import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../scss/_components.scss';

const Button = ({ text, linkTo }) => {
    return (
        <div className='linkbuttoncontainer'>
            <Link to={linkTo}>
                <button className='linkbuttoncontainer__button' type='button'>{text}</button>
            </Link>
        </div>
    )
}

export default withRouter(Button)

Button.defaultProps = {
    text: "Woody",
    href: "www.google.com"
}