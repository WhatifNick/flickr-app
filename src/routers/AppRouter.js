import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import ImagesPage from '../pages/ImagesPage';

// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: blue,
      secondary: yellow,
  }
});


const AppRouter = () => (
  <theme>
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route exact path="/images" component={ImagesPage} />

        </Switch>
        </div>
    </BrowserRouter>
  </theme>
);

export default AppRouter;