import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

let initialState = {
  employees: [],
  searchQuery: '',
  selectedEmployeeId: null,
}

export default createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
