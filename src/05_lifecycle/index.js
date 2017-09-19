// @flow

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

type PropsType = {
  name: string
};

//
// Defining a Component with Context can be done by using the ES6 class Syntax with the `Component` export from React.
//
class HelloWordComponent extends Component<PropsType> {
  //
  // This method gets executed just before the Component will be rendered into the DOM.
  //
  componentWillMount() {
    console.log('<HelloWordComponent/> componentWillMount');
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }

  //
  // This method gets executed right after the Component was rendered the first time into the DOM.
  //
  componentDidMount() {
    console.log('<HelloWordComponent/> componentDidMount');
  }

  //
  // This method gets executed as soon as the Component gets new props from the outside.
  //
  componentWillReceiveProps(nextProps) {
    console.log(
      '<HelloWordComponent/> componentWillRecieveProps',
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
      '<HelloWordComponent/> shouldComponentUpdate',
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
    console.log('<HelloWordComponent/> componentWillUpdate');
  }

  //
  // This method gets executed right after the Component was re-rendered.
  //
  componentDidUpdate() {
    console.log('<HelloWordComponent/> componentDidUpdate');
  }

  //
  // This method gets executed right before the Component gets removed from the DOM.
  //
  componentWillUnmount() {
    console.log('<HelloWordComponent/> componentWillUnmount');
  }
}

ReactDOM.render(
  <HelloWordComponent name="world" />,
  document.getElementById('playground')
);

setTimeout(() => {
  ReactDOM.render(
    <HelloWordComponent name="mars" />,
    document.getElementById('playground')
  );
}, 2000);
