import operate from '../operate';

describe('', () => {
  function isNumber(item) {
    return !!item.match(/[0-9]+/);
  }

  /**
   * Given a button name and a calculator data object, return an updated
   * calculator data object.
   *
   * Calculator data object contains:
   *   total:s      the running total
   *   next:String       the next number to be operated on with the total
   *   operation:String  +, -, etc.
   */
  function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
      };
    }

    if (isNumber(buttonName)) {
      if (buttonName === '0' && obj.next === '0') {
        return {};
      }
      // If there is an operation, update next
      if (obj.operation) {
        if (obj.next) {
          return { ...obj, next: obj.next + buttonName };
        }
        return { ...obj, next: buttonName };
      }
      // If there is no operation, update next and clear the value
      if (obj.next) {
        return {
          next: obj.next + buttonName,
          total: null,
        };
      }
      return {
        next: buttonName,
        total: null,
      };
    }

    if (buttonName === '.') {
      if (obj.next) {
        if (obj.next.includes('.')) {
          return { ...obj };
        }
        return { ...obj, next: `${obj.next}.` };
      }
      if (obj.operation) {
        return { next: '0.' };
      }
      if (obj.total) {
        if (obj.total.includes('.')) {
          return {};
        }
        return { total: `${obj.total}.` };
      }
      return { total: '0.' };
    }

    if (buttonName === '=') {
      if (obj.next && obj.operation) {
        return {
          total: operate(obj.total, obj.next, obj.operation),
          next: null,
          operation: null,
        };
      }
      // '=' with no operation, nothing to do
      return {};
    }

    if (buttonName === '+/-') {
      if (obj.next) {
        return { next: (-1 * parseFloat(obj.next)).toString() };
      }
      if (obj.total) {
        return { total: (-1 * parseFloat(obj.total)).toString() };
      }
      return {};
    }

    // Button must be an operation

    // When the user presses an operation button without having entered
    // a number first, do nothing.
    // if (!obj.next && !obj.total) {
    //  return {};
    // }

    // User pressed an operation after pressing '='
    if (!obj.next && obj.total && !obj.operation) {
      return { ...obj, operation: buttonName };
    }

    // User pressed an operation button and there is an existing operation
    if (obj.operation) {
      if (obj.total && !obj.next) {
        return { ...obj, operation: buttonName };
      }

      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: buttonName,
      };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
      return { operation: buttonName };
    }

    // save the operation and shift 'next' into 'total'
    return {
      total: obj.next,
      next: null,
      operation: buttonName,
    };
  }

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
    expect(calculate({ total: '6', next: null }, '.')).toStrictEqual({ total: '6.'});
  });

  test("when press '.' it adds the '0.' if total doesn't exists", () => {
    expect(calculate({ total: null, next: null }, '.')).toStrictEqual({ total: '0.' });
  });
});
