import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { text, onClick, calcObj } = this.props;
    onClick(calcObj, text);
  }

  render() {
    const { text } = this.props;
    return (
      <button
        type="button"
        className="keyboard-button"
        onClick={this.handleClick}
      >
        {text}
      </button>
    );
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  calcObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

// PropTypes.checkPropTypes(CalculatorButton, props, 'prop', 'CalculatorButton');

export default CalculatorButton;
