import React from 'react';
import { Link } from 'react-router-dom';


const Card = (props) => {
    const {card, changeStatus} = props;

    return (
        <div className='card'>
            <h1>{card.name}</h1>
            <Link to={`/cards/${card._id}`}>Details</Link>
            <button className={`status ${card.sold ? 'ix' : 'vi'}`} onClick={() => changeStatus(card)}></button>
        </div>
    )
}


export default Card;