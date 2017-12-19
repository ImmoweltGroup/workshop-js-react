// @flow

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

type PropsType = {
  name: string
};

//
// Defining a Component with Context can be done by using the ES6 class Syntax with the `Component` export from React.
// Passing in Type-Annotations of Flow for props can be done at the extend level.
//
class HelloWorldComponent extends Component<PropsType> {
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
  <HelloWorldComponent name="world" />,
  document.getElementById('playground')
);
