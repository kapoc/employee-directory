import { SELECT_EMPLOYEE } from '../actions/actions';
import { ADD_EMPLOYEES } from '../actions/actions';
import { ADD_EMPLOYEE } from '../actions/actions';
import { UPDATE_TITLE } from '../actions/actions';
import { FILTER_EMPLOYEES } from '../actions/actions';


function rootReducer(state, action){
  switch(action.type) {
    case ADD_EMPLOYEES:
      return Object.assign({}, state, {
        employees: [
          ...action.employees
        ]
      });

    case ADD_EMPLOYEE: {
      return Object.assign({}, state, {
        employees: [
          ...state.employees,
          action.employee
        ]
      });
    }

    case SELECT_EMPLOYEE: {
      return Object.assign({}, state, {
        selectedEmployeeId: action.id
      });
    }


    case UPDATE_TITLE: {
      return {
        ...state,
        employees: state.employees.map(
          (employee, i) => i === state.selectedEmployeeId - 1  ? { ...employee, title: action.title }
                                                          : employee
        )
      }
    }

    case FILTER_EMPLOYEES: {
      // empty query
      if (!action.query){
        return {
          ...state,
          employees: state.employees.map(e => ({ ...e, visible: true }))
        }
      } else {
        const query = action.query.trim().toLowerCase();

        const newState = {
          ...state,
          employees: state.employees.map((employee) => {
            return (employee.firstName.toLowerCase().indexOf(query) > -1 ||
              employee.lastName.toLowerCase().indexOf(query) > -1 ||
              employee.title.toLowerCase().indexOf(query) > -1) ? { ...employee, visible: true } : { ...employee, visible: false }
           })
        }

        return newState;
      }
    }

    default:
      return state;
  }
}

export default rootReducer;
