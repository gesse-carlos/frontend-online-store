import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Cart, ProductDetails } from '.';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ Cart } />
      <Route path="/product=:id" component={ ProductDetails } />
    </Switch>
  );
}

export default Routes;
