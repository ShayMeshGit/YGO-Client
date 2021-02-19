import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import CardDetails from '../CardDetails';
import CardList from '../CardList';


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/cards/sold'} render={({ match }) => <CardList match={match}/>} />
                <Route exact path={'/cards/:cardId'} render={({ match }) => <CardDetails match={match} />} />
                <Route path={'/'} render={({ match }) => <CardList match={match} />} />
            </Switch>
        </Router>
    )
}

export default Routes;