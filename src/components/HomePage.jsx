import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import SearchBar from './SearchBar';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4 }} gutterBottom>
        Find Your Next Sports Trip
      </Typography>
      <SearchBar />
      <Typography variant="h5" gutterBottom>
        Upcoming Sports Trips
      </Typography>
      <Grid container spacing={3}>
        {events.map(event => (
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
                <Typography>{event.price} €</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
