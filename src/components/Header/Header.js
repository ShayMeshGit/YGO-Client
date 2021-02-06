import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <div className="header">
            {props.sold && <Link to={'/cards/sold'} className='sold'>sold</Link>}
            <h1>{props.title}</h1>
            {props.unsold && <Link to={'/'} className='unsold'>unsold</Link>}
        </div>
    )
}

Header.propTypes = {
    sold: PropTypes.bool,
    title: PropTypes.string,
    unsold: PropTypes.bool
}

export default Header;