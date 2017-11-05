import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/counterActions";
import CounterForm from "../components/CounterForm";

export const CounterPage = (props) => {  
  console.log(actions, props);
  return (
    <CounterForm
      incrementCounter={props.actions.incrementCounter}
      decrementCounter={props.actions.decrementCounter}
      counter={props.counter}
    />
  );
};

CounterPage.propTypes = {
  actions: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
