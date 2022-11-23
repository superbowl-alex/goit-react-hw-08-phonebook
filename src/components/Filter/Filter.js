import React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

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
      label="Filter by name"
      type="text"
      autoComplete="off"
      name="filter"
      value={filter.value}
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
