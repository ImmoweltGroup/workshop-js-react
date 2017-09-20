// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import createStaticPropsWrapper from './staticPropsHoc.js';

type PropsType = {
  foo: string
};

//
// HOCs or "Higher-Order-Components" are the de-facto standard if it comes to inheritance or dependency injection into your View Component.
// The most popular usecase for HOCs is traditional dependency injection or the `connect` HOC from `react-redux` (Will be explained in a different workshop).
//
const FooComponent = (props: PropsType) => {
  console.log('render <FooComponent/> with props: ', props.foo);

  return (
    <div>
      Foo Component got rendered with props {JSON.stringify(props, null, 4)}
    </div>
  );
};

const staticPropsWrapper = createStaticPropsWrapper({
  foo: 'bar'
});
const WrappedComponentWithStaticProps = staticPropsWrapper(FooComponent);

ReactDOM.render(
  <WrappedComponentWithStaticProps />,
  document.getElementById('playground')
);
