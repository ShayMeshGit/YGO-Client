import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import './App.css';

//components
import Routes from './components/Routes';

const { REACT_APP_URI } = process.env;

const App = () => {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: REACT_APP_URI,
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
