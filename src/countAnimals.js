const data = require('../data/zoo_data');

const resultado = {};

function countAnimals(animal) {
  let contador = 0;
  if (animal === undefined) {
    data.species.forEach((unit) => {
      unit.residents.forEach((residente) => {
        contador += 1;
      });
      resultado[unit.name] = contador;
      contador = 0;
    });
    return resultado;
  }
  const objetoAnimalCompleto = data.species.find((element) => animal.specie.includes(element.name));
  objetoAnimalCompleto.residents.forEach((element2) => {
    if (animal.sex === undefined) { contador += 1; }
    if (animal.sex === element2.sex) { contador += 1; }
  });

  return contador;
}

// console.log(countAnimals());
module.exports = countAnimals;
