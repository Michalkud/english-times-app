import React, { Component } from 'react';
import 'antd/dist/antd.css';
import 'antd/lib/locale-provider/style';
import { LocaleProvider } from 'antd';
import { 
  Carousel,
  Layout,

  Menu,
  Icon,


} from 'antd';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloClient } from 'apollo-client';
import { from } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import merge from 'lodash.merge';

import enUS from 'antd/lib/locale-provider/en_US';

import 'antd/dist/antd.css';

import { sentenceParts, question, sentenceTypes } from './resolvers';

import { Slider } from './components';

const {
  Header,
  Content,
  Footer,
  Sider,
} = Layout;


console.log(question);
const cache = new InMemoryCache()
const stateLink = withClientState({
  ...merge(sentenceParts, question, sentenceTypes),
  cache
});

console.log({
  ...merge(sentenceParts, question, sentenceTypes),
  cache
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: from([stateLink]),
  cache
});

class App extends Component {

  render() {
    return (
      <LocaleProvider locale={enUS}>
        <ApolloProvider client={client}>
          <Slider />
        </ApolloProvider>
      </LocaleProvider>
    );
  }
}

export default App;
