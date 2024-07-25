import React from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import TopEvents from './TopEvents';
import AllEvents from './AllEvents';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4 }} gutterBottom>
        Find Your Next Sports Trip
      </Typography>
      <SearchBar />

      <TopEvents />
      <AllEvents />
    </Container>
  );
};

export default HomePage;
