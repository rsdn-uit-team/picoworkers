import { Provider } from 'react-redux';
import store from './store';
import React, { Component } from 'react';
import Routes from 'routes';

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
