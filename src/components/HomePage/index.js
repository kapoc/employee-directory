import React from 'react';
import Header from '../Header';
import SearchBar from '../SearchBar';
import EmployeeList from '../EmployeeList';

class HomePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'Employee Directory',
    }
  }

  render(){
    return (
      <div className='card'>
        <div className='card-body scrollbar-pretty'>
          <Header key={this.state.title} title={this.state.title} />

          <SearchBar/>

          <EmployeeList/>
        </div>
      </div>
    );
  }
}

export default HomePage;
