console.log('app.js is running');

var template = (
<div>
    <h1>This is jsx app.js successfully running!!</h1>
    <p>Hi uday, u doing great job!!!</p>
</div>);
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);