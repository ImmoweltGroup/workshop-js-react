const load = (function() {
  // Function which returns a function: https://davidwalsh.name/javascript-functions
  function _load(tag) {
    return function(url, type) {
      // This promise will be used by Promise.all to determine success or failure
      return new Promise(function(resolve, reject) {
        var element = document.createElement(tag);
        var parent = 'body';
        var attr = 'src';

        // Important success and error for the promise
        element.onload = function() {
          resolve(url);
        };
        element.onerror = function() {
          reject(url);
        };

        // Need to set different attributes depending on tag type
        switch (tag) {
          case 'script':
            element.async = true;

            element.setAttribute('type', type || 'text/javascript');

            break;
          case 'link':
            element.type = type || 'text/css';
            element.rel = 'stylesheet';
            attr = 'href';
            parent = 'head';
        }

        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
      });
    };
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img')
  };
})();

Promise.all([
  load.js('/node_modules/codemirror/lib/codemirror.js'),
  load.css('/node_modules/codemirror/lib/codemirror.css'),
  load.css('/node_modules/codemirror/theme/monokai.css'),
  load.css('/src/style.css')
])
  .then(() => load.js('/node_modules/codemirror/mode/javascript/javascript.js'))
  .then(() => init())
  .catch(console.error);

function init() {
  const src = window.location.href + 'index.js';
  const dist = src.replace('src', 'dist');
  const playground = document.createElement('div');

  playground.setAttribute('id', 'playground');

  document.body.appendChild(playground);

  Promise.all([load.js(dist, 'module'), fetch(src)])
    .then(([emptyRes, response]) => response.text())
    .then(text => {
      return window.CodeMirror(document.body, {
        value: text,
        mode: 'javascript',
        theme: 'monokai'
      });
    })
    .catch(console.error);
}
