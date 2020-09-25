import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  inc = () => {
    this.props.dispatch({ type: "INCREMENT" })
  };
  dec = () => {
    this.props.dispatch({ type: "DECREMENT" })
  };
  render() {
    //change from this.state to this.props
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.dec}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.inc}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(Counter);
