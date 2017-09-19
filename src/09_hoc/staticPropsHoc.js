// @flow

import type {ComponentType} from 'react';
import React from 'react';

export default function createStaticPropsHocWrapper<Props: Object>(
  staticProps: Props
) {
  return function createStaticPropsHoc(
    ComponentToBeWrapped: ComponentType<Props>
  ) {
    if (typeof ComponentToBeWrapped !== 'function') {
      throw new Error(
        'Please provide a Component that will be wrapped to the createStaticPropsHoc() function.'
      );
    }

    const ComponentWithStaticProps = (props: Props) => (
      <ComponentToBeWrapped {...props} {...staticProps} />
    );

    return ComponentWithStaticProps;
  };
}
