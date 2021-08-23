import calculate from '../calculate';

describe('', () => {
  test('it returns a null object when AC button is pressed', () => {
    const obj = {};
    expect(calculate(obj, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('it returns a null when object is null and zero is entered', () => {
    expect(calculate({ total: null, next: '0', operation: null }, '0')).toStrictEqual({});
  });

  test('it concatenates the number with the next value', () => {
    expect(calculate({ total: null, next: '5', operation: '+' }, '3')).toStrictEqual({ total: null, operation: '+', next: '53' });
  });

  test('it concatenates the number with the next value', () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '3')).toStrictEqual({ total: null, operation: '+', next: '3' });
  });

  test('it updates the next when there is not operation', () => {
    expect(calculate({ total: null, next: '6', operation: null }, '3')).toStrictEqual({ total: null, next: '63' });
  });

  test('it updates the next with buttonName when there is no operation and no next', () => {
    expect(calculate({ total: null, next: '6' }, '3')).toStrictEqual({ total: null, next: '63' });
  });

  test("when press '.' it mantains the obj if next contains '.'", () => {
    expect(calculate({ total: null, next: '6.5' }, '.')).toStrictEqual({ total: null, next: '6.5' });
  });

  test("when press '.' it adds the '.' if next doesn't contains '.'", () => {
    expect(calculate({ total: null, next: '6' }, '.')).toStrictEqual({ total: null, next: '6.' });
  });

  test("when press '.' it adds the '0.' if next doesn't exists", () => {
    expect(calculate({ total: null, next: null, operation: '+' }, '.')).toStrictEqual({ next: '0.' });
  });

  test("when press '.' it returns {} if total contains '.'", () => {
    expect(calculate({ total: '6.5', next: null }, '.')).toStrictEqual({});
  });

  test("when press '.' it adds the '.' if total doesn't contains '.'", () => {
    expect(calculate({ total: '6', next: null }, '.')).toStrictEqual({ total: '6.' });
  });

  test("when press '.' it adds the '0.' if total doesn't exists", () => {
    expect(calculate({ total: null, next: null }, '.')).toStrictEqual({ total: '0.' });
  });
});
