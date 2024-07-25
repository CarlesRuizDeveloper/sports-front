import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const EventCard = ({ event }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={event.name}
        height="140"
        image={`http://localhost:8000/storage/${event.image}`}
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
  );
};

export default EventCard;
