const data = require('../data/zoo_data');

// Função para checar tipo de Parâmetro
function checarParametro(ident) {
  if (ident.name !== undefined) {
    const nome = data.employees.find((element) => ident.name.includes(element.firstName));
    const sobrenome = data.employees.find((element) => ident.name.includes(element.lastName));
    return nome === undefined
      ? sobrenome
      : nome;
  }

  if (ident.id !== undefined) {
    const idParam = data.employees.find((element) => ident.id.includes(element.id));
    return idParam;
  }
}

// Função que retorna uma lista com todas as pessoas colaboradoras
function semParametro() {
  const result = data.employees.map((element) => (
    {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: element.responsibleFor.map((element2) => data.species
        .find((element3) => element3.id.includes(element2)).name),
      locations: element.responsibleFor.map((element2) => data.species
        .find((element3) => element3.id.includes(element2)).name)
        .map((element4) => data.species
          .find((element5) => element5.name.includes(element4)).location),
    }
  ));
  return result;
}

// Função Geral
function getEmployeesCoverage(ident) {
  if (ident === undefined) { return semParametro(); }
  const mainObj = checarParametro(ident);
  if (mainObj === undefined) { throw new Error('Informações inválidas'); }
  const result = {
    id: mainObj.id,
    fullName: `${mainObj.firstName} ${mainObj.lastName}`,
    species: mainObj.responsibleFor.map((element) => data.species
      .find((element2) => element2.id.includes(element)).name),
    locations: mainObj.responsibleFor.map((element) => data.species
      .find((element2) => element2.id.includes(element)).name)
      .map((element) => data.species
        .find((element2) => element2.name.includes(element)).location),
  };
  return result;
}

// console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
