import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Header = (props) => {
    const { title, sold, unsold } = props;
    return (
        <div className="header-container">
            <div className="header">
                {sold && <Link to={'/cards/sold'} className='sold'>sold</Link>}
                <h1>{title}</h1>
                {unsold && <Link to={'/'} className='unsold'>unsold</Link>}
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