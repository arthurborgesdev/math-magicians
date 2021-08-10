import React from 'react';
import CalculatorButton from './CalculatorButton';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-component">
        <div className="calculator-display">
          0
        </div>
        <div className="calculator-keyboard">
          <div className="calculator-digits">
            <CalculatorButton text="AC" />
            <CalculatorButton text="+/-" />
            <CalculatorButton text="%" />
            <CalculatorButton text="7" />
            <CalculatorButton text="8" />
            <CalculatorButton text="9" />
            <CalculatorButton text="4" />
            <CalculatorButton text="5" />
            <CalculatorButton text="6" />
            <CalculatorButton text="1" />
            <CalculatorButton text="2" />
            <CalculatorButton text="3" />
            <CalculatorButton text="0" />
            <CalculatorButton text="." />
          </div>
          <div className="calculator-operators">
            <CalculatorButton text="÷" />
            <CalculatorButton text="x" />
            <CalculatorButton text="-" />
            <CalculatorButton text="+" />
            <CalculatorButton text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;