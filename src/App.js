import React, { Component } from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import merge from 'lodash.merge';

import { sentenceParts } from './resolvers';

import logo from './logo.svg';
import './App.css';
const cache = new InMemoryCache()
const stateLink = withClientState({
  cache,
  ...merge(sentenceParts)
});

console.log({
  cache,
  ...merge(sentenceParts)
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: from([stateLink]),
  cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
