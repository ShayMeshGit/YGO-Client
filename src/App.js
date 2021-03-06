import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import './App.css';

//components
import Routes from './components/Routes';

const App = () => {

  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      "Cross-Origin-Resource-Policy": 'cross-origin',
      "Cross-Origin-Embedder-Policy": 'require-corp',
      "Cross-Origin-Opener-Policy": 'same-origin'
    }
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
