'use strict';

console.log('app.js is running');

var app = {
    title: 'Uday Application',
    subtitle: 'uday app subtitle'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        'Hi ',
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);
var user = {
    name: 'Uday5',
    age: '31',
    location: 'London' };
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'unknown'
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
