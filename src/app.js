console.log('app.js is running');

var app = {
    title : 'Uday Application',
    subtitle : 'uday app subtitle'
};
var template = (
<div>
    <h1>{app.title}</h1>
    <p>Hi {app.subtitle}</p>
    <ol>
        <li>item one</li>
        <li>item two</li>
    </ol>
</div>);
var user = {
    name: 'Uday5',
     age : '31',
    location: 'London'};
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'unknown'}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>

    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);