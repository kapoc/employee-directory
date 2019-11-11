import React from 'react';
import './index.scss';
import HomePage from '../HomePage';
import EmployeePage from '../EmployeePage';
import EmployeeReader from '../../data/employeeReader';
import store from '../../store/store';
import { addEmployees } from '../../actions/actions'

class App extends React.Component {
  employeeReader = new EmployeeReader();

  constructor(props){
    super(props);

    this.state = {
      employees: this.employeeReader.read(),
      divStyle: {
        display: 'none'
      },
      selectedEmployeeId: ''
    }

    store.dispatch(addEmployees(this.state.employees));

    store.subscribe(() => {
      this.setState({
        selectedEmployeeId: store.getState().selectedEmployeeId,
        divStyle: { display: store.getState().selectedEmployeeId ? 'inline-block' : 'none' }
      });
    })
  }

  render(){
    return (
        <div className='container'>
          <div className='row'>
            <div className={this.state.selectedEmployeeId ? 'dir-collapsed col-6' : 'dir-expanded col-12'}>
              <HomePage />
            </div>

            { this.state.selectedEmployeeId ?

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

}

export default App;
