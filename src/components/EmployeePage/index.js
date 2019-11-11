import React from 'react';
import Header from '../Header';
import EmployeeDetails from '../EmployeeDetails';
import store from '../../store/store';
import { selectEmployee } from '../../actions/actions';

class EmployeePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'Employee',
    }
  }

  closeTab() {
    store.dispatch(selectEmployee(null));
  }

  render(){
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='close-button' onClick={this.closeTab}>
            &#10006;
          </div>

          <Header key={this.state.title} title={this.state.title}/>

          <EmployeeDetails employee={this.employee}/>
        </div>
      </div>
    );
  }
}

export default EmployeePage;
