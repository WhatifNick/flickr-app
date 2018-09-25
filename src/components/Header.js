import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Header = () => (
   <div>
    <AppBar color="primary">
      <Toolbar>
          <Typography variant="title" color="inherit">
            Flickr App
          </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;