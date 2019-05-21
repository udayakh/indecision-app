'use strict';

console.log('app.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is jsx app.js successfully running!!'
  ),
  React.createElement(
    'p',
    null,
    'Hi uday, u doing great job!!!'
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
