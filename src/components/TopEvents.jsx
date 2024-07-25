import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid } from '@mui/material';
import EventCard from './EventCard';

const TopEvents = () => {
  const [topEvents, setTopEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/events/top')
      .then(response => setTopEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Top 3 Sports Trips
      </Typography>
      <Grid container spacing={3}>
        {topEvents.length > 0 ? (
          topEvents.map(event => (
            <Grid item xs={12} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No top events available.</Typography>
        )}
      </Grid>
    </>
  );
};

export default TopEvents;
