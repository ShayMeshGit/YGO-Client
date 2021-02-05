import React from 'react';
import { Link } from 'react-router-dom'


const Card = ({card}) => {
    return (
        <div className={'card'}>
            <h1>{card.name}</h1>
            <Link to={`/cards/${card._id}`}>Details</Link>
        </div>
    )
}


export default Card;