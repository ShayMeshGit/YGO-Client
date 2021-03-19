import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import CardDetails from '../CardDetails';
import Cards from '../Cards';
import Header from '../Header';


const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={'/cards/sold'} render={({ match }) => <Cards match={match} />} />
                <Route exact path={'/cards/:cardId'} render={({ match }) => <CardDetails match={match} />} />
                <Route path={'/'} render={({ match }) => <Cards match={match} />} />
            </Switch>
        </Router>
    )
}

export default Routes;