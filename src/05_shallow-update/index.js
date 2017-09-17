import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//
// Writing a `shouldComponentUpdate()` method for each contextful component is tedious,
// luckily React exposes a `PureComponent` which has built-in shallow comparison support.
//
class HelloWordComponent extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return <div>Hello {this.props.name}</div>;
  }

  componentDidUpdate() {
    console.log('<HelloWordComponent/> componentDidUpdate');
  }
}

//
// Lets define a case where the Component gets re-rendered multiple times
// with changing props and a case where nothing changes.
//
let count = 1;
function render(name) {
  console.log(`Triggering the ${count} render with name "${name}"...`);
  count++;

  ReactDOM.render(
    <HelloWordComponent name={name} />,
    document.getElementById('playground')
  );
}

render('world');

setTimeout(() => {
  render('mars');
}, 2000);

setTimeout(() => {
  render('mars');
}, 4000);

setTimeout(() => {
  render('world');
}, 6000);
