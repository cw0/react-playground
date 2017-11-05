import React from "react";
import PropTypes from "prop-types";

class CounterForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.props.incrementCounter(this.props.counter);
  }

  decrementCounter() {
    this.props.decrementCounter(this.props.counter);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          Counter: <b>{this.props.counter}</b>
        </h1>
        <br />
        <button type="button" id="btn-increment-counter" onClick={this.incrementCounter}>
          Increment
        </button>
        <button type="button" id="btn-decrement-counter" onClick={this.decrementCounter}>
          Decrement
        </button>
      </div>
    );
  }
}

CounterForm.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
};

export default CounterForm;
