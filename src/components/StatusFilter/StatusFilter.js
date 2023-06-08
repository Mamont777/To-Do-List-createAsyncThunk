import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Button } from '../Button/Button';
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filterSlice';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
