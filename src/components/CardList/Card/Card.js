import React from 'react';
import { Link } from 'react-router-dom'


const Card = (props) => {
    const {card, changeStatus} = props;

    return (
        <div className='card'>
            <h1>{card.name}</h1>
            <Link to={`/cards/${card._id}`}>Details</Link>
            <button className={`${card.sold ? 'ok' : 'unok'}`} onClick={() => changeStatus(card)}>status</button>
        </div>
    )
}


export default Card;