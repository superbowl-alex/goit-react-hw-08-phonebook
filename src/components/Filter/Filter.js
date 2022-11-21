import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
// import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => {
    e.preventDefault();
    const currentFilter = e.currentTarget.value;
    dispatch(changeFilter(currentFilter));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter.value}
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};

export default Filter;
