import operate from '../operate';

describe('test the operate module', () => {
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
