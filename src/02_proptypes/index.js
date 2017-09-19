import React from 'react';
import ReactDOM from 'react-dom';

const PrettyNumberList = props => {
  return <div>{props.numbersToRender.join(', ')}</div>;
};

//
// This will not work, since the Component expects an Array to be present,
// since we did not define PropTypes you will not get the best developer expirience, so let's define `PropTypes` on the Component!
//
const numbersToRender = null;

ReactDOM.render(
  <PrettyNumberList numbers={numbersToRender} />,
  document.getElementById('playground')
);
