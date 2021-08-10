import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorButton extends React.Component {
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalculatorButton;
