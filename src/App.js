import React from 'react';
import Header from '../src/containers/Header';
import CreateProducts from './containers/CreateProducts';
import Products from './containers/Products';
import SalesAnalysis from './containers/SalesAnalysis';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>

        <Header/>
        <Switch>
          <Route exact path="/" component={ CreateProducts }/>
          <Route exact path="/products" component={ Products }/>
          <Route exact path="/sales-analysis" component={ SalesAnalysis }/>
        </Switch>

      </Provider>
    </BrowserRouter>
  );
}

export default App;
