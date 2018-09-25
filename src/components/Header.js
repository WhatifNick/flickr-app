import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';




const Header = () => (
    <AppBar color="primary">
  <header className="Header">
    <Typography variant="title" color="inherit">
      <div className="Header-title">Flickr App</div>
    <div className="Header-links">
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/images" activeClassName="is-active" exact={true}>Images</NavLink>
    </div>
    </Typography>
  </header>
  </AppBar>
);

export default Header;