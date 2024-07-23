import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20px', padding: '10px 0', backgroundColor: '#3f51b5', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © 2024 Sports Trips. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
