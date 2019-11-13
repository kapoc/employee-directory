import React, { useState, useEffect } from 'react';
import './App.scss';
import HomePage from '../HomePage/HomePage';
import EmployeePage from '../EmployeePage/EmployeePage';
import EmployeeReader from '../../data/employeeReader';
import store from '../../store/store';
import { addEmployees } from '../../actions/actions'

function App() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');

  useEffect(() => {
    const employeeReader = new EmployeeReader();
    const employees = employeeReader.read();
    store.dispatch(addEmployees(employees));
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setSelectedEmployeeId(store.getState().selectedEmployeeId)
    })

    return () => {
      unsubscribe();
    }
  }, []);

  return (
      <div className='container'>
        <div className='row'>
          <div className={selectedEmployeeId ? 'dir-collapsed col-6' : 'dir-expanded col-12'}>
            <HomePage />
          </div>

          { selectedEmployeeId ?

            <div className='col-6'>
              <EmployeePage/>
            </div>

            :
            null
          }


        </div>
      </div>
  );
}

export default App;
