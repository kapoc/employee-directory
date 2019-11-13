import React, { useState, useEffect } from 'react';
import store from '../../store/store'
import { updateTitle } from '../../actions/actions';
import ListInfoItem from '../ListInfoItem/ListInfoItem';

function EmployeeDetails() {
  const [title, setTitle] = useState(getSelectedEmployee().title);
  const [employee, setEmployee] = useState(getSelectedEmployee());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const employee = state.employees.find(x => x.id === state.selectedEmployeeId) || {};

      if (employee){
        setEmployee(employee);
        setTitle(employee.title);
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  function getSelectedEmployee(){
    return store.getState().employees.find(x => x.id === store.getState().selectedEmployeeId);
  }

  function titleChanged(event){
    setTitle(event.target.value);
  }

  function updateEmployeeTitle(){
    store.dispatch(updateTitle(title));
  }

  return (
    <>
    {
      employee && employee.id > -1 ?

        <div className='employee-details'>
          <ul className='list-group'>
            <li className='list-group-item employee-item-wrapper'>
              <div className='employee-item'>
                <div className='image-item'>
                  <img src={employee.imgSrc} className='employee-image'/>
                </div>
                <div className='info-item'>
                  <span className='name'>
                    {employee.firstName} {employee.lastName}
                  </span>

                  <span className='title'>
                    <div className='form-group'>
                      <input className='form-control' type='text' value={title} onChange={titleChanged}></input>
                    </div>
                  </span>
                </div>
              </div>
            </li>

            <ListInfoItem title={'Call Office'} value={employee.officePhone}/>
            <ListInfoItem title={'Call Mobile'} value={employee.mobilePhone}/>
            <ListInfoItem title={'SMS'} value={employee.mobilePhone}/>
            <ListInfoItem title={'Email'} value={employee.email}/>
          </ul>

          <div className='update-btn-box'>
            <button className='btn btn-primary' onClick={updateEmployeeTitle}>Update</button>
          </div>
        </div>

        :

        <div className='info-message'>
          Select employee from the list
        </div>
    }

    </>
  );
}

export default EmployeeDetails;
