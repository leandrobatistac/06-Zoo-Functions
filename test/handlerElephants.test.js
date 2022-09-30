const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Verifica a funcionalidade quando o parametro Count é passado', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica a funcionalidade quando o parametro Names é passado', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica a funcionalidade quando o parametro averageAge é passado', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Verifica a funcionalidade quando o parametro Location é passado', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Verifica a funcionalidade quando o parametro Popularity é passado', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Verifica a funcionalidade quando o parametro Availability é passado', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Verifica handlerElephants retorna Null ao não passar um parametro', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Verifica se o parametro passado é uma String', () => {
    expect(handlerElephants(4)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se o parametro passado não é um parametro que existe', () => {
    expect(handlerElephants('leandro')).toEqual(null);
  });
});
