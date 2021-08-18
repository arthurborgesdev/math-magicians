import Big from 'big.js';

describe('test the operate module', () => {
  function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);
    if (operation === '+') {
      return one.plus(two).toString();
    }
    if (operation === '-') {
      return one.minus(two).toString();
    }
    if (operation === 'x') {
      return one.times(two).toString();
    }
    if (operation === '÷') {
      try {
        return one.div(two).toString();
      } catch (err) {
        return "Can't divide by 0.";
      }
    }
    if (operation === '%') {
      return one.mod(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
  }

  test('adds two numbers', () => {
    expect(Number(operate(2, 3, '-'))).toEqual(-1);
  });

  test('adds two numbers', () => {
    expect(Number(operate(2, 3, 'x'))).toEqual(6);
  });

  test('adds two numbers', () => {
    expect(Number(operate(2, 3, '÷'))).toBeCloseTo(0.666666);
  });

  test('adds two numbers', () => {
    expect(operate(2, 0, '÷')).toEqual("Can't divide by 0.");
  });

  test('adds two numbers', () => {
    expect(Number(operate(2, 3, '%'))).toEqual(2);
  });
});
