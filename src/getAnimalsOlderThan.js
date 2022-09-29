const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objetoAnimal = data.species.filter((especie) => animal.includes(especie.name));
  const infosDoAnimal = objetoAnimal[0].residents;
  return infosDoAnimal.every((element) => element.age >= age);
}

// console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
