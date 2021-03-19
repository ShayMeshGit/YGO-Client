import React, { useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';

//components
import Error from '../Error';
import Loading from '../Loading';
import CardList from '../CardList';


const CARDS_QUERY = gql`
    query {
        cards{
          _id
          name
          sold
    }
  }
`;

const CHANGE_STATUS_MUTATION = gql`
mutation ChangeStatus($cardId: ID!){
    changeStatus(id: $cardId) {
        sold
    }
}
`;

const Cards = ({ match }) => {
    const { path } = match;
    const bool = path === '/cards/sold' ? true : false;

    const [data, setData] = useState({ cards: [] });
    const { loading, error } = useQuery(CARDS_QUERY, { onCompleted: setData });
    const [changeStatusMutation] = useMutation(CHANGE_STATUS_MUTATION);

    if (error) return <Error error={error} component={'Cards'} />

    if (loading) return <Loading />


    const changeStatus = (card) => {
        changeStatusMutation({ variables: { cardId: card._id } });
        const cardIndex = data.cards.findIndex(c => c._id === card._id);
        const newCard = { ...card, sold: !card.sold }
        const newArr = [...data.cards];
        newArr.splice(cardIndex, 1, newCard);
        setData({ cards: newArr });
    }


    const arr = bool
        ? data.cards.filter(card => card.sold)
        : data.cards.filter(card => !card.sold)

    return (
        <CardList cards={arr} changeStatus={changeStatus} />
    )
}


export default Cards;