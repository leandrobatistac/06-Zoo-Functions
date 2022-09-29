const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const primeiroNome = data.employees.filter((element) => employeeName.includes(element.firstName));
  const ultimoNome = data.employees.filter((element) => employeeName.includes(element.lastName));

  if (primeiroNome.length === 1) {
    return primeiroNome[0];
  }

  if (ultimoNome.length === 1) {
    return ultimoNome[0];
  }
}

// console.log(getEmployeeByName());
module.exports = getEmployeeByName;
