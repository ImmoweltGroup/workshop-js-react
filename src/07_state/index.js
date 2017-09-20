// @flow

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

type PropsType = {};
type StateType = {
  count: number
};

//
// Handling UI state in React is easy! Setting/Updating is done via the `this.setState()` method
// and accessing the state is done the same way as with props, e.g. `this.state.count`.
//
// As we use flow, it is also a good habbit to type the state, we can do it the same way as with our props! :-)
//
class CounterComponent extends Component<PropsType, StateType> {
  //
  // Lets define an initial state of the component.
  // Best practice: Always to this - Otherwise your application might be unstable or developers get confused when they change the behavior of your Component!
  //
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={this.handleCountIncrease}>Increase the number</button>
      </div>
    );
  }

  // Hint: This will not work due to the internal render context of React.
  handleCountIncrease() {
    // Always use the built-in setState() method, otherwise you do more harm than good to your application!
    this.setState({
      // Hint: This is error prone due to React's async state nature,
      // in this case we should use the function argument type instead.
      count: this.state.count + 1
    });
  }
}

ReactDOM.render(<CounterComponent />, document.getElementById('playground'));
