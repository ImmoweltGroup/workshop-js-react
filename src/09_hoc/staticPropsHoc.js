// @flow

import type {ComponentType} from 'react';
import React from 'react';

export default function createStaticPropsWrapper<Props: Object>(
  staticProps: Props
) {
  return function staticPropsWrapper(
    ComponentToBeWrapped: ComponentType<Props>
  ) {
    if (typeof ComponentToBeWrapped !== 'function') {
      throw new Error(
        'Please provide a Component that will be wrapped to the createStaticPropsHoc() function.'
      );
    }

    const WrappedComponentWithStaticProps = (props: Props) => (
      <ComponentToBeWrapped {...props} {...staticProps} />
    );

    return WrappedComponentWithStaticProps;
  };
}
