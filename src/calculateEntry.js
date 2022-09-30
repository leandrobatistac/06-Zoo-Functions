const data = require('../data/zoo_data');

const resultadoUm = {};

function countEntrants(entrants) {
  let contadorChild = 0;
  let contadorAdult = 0;
  let contadorSenior = 0;
  entrants.forEach((element) => {
    if (element.age < 18) {
      contadorChild += 1;
    } else if (element.age >= 18 && element.age < 50) {
      contadorAdult += 1;
    } else { contadorSenior += 1; }
  });
  resultadoUm.child = contadorChild;
  resultadoUm.adult = contadorAdult;
  resultadoUm.senior = contadorSenior;
  return resultadoUm;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = countEntrants(entrants).child * 20.99;
  const adulto = countEntrants(entrants).adult * 49.99;
  const senior = countEntrants(entrants).senior * 24.99;
  return child + adulto + senior;
}

// console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
