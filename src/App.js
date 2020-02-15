import React from 'react';
import Header from '../src/containers/Header';
import CreateProducts from './containers/CreateProducts';
import Products from './containers/Products';
import SalesAnalysis from './containers/SalesAnalysis';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={ CreateProducts }/>
          <Route exact path="/products" component={ Products }/>
          <Route exact path="/sales-analysis" component={ SalesAnalysis }/>
        </Switch>
      </Container>

    </BrowserRouter>
  );
}

export default App;
