import React from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      calculatorObj: calculate({}, 'AC'),
    };
  }

  handleCalculate(text) {
    const { calculatorObj } = this.state;
    this.setState({ calculatorObj: calculate(calculatorObj, text) });
  }

  render() {
    const { display, calculatorObj } = this.state;

    return (
      <div className="calculator-component">
        <div className="calculator-display">
          {display}
        </div>
        <div className="calculator-keyboard">
          <div className="calculator-digits">
            <CalculatorButton text="AC" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="+/-" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="%" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="7" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="8" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="9" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="4" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="5" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="6" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="1" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="2" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="3" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="0" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="." onClick={this.calculate} calcObj={calculatorObj} />
          </div>
          <div className="calculator-operators">
            <CalculatorButton text="÷" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="x" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="-" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="+" onClick={this.calculate} calcObj={calculatorObj} />
            <CalculatorButton text="=" onClick={this.calculate} calcObj={calculatorObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
