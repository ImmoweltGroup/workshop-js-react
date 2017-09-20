// @flow

import React from 'react';
import ReactDOM from 'react-dom';

//
// But what about Flow? Thankfully Flow offers a great React support out of the Box!
// We can simply define Props as argument Type-Annotations the same way we do it with regular functions!
// Under the hood babel also transforms the Flow annotations into PropTypes, so we also see errors in our browser! :-)
//
type PropsType = {
  numbers: Array<number>
};

const PrettyNumberList = (props: PropsType) => {
  return <div>{props.numbers.join(', ')}</div>;
};

//
// This will not work, since the Component expects an Array to be present.
//
const numbersToRender = null;

ReactDOM.render(
  <PrettyNumberList numbers={numbersToRender} />,
  document.getElementById('playground')
);
