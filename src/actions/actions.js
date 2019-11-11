export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const ADD_EMPLOYEES = 'ADD_EMPLOYEES';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export function selectEmployee(id) {
  return { type: SELECT_EMPLOYEE, id: id };
}

export function addEmployee(employee) {
  return { type: ADD_EMPLOYEE, employee: employee };
}

export function addEmployees(employees){
  return { type: ADD_EMPLOYEES, employees: employees };
}

export function updateTitle(title){
  return { type: UPDATE_TITLE, title: title };
}

export function setSearchQuery(query) {
  return { type: SET_SEARCH_QUERY, query: query };
}
