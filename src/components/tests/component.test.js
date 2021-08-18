import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../Calculator';
import NavBar from '../NavBar';
import CalculatorButton from '../CalculatorButton';
import CalculatorPage from '../../pages/CalculatorPage';
import Home from '../../pages/Home';
import Quote from '../../pages/Quote';

describe('Testing all components rendering', () => {
  it('Calculator renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('NavBar renders correctly', () => {
    const tree = renderer
      .create(<Router><NavBar /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CalculatorButton renders correctly', () => {
    const props = { };
    props.text = 'test';
    props.onClick = jest.fn(() => {});
    props.calcObj = { string: 'test' };
    const tree = renderer
      .create(<CalculatorButton props={props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('CalculatorPage renders correctly', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home page renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote page renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
