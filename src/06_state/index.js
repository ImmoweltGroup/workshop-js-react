import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//
// Handling UI state in React is easy! Setting/Updating is done via the `this.setState()` method
// and accessing the state is done the same way as with props, e.g. `this.state.count`.
//
class CounterComponent extends Component {
  //
  // Lets define an initial state of the component.
  // Best practice: Always to this - Otherwise developers might get confused when they change the behavior of your Component!
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
    this.setState({
      // Hint: This is error prone.
      count: this.state.count + 1
    });
  }
}

ReactDOM.render(<CounterComponent />, document.getElementById('playground'));
