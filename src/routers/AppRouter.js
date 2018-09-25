import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ImagesPage from '../pages/ImagesPage';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route exact path="/images" component={ImagesPage} />

      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;