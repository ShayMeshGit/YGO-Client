import React from 'react';
import { gql, useQuery } from '@apollo/client';

//components
import Header from '../Header';
import Loading from '../Loading';
import Error from '../Error';
import Card from './Card';


const CardList = ({ match }) => {
    const { path } = match;
    const cardsSoldStatus = path !== '/' ? true : false;
    const title = cardsSoldStatus ? 'SOLD CARDS' : 'UNSOLD CARDS';

    const CARDS_QUERY = gql`
    query Cards($cardsSoldStatus: Boolean!) {
        cards(sold: $cardsSoldStatus) {
          _id
          name
        }
      }
    `;

    const { loading, error, data } = useQuery(CARDS_QUERY, {
        variables: { cardsSoldStatus }
    })

    if (error) return <Error />

    if (loading) return <Loading />

    const {cards} = data;
    return (
        <div>
            <Header title={title} sold={!cardsSoldStatus} unsold={cardsSoldStatus}/>
            {cards.map(card => {
                return <Card key={card._id} card={card} />
            })}
        </div>
    )
}


export default CardList;