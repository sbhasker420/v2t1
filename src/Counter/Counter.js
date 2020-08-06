// COUNTER with store ... without store code is below
import React, { Component } from "react";

import { connect } from "react-redux";

import CounterControl from "../components/CounterControl/counterControl";
import CounterOutput from "../components/CounterOutput/counterOutput";

import * as actionTypes from "../store/actions";

class Counter extends Component {
  counterChangedHandler = (action, value) => {
    switch (action) {
      default:
        break;
      case "inc":
        this.setState({ counter: this.props.ctr + 1 });
        break;
      case "dec":
        this.setState({ counter: this.props.ctr - 1 });
        break;
      case "add 5":
        this.setState({ counter: this.props.ctr + value });
        break;
      case "sub 5":
        this.setState({ counter: this.props.ctr - value });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          click={this.props.onIncrementCounter}
          label="Increment"
        />
        <CounterControl
          click={this.props.onDecrementCounter}
          label="Decrement"
        />
        <CounterControl click={this.props.onAddCounter} label="Add 5" />
        <CounterControl click={this.props.onSubtractCounter} label="Sub 5" />

        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {this.props.storedResults.map((result) => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctrRed.counter,
    storedResults: state.resRed.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, deleteElementId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// COUNTER without store...

/*import React, { Component } from "react";

import CounterOutput from "../CounterOutput/counterOutput";
import CounterControl from "../CounterControl/counterControl";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState({ counter: this.state.counter + 1 });
        break;
      case "dec":
        this.setState({ counter: this.state.counter - 1 });
        break;
      case "add 5":
        this.setState({ counter: this.state.counter + value });
        break;
      case "sub 5":
        this.setState({ counter: this.state.counter - value });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput currentCount={this.state.counter} />
        <CounterControl
          label="Increment"
          click={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          click={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          click={() => this.counterChangedHandler("add 5", 5)}
        />
        <CounterControl
          label="Sub 5"
          click={() => this.counterChangedHandler("sub 5", 5)}
        />
      </div>
    );
  }
}
*/
