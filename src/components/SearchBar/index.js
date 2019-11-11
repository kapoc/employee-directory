import React from 'react';
import store from '../../store/store';
import { setSearchQuery } from '../../actions/actions';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }

  onChange = (event) => {
    store.dispatch(setSearchQuery(event.target.value));
  }

  render(){
    return (
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search employees" onChange={this.onChange}/>
      </div>
    );
  }
}

export default SearchBar;
