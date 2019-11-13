import React from 'react';
import Header from '../Header/Header';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
import store from '../../store/store';
import { selectEmployee } from '../../actions/actions';

function EmployeePage({employee}) {
  const title = 'Employee';

  function closeTab() {
    store.dispatch(selectEmployee(null));
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='close-button' onClick={closeTab}>
          <i className='fa fa-close'/>
        </div>

        <Header key={title} title={title}/>

        <EmployeeDetails employee={employee}/>
      </div>
    </div>
  );
}

export default EmployeePage;
