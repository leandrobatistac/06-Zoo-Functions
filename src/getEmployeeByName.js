const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }

  const primeiroNome = data.employees.find((element) => employeeName.includes(element.firstName));
  const ultimoNome = data.employees.find((element) => employeeName.includes(element.lastName));

  if (primeiroNome !== undefined) { return primeiroNome; }
  if (ultimoNome !== undefined) { return ultimoNome; }
}

module.exports = getEmployeeByName;
