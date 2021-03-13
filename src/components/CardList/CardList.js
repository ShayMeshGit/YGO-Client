import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

//components
import Loading from '../Loading';
import Error from '../Error';
import Card from './Card';

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

const CardList = ({ match }) => {
    const { path } = match;
    const bool = path !== '/cards/sold' ? true : false;

    const { loading, error, data, refetch } = useQuery(CARDS_QUERY);
    const [changeStatusMutation] = useMutation(CHANGE_STATUS_MUTATION, {
        refetchQueries: [
            {query: CARDS_QUERY}
        ]
    });

    if (error) return <Error error={error} component={'CardList'} />

    const changeStatus = (id) => {
        changeStatusMutation({ variables: { cardId: id } });
    }

    let cards = loading ? [] : bool
        ? data.cards.filter(card => card.sold)
        : data.cards.filter(card => !card.sold)

    return (
        <div className='cardList'>
            {loading ? <Loading />
                : cards.map(card => {
                    return <Card key={card._id} card={card} changeStatus={changeStatus} />
                })}
        </div>
    )
}


export default CardList;