const data = require('../data/zoo_data');

function isManager(id) {
  const booleanGerente = data.employees.filter((element) => id.includes(element.id));
  const contadorFuncionarios = booleanGerente[0].managers.length;

  if (contadorFuncionarios > 0) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// module.exports = { isManager, getRelatedEmployees };
