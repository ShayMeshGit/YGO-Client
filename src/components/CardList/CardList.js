import React from 'react';

//components
import Card from './Card';


const CardList = ({ cards, changeStatus }) => {
    return (
        <div className='cardList'>
            {
                cards.map(card => {
                    return <Card key={card._id} card={card} changeStatus={changeStatus}/>
                })
            }
        </div>
    )
}


export default CardList;