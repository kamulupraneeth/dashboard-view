// DateSelector.js
import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const DateSelector = ({ dates, selectedDate, onDateChange }) => {
  return (
    <FormControl>
      <InputLabel>Date</InputLabel>
      <Select value={selectedDate} onChange={onDateChange}>
        {dates.map((date) => (
          <MenuItem key={date} value={date}>
            {date}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DateSelector;
