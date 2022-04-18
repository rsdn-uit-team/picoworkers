import { Provider } from 'react-redux';
import { store } from './store';
import React, { Component } from 'react';
import Routes from 'routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
