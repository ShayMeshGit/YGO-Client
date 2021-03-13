import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header">
                <Link to={'/cards/sold'} className='sold'>sold</Link>
                <h1>YGO-CARDS</h1>
                <Link to={'/'} className='unsold'>unsold</Link>
            </div>
        </div>
    )
}

Header.propTypes = {
    sold: PropTypes.bool,
    title: PropTypes.string,
    unsold: PropTypes.bool
}

export default Header;