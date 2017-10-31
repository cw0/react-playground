import React from 'react';
import PropTypes from 'prop-types';

class CounterForm extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.props.incrementCounter(this.props.counter);
  }

  render() {
    const {counter} = this.props; //sweet es6 destructuring here

    return (
      <div>
        <h1>Counter: <b>{counter}</b></h1>
        <br />
        <button type="button" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

CounterForm.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.object.isRequired
};

export default CounterForm;
