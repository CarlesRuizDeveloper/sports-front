import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import SearchBar from './SearchBar';
import { sportsData } from '../data';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4}} gutterBottom>
        Find Your Next Sports Event
      </Typography>
      <SearchBar />
      <Typography variant="h5" gutterBottom>
        Upcoming Sports Events
      </Typography>
      <Grid container spacing={3}>
        {sportsData.map(event => (
          <Grid item xs={12} md={4} key={event.id}>
            <Card>
              <CardMedia
                component="img"
                alt={event.name}
                height="140"
                image={event.image}
                title={event.name}
              />
              <CardContent>
                <Typography variant="h6">{event.name}</Typography>
                <Typography>{event.description}</Typography>
                <Typography>{event.date}</Typography>
                <Typography>{event.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
