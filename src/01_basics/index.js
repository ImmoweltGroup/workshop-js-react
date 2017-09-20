import React from 'react';
import ReactDOM from 'react-dom';

//
// React has two &quot;Primitives&quot;,
// 1. Element
// 2. Component
//
// The first one is either a HTML node or another Component that got executed.
// The following code will be transpiled under the hood into raw JavaScript, e.g.
// `React.createElement('div', null, 'Foo')`
//
const reactElement = <div>Foo</div>;

console.log(
  'This is what an rendered React Component looks like under the hood: ',
  reactElement
);

//
// The second one is a Component, defining it is as simple as eating a banana. Nice!
//
const HelloWordComponent = props => {
  const myDataArray = [{id: 'foo', name: 'Foo'}, {id: 'bar', name: 'Bar'}];
  return (
    <div>
      In JSX you can:
      <ul>
        <li>
          describe your markup on multiple lines by wrapping the JSX in regular
          braces.
        </li>
        <li>
          Define so called self-closing elements like in XHTML, e.g. <br /> like
          this(should be wrapped on a new line)
        </li>
        <li>
          Write regular HTML, except for reserved keyworks in JS like `class` or
          `for`, in these cases a counterpart can be written, e.g.
          <ul>
            <li>
              class=&quot;myClassname&quot; becomes
              className=&quot;myClassname&quot;
            </li>
            <li>
              for=&quot;myInputIdPointer&quot; becomes
              htmlFor=&quot;myInputIdPointer&quot;
            </li>
          </ul>
        </li>
        <li>Evaluate/Execute everything in curly braces `{props.name}`</li>
        <li>
          Render:<br />
          numbers {2 * 2}, <br />
          strings {'foo'}, <br />
          React Elements <div>foo bar</div>
          Arrays of the previous stated data-types, e.g. <br />
          {myDataArray.map(obj => (
            // Hint: It is important to specify a `key` in an iteration to enhance Reacts re-render performance(the value must be unique)!
            <div key={obj.id}>{obj.name}</div>
          ))}
        </li>
        <li>`null` will not be rendered, e.g. {null}</li>
      </ul>
    </div>
  );
};

//
// And finally, lets render the Component into the DOM of the browser.
//
ReactDOM.render(
  <HelloWordComponent name="world" />,
  document.getElementById('playground')
);
