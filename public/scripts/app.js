'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  null,
  'This is jsx app.js successfully running!!'
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
