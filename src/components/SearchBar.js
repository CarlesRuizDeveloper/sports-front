// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    const formattedCheckIn = checkInDate ? dayjs(checkInDate).format('YYYY-MM-DD') : '';
    const formattedCheckOut = checkOutDate ? dayjs(checkOutDate).format('YYYY-MM-DD') : '';
    alert(`Location: ${location}, Check-in: ${formattedCheckIn}, Check-out: ${formattedCheckOut}, Guests: ${guests}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Destination"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <DatePicker
              label="Check-in"
              value={checkInDate}
              onChange={(newValue) => setCheckInDate(newValue)}
              disablePast
              renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <DatePicker
              label="Check-out"
              value={checkOutDate}
              onChange={(newValue) => setCheckOutDate(newValue)}
              disablePast
              renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
              minDate={checkInDate || dayjs()}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              select
              fullWidth
              label="Guests"
              variant="outlined"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              {[...Array(10).keys()].map((option) => (
                <MenuItem key={option + 1} value={option + 1}>
                  {option + 1} {option + 1 === 1 ? 'Guest' : 'Guests'}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={2}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default SearchBar;