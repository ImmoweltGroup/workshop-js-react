import React from 'react';
import ReactDOM from 'react-dom';

//
// React has two "Primitives",
// 1. Element
// 2. Component
//
// The first one is either a HTML node or another Component that got executed.
//
const reactElement = <div>Foo</div>;

console.log(
  'This is what an rendered React Component looks like under the hood: ',
  reactElement
);

//
// Defining a Component is as simple as eating a banana. Nice!
//
const HelloWordComponent = props => {
  //
  // Everything
  //
  return <div>Hello {props.name}</div>;
};

//
// And finally, lets render it to the DOM in the browser.
//
ReactDOM.render(
  <HelloWordComponent name="world" />,
  document.getElementById('playground')
);
