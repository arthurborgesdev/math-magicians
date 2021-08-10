import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return <div className="keyboard-button">{text}</div>;
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalculatorButton;
