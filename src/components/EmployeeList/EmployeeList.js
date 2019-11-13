import React, { useState, useEffect } from 'react';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import store from '../../store/store';

function EmployeeList() {
  const [employees, setEmployees] = useState(store.getState().employees);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setEmployees(store.getState().employees);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div>
      <ul className='list-group'>
        {employees.map((employee) => {
          return <EmployeeListItem key={employee.id} {...employee}/>
        })}
      </ul>
    </div>
  );
}

export default EmployeeList;
