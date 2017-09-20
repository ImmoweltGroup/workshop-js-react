// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//
// Reacts "context" feature allows you to define optional and implicit "props" which will be passed through the whole tree,
// and only if they are marked as required by the component, they will be used during the re-render evaluation.
//
class Wrapper extends Component<*> {
  static childContextTypes = {
    foo: PropTypes.string
  };

  getChildContext() {
    return {
      foo: 'bar'
    };
  }

  render() {
    return <FooComponent />;
  }
}

class FooComponent extends Component<*> {
  static contextTypes = {
    foo: PropTypes.string
  };

  render() {
    return (
      <div>
        This component can access the contextType &quot;foo&quot; from above
        without it being passed explicitly to the FooComponent. The value of
        contextType &quot;foo&quot; is &quot;{this.context.foo}&quot;.
      </div>
    );
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('playground'));
