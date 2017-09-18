import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//
// Defining a Component with Context can be done by using the ES6 class Syntax with the `Component` export from React.
//
class HelloWordComponent extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        Hello {this.props.name} with {this.getSomeContext()}
      </div>
    );
  }

  getSomeContext() {
    return 'foo';
  }
}

ReactDOM.render(
  <HelloWordComponent name="world" />,
  document.getElementById('playground')
);
