import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorObj, setCalculatorObj] = useState({});

  const handleCalculate = (calcObj, text) => {
    setCalculatorObj(calculate(calcObj, text));
  };

  let display = 0;
  if (Object.keys(calculatorObj).length === 0 || (calculatorObj.total === null
    && calculatorObj.next === null
    && calculatorObj.operation === null)) {
    display = 0;
  } else {
    display = calculatorObj.next !== null ? calculatorObj.next : calculatorObj.total;
  }

  return (
    <div className="calculator-component">
      <div className="calculator-display">
        { display }
      </div>
      <div className="calculator-keyboard">
        <div className="calculator-digits">
          <CalculatorButton text="AC" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="+/-" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="%" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="7" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="8" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="9" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="4" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="5" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="6" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="1" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="2" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="3" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="0" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="." onClick={handleCalculate} calcObj={calculatorObj} />
        </div>
        <div className="calculator-operators">
          <CalculatorButton text="÷" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="x" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="-" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="+" onClick={handleCalculate} calcObj={calculatorObj} />
          <CalculatorButton text="=" onClick={handleCalculate} calcObj={calculatorObj} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
