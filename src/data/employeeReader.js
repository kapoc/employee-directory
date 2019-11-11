class EmployeeReader {
  read(){
    let employeesFromFile = require('../assets/data/employees.json').employees;

    return employeesFromFile.map(e => ({...e, id: +e.id + 1, imgSrc: `src/assets/images/${e.firstName}_${e.lastName}.jpg`, visible: true}));
  }
}

export default EmployeeReader;
