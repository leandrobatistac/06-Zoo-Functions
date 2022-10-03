const data = require('../data/zoo_data');

// Variaveis Globais
const mainDias = Object.keys(data.hours);

// Função para verificar se o parâmetro é um animal
function verificaAnimal(scheduleTarget) {
  return data.species.some((element) => element.name.includes(scheduleTarget));
}

// Função para verificar se o parâmetro é um dia da semana
function verificaDia(scheduleTarget) {
  return mainDias.some((element) => element === scheduleTarget);
}

// Função caso o parâmetro seja um dia da semana
function parametroDia(scheduleTarget) {
  const A = scheduleTarget;
  const mSpecie = data.species.filter((element) => element.availability.includes(scheduleTarget));
  const result = {};
  result[A] = {
    exhibition: mSpecie.map((element) => element.name),
    officeHour: `Open from ${data.hours[A].open}am until ${data.hours[A].close}pm`,
  };
  return result;
}

// Função caso o parâmetro seja Undefined
function parametroUndefined() {
  const result = {};
  mainDias.forEach((element) => {
    result[element] = {
      exhibition:
        data.hours[element].open === 0
          ? 'The zoo will be closed!'
          : data.species.filter((especie) => especie.availability.includes(element))
            .map((especie) => especie.name),
      officeHour:
        data.hours[element].open === 0
          ? 'CLOSED'
          : `Open from ${data.hours[element].open}am until ${data.hours[element].close}pm`,
    };
  });
  return result;
}

// Função caso o parâmetro seja "Monday"
function isMonday(scheduleTarget) {
  const result = {};
  const A = scheduleTarget;
  result[A] = {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  };
  return result;
}

// Função Geral do exercício
function getSchedule(scheduleTarget) {
  if (verificaAnimal(scheduleTarget) === true) {
    const animal = data.species.find((element) => element.name.includes(scheduleTarget));
    return animal.availability;
  }

  if (verificaDia(scheduleTarget) === true) {
    if (scheduleTarget === 'Monday') {
      return isMonday(scheduleTarget);
    }
    return parametroDia(scheduleTarget);
  }

  return parametroUndefined();
}

// console.log(parametroUndefined());
module.exports = getSchedule;
