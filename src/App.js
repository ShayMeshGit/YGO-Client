import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

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
    <div className='App'>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </div>
  )
}


export default App;
