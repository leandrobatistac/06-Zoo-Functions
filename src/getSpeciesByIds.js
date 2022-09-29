const data = require('../data/zoo_data');

const array = [];

const getSpeciesByIds = (...idPassado) => {
  if (idPassado.length === 0) {
    return array;
  }

  return data.species.filter((especie) => idPassado.includes(especie.id));
};

// console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
