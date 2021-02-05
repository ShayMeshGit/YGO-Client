import React from 'react';
import { Redirect } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

//Components
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Header';


const CardDetail = ({ match }) => {
    const { cardId } = match.params;

    const CARD_QUERY = gql`
        query Card($cardId: ID!) {
            card(id: $cardId) {
            name
            type
            set
            highestPrice
            lowestPrice
            currency
            rarity
            sold
            }
        }
    `;
    
    const { loading, error, data } = useQuery(CARD_QUERY, {
        variables: { cardId }
    })

    if(error) return <Error />;
    if(loading) return <Loading />;

    const { card } = data;
    if(!card) return <Redirect to={'/'} />

    return (
        <React.Fragment>
            <Header title={'CARD DETAIL'} sold={true} unsold={true}/>
            <div>
                <h1>{card.name}</h1>
                <p>Set: {card.set}</p>
                <p>Type: {card.type}</p>
                <p>Price-Range: {`${card.lowestPrice} - ${card.highestPrice}${card.currency}`}</p>
                <p>Rarity: {card.rarity}</p>
            </div>
            <div>
                {card.sold ? <p style={{color: "green"}}>sold</p> : <p style={{color: "red"}}>unsold</p>}
            </div>
        </React.Fragment>
    )
}

export default CardDetail;
