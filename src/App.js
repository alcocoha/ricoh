import React from 'react';
import Header from '../src/components/Header';
import CreateProducts from '../src/components/CreateProducts';
import Products from '../src/components/Products';
import SalesAnalysis from '../src/components/SalesAnalysis';
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
