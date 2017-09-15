//
// We are importing React and ReactDOM without a bundler and
// access the libraries via the `window` object.
//
import '/node_modules/react/dist/react.js';
import '/node_modules/react-dom/dist/react-dom.js';
const {React, ReactDOM} = window;

//
// Defining a Component is as simple as eating a banana. Nice!
//
const HelloWordComponent = props => {
  return <div>Hello {props.name}</div>;
};

//
// Let's execute the function and see how a React Component is structured under the hood!
//
const helloWorldReactElement = HelloWordComponent({
  name: 'World'
});

console.log(
  'This is what an rendered React Component looks like under the hood: ',
  helloWorldReactElement
);

//
// And finally, lets render it to the DOM in the browser.
//
ReactDOM.render(
  <HelloWordComponent name="world" />,
  document.getElementById('playground')
);
