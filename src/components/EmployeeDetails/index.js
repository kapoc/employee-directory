import React from 'react';
import store from '../../store/store'
import { updateTitle } from '../../actions/actions';
import ListInfoItem from '../ListInfoItem';

class EmployeeDetails extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: this.employee.title,
      employee: this.employee
    }

    this.unsubscribe = store.subscribe(() => {
      if (this.employee){
        this.setState({
          employee: this.employee,
          title: this.employee.title
        })
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  get employee(){
    const state = store.getState();
    return state.employees.find(x => x.id === state.selectedEmployeeId) || {};
  }

  titleChanged = (event) => {
    this.setState({ title: event.target.value })
  }

  updateTitle = () => {
    store.dispatch(updateTitle(this.state.title));
  }

  render(){
    return (
      <>
      {
        this.state.employee  && this.state.employee.id > -1 ?

          <div className='employee-details'>
            <ul className='list-group'>
              <li className='list-group-item employee-item-wrapper'>
                <div className='employee-item'>
                  <div className='image-item'>
                    <img src={this.state.employee.imgSrc} className='employee-image'/>
                  </div>
                  <div className='info-item'>
                    <span className='name'>
                      {this.state.employee.firstName} {this.state.employee.lastName}
                    </span>

                    <span className='title'>
                      <div className='form-group'>
                        <input className='form-control' type='text' value={this.state.title} onChange={this.titleChanged}></input>
                      </div>
                    </span>
                  </div>
                </div>
              </li>

              <ListInfoItem title={'Call Office'} value={this.state.employee.officePhone}/>
              <ListInfoItem title={'Call Mobile'} value={this.state.employee.mobilePhone}/>
              <ListInfoItem title={'SMS'} value={this.state.employee.mobilePhone}/>
              <ListInfoItem title={'Email'} value={this.state.employee.email}/>
            </ul>

            <div className='update-btn-box'>
              <button className='btn btn-primary' onClick={this.updateTitle}>Update</button>
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
}

export default EmployeeDetails;
