import React from 'react';
import ReactDOM from 'react-dom';

const PrettyNumberList = props => {
  return <div>{props.numbersToRender.join(', ')}</div>;
};

//
// This will not work, since the Component expects an Array to be present.
//
const numbersToRender = null;

ReactDOM.render(
  <PrettyNumberList numbers={numbersToRender} />,
  document.getElementById('playground')
);
