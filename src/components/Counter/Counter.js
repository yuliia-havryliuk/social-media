import './Counter.css';
import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Value from './Value';

class Counter extends React.Component {
  /*constructor() {
    super();
    this.state = {
      value: 10,
    };
  }*/
  static defaultProps = {
    initialValue: 15,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        {/*<span className="Counter__value">{this.state.value}</span>*/}
        <Value valueItem={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

/*const Counter = () => {
  return (
    <div>
      <span className="Counter__vaue">0</span>

      <div className="Counter__controls">
        <button type="button">Увеличить на 1</button>
        <button type="button">Уменьшить на 1</button>
      </div>
    </div>
  );
};*/

export default Counter;
