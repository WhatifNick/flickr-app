import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const Link = styled.div`
  text-decoration: none;
`



const Header = () => (
   <div>
    <AppBar color="primary" position="static">
      <Toolbar>
          <Typography variant="title" color="inherit">
            Flickr App
          </Typography>
          <Typography variant="title" color="inherit">
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          </Typography>
          <Typography variant="title" color="inherit">
            <NavLink to="/images" activeClassName="is-active" exact={true}>Images</NavLink>
          </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;