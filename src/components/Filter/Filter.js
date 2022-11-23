import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    e.preventDefault();
    const currentFilter = e.currentTarget.value;
    dispatch(changeFilter(currentFilter));
  };

  return (
    <TextField
      color="accent"
      label="Filter by name"
      type="text"
      autoComplete="off"
      name="filter"
      value={filter.value}
      onChange={handleFilterChange}
      sx={{
        width: 300,
        boxShadow: 2,
        borderRadius: 1,
        backgroundColor: 'primary.light',
      }}
    />
  );
};

export default Filter;
