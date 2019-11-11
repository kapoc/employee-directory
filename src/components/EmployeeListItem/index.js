import React from 'react';
import store from '../../store/store';
import { selectEmployee } from '../../actions/actions';

class EmployeeListItem extends React.Component {
  constructor(props){
    super(props);
  }

  selectItem = () => {
    store.dispatch(selectEmployee(this.props.id));
  }

  render(){
    return (
      <>
        {
          this.props.visible ?

          <li className='list-group-item employee-item-wrapper' onClick={this.selectItem}>
            <div className='employee-item'>
              <div className='image-item'>
                <img src={this.props.imgSrc} className='employee-image'/>
              </div>
              <div className='info-item'>
                <span className='name'>
                  {this.props.firstName} {this.props.lastName}
                </span>

                <span className='title'>
                  {this.props.title}
                </span>
              </div>
            </div>

          </li>
          : null
        }
      </>
    );


  }
}

export default EmployeeListItem;
