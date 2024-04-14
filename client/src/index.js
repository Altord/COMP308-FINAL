import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloProvider from './ApolloProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
