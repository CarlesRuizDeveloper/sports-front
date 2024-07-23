import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sports Trips
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
