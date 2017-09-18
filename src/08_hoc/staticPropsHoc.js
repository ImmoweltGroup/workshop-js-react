import React from 'react';

export default function createStaticPropsHocWrapper(staticProps = {}) {
  return function createStaticPropsHoc(ComponentToBeWrapped) {
    if (typeof ComponentToBeWrapped !== 'function') {
      throw new Error(
        'Please provide a Component that will be wrapped to the createStaticPropsHoc() function.'
      );
    }

    const ComponentWithStaticProps = props => (
      <ComponentToBeWrapped {...props} {...staticProps} />
    );

    return ComponentWithStaticProps;
  };
}
