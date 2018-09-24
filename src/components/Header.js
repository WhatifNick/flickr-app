import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="Header">
      <div className="Header-title">Flickr App</div>
    <div className="Header-links">
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/images" activeClassName="is-active" exact={true}>Images</NavLink>
    </div>
  </header>
);

export default Header;