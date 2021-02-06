import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';

//components
import Routes from './components/Routes';

const App = () => {

  const cache = new InMemoryCache();
  const link = createHttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  const client = new ApolloClient({
    cache,
    link
  });

  return (
    <React.Fragment>
      <div className="shape"></div>
      <div className='app'>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </div>
    </React.Fragment>
  )
}


export default App;
