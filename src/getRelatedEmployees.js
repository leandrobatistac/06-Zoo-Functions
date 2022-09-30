const data = require('../data/zoo_data');

function isManager(id) {
  const listaDeGerentes = [];
  data.employees.forEach((element) => {
    listaDeGerentes.push(...element.managers);
  });
  return listaDeGerentes.some((gerentes) => id.includes(gerentes));
}

function getRelatedEmployees(managerId) {
  const listaDeSubornidados = [];
  if (isManager(managerId) === true) {
    data.employees.forEach((element2) => {
      if (element2.managers.includes(managerId)) {
        listaDeSubornidados.push(`${element2.firstName} ${element2.lastName}`);
      }
    });
    return listaDeSubornidados;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
