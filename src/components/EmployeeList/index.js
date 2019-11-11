import React from 'react';
import EmployeeListItem from '../EmployeeListItem';
import store from '../../store/store';

class EmployeeList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      employees: store.getState().employees
    }

    store.subscribe(() => {
      this.setState({ employees: store.getState().employees })
    });
  }

  render(){
    return (
      <div>
        <ul className='list-group'>
          {this.state.employees.map((employee) => {
            return <EmployeeListItem key={employee.id} {...employee}/>
          })}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
