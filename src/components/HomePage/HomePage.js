import React from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import EmployeeList from '../EmployeeList/EmployeeList';

function HomePage() {
  const title = 'Employee Directory';

  return (
    <div className='card'>
      <div className='card-body scrollbar-pretty'>
        <Header key={title} title={title} />

        <SearchBar/>

        <EmployeeList/>
      </div>
    </div>
  );
}

export default HomePage;
