import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import CardDetail from '../CardDetail';
import CardList from '../CardList';


const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/cards/sold'} render={({ match }) => <CardList match={match}/>} />
                <Route exact path={'/cards/:cardId'} render={({ match }) => <CardDetail match={match} />} />
                <Route path={'/'} render={({ match }) => <CardList match={match} />} />
            </Switch>
        </Router>
    )
}

export default Routes;