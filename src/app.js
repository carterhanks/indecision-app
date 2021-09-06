console.log("app.js is running");

//JSX - JavaScript XML (looks like html, but is in fact JSX, and is common found in curly braces).

const template = <h1>Indecision App</h1>;
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
