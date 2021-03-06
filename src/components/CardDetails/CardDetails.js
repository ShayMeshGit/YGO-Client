import React from 'react';
import { Redirect } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

//Components
import Loading from '../Loading';
import Error from '../Error';


const CardDetails = ({ match }) => {
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

    if (error) return <Error error={error} component={'CardDetails'} />;

    return (
        <React.Fragment>
            {
                loading ? <Loading /> :
                    !data.card ? <Redirect to={'/'} /> :
                    <div className='cardDetails-container'>
                        <div className='cardDetails'>
                            <h1>{data.card.name}</h1>
                            <p>Set: {data.card.set}</p>
                            <p>Type: {data.card.type}</p>
                            <p>Price-Range: {`${data.card.lowestPrice} - ${data.card.highestPrice}${data.card.currency}`}</p>
                            <p>Rarity: {data.card.rarity}</p>
                        </div>
                        <div className={`status ${data.card.sold ? "status-green" : "status-red"}`}>
                            {data.card.sold ? <p>SOLD</p> : <p>UNSOLD</p>}
                        </div>
                    </div>
            }
        </React.Fragment>
    )
}

export default CardDetails;
