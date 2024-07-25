import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import EventCard from './EventCard';

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        All Sports Trips
      </Typography>
      <Grid container spacing={3}>
        {events.map(event => (
          <Grid item xs={12} md={4} key={event.id}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AllEvents;
