import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

//components
import Header from '../Header';
import Loading from '../Loading';
import Error from '../Error';
import Card from './Card';

const CARDS_QUERY = gql`
    query Cards($cardsSoldStatus: Boolean!) {
        cards(sold: $cardsSoldStatus) {
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
    const cardsSoldStatus = path !== '/' ? true : false;
    const title = cardsSoldStatus ? 'SOLD CARDS' : 'UNSOLD CARDS';


    const { loading, error, data, refetch } = useQuery(CARDS_QUERY, {
        variables: {cardsSoldStatus}
    });
    const [changeStatusMutation] = useMutation(CHANGE_STATUS_MUTATION);

    if (error) return <Error error={error} component={'CardList'} />

    const changeStatus = (id) => {
        changeStatusMutation({ variables: { cardId: id } });
        refetch();
    }

    return (
        <React.Fragment>
            <Header title={title} sold={!cardsSoldStatus} unsold={cardsSoldStatus} />
            <div className='cardList'>
                {loading ? <Loading /> :
                    data.cards ? data.cards.map(card => {
                        return <Card key={card._id} card={card} changeStatus={changeStatus} />
                    }) : <Error error={`Could not find cards => ${data.cards}`} component={'CardList'} />
                }
            </div>
        </React.Fragment>
    )
}


export default CardList;