import React from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {},
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj, text) {
    this.setState({ calculatorObj: calculate(calcObj, text) });
  }

  componentWDidMount() {
    const calculatorObj = calculate({}, 'AC');
    this.setState({ calculatorObj });
  }

  render() {
    const { calculatorObj } = this.state;
    console.log(calculatorObj);
    return (
      <div className="calculator-component">
        <div className="calculator-display">
          { calculatorObj.next }
        </div>
        <div className="calculator-keyboard">
          <div className="calculator-digits">
            <CalculatorButton text="AC" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="+/-" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="%" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="7" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="8" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="9" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="4" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="5" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="6" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="1" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="2" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="3" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="0" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="." onClick={this.handleCalculate} calcObj={calculatorObj} />
          </div>
          <div className="calculator-operators">
            <CalculatorButton text="÷" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="x" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="-" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="+" onClick={this.handleCalculate} calcObj={calculatorObj} />
            <CalculatorButton text="=" onClick={this.handleCalculate} calcObj={calculatorObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
