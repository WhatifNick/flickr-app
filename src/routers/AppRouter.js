import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ImagesPage from '../pages/ImagesPage';
// import CheckoutPage from '../components/CheckoutPage'
// import CompletePage from '../components/CompletePage'



const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route exact path="/images" component={ImagesPage} />
        {/* <Route path="/menu/:id" component={Item} /> */}
        {/* <Route exact path="/checkout" component={CheckoutPage} /> */}
        {/* <Route exact path="/complete" component={CompletePage} /> */}

      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;