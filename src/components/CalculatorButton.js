import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    const { text, onClick, calcObj } = this.props;
    onClick(calcObj, text);
  }

  handleKeyDown() {
    const { text, onClick, calcObj } = this.props;
    onClick(calcObj, text);
  }

  render() {
    const { text } = this.props;
    return (
      <button
        type="button"
        tabIndex={0}
        className="keyboard-button"
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {text}
      </button>
    );
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  calcObj: PropTypes.objectOf([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ]).isRequired,
};

// PropTypes.checkPropTypes(CalculatorButton, props, 'prop', 'CalculatorButton');

export default CalculatorButton;
