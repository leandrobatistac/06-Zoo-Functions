const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica o retorno ao não passar nenhum parametro', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Verifica se retorna "Fechado" ao indicar um horário fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });

  it('Verifica se retorna "Aberto" ao indicar um horário aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('Verifica se lança o erro ao não informar AM ou PM', () => {
    const actual = () => (getOpeningHours('Sunday', '09:00-AB'));
    expect(actual).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Verifica se lança o erro ao não informar um dia válido', () => {
    const actual = () => (getOpeningHours('TESTE', '09:00-PM'));
    expect(actual).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se lança o erro ao não informar um horário válido', () => {
    const actual = () => (getOpeningHours('Sunday', 'TESTE'));
    expect(actual).toThrow('The hour should represent a number');
  });

  it('Verifica se lança o erro ao informar uma hora maior que 12', () => {
    const actual = () => (getOpeningHours('Sunday', '13:00-PM'));
    expect(actual).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se lança o erro ao informar um minuto maior que 59', () => {
    const actual = () => (getOpeningHours('Sunday', '12:65-PM'));
    expect(actual).toThrow('The minutes must be between 0 and 59');
  });
});
