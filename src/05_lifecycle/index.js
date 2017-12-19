// @flow

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

type PropsType = {
  name: string
};

//
// Defining a Component with Context can be done by using the ES6 class Syntax with the `Component` export from React.
//
class HelloWorldComponent extends Component<PropsType> {
  //
  // This method gets executed just before the Component will be rendered into the DOM.
  //
  componentWillMount() {
    console.log('<HelloWorldComponent/> componentWillMount');
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }

  //
  // This method gets executed right after the Component was rendered the first time into the DOM.
  //
  componentDidMount() {
    console.log('<HelloWorldComponent/> componentDidMount');
  }

  //
  // This method gets executed as soon as the Component gets new props from the outside.
  //
  componentWillReceiveProps(nextProps) {
    console.log(
      '<HelloWorldComponent/> componentWillRecieveProps',
      nextProps,
      this.props
    );
  }

  //
  // This method gets executed if either new props get passed or the state has changed.
  //
  // Based on the boolean return value, the component will or will not re-render.
  //
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '<HelloWorldComponent/> shouldComponentUpdate',
      nextProps,
      this.props,
      nextState,
      this.state
    );

    return nextProps.name !== this.props.name;
  }

  //
  // This method gets executed right after the Component re-renders.
  //
  componentWillUpdate() {
    console.log('<HelloWorldComponent/> componentWillUpdate');
  }

  //
  // This method gets executed right after the Component was re-rendered.
  //
  componentDidUpdate() {
    console.log('<HelloWorldComponent/> componentDidUpdate');
  }

  //
  // This method gets executed right before the Component gets removed from the DOM.
  //
  componentWillUnmount() {
    console.log('<HelloWorldComponent/> componentWillUnmount');
  }
}

ReactDOM.render(
  <HelloWorldComponent name="world" />,
  document.getElementById('playground')
);

setTimeout(() => {
  ReactDOM.render(
    <HelloWorldComponent name="mars" />,
    document.getElementById('playground')
  );
}, 2000);
