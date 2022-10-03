const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animaisResp = data.employees.find((empregado) => empregado.id.includes(id)).responsibleFor;
  const primeiroAnimal = data.species.find((a) => a.id.includes(animaisResp[0])).residents;
  const maisVelho = primeiroAnimal.sort((a, b) => a.age - b.age);
  return Object.values(maisVelho[maisVelho.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
