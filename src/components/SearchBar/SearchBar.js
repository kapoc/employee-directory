import React from 'react';
import store from '../../store/store';
import { filterEmployees } from '../../actions/actions';

function SearchBar() {
  function onChange(event) {
    store.dispatch(filterEmployees(event.target.value));
  }

  return (
    <div className="form-group" id='searchbar-wrapper'>
      <input type="text" className="form-control" placeholder="Search employees" onChange={onChange}/>
    </div>
  );
}

export default SearchBar;
