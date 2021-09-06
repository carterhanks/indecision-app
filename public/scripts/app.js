"use strict";

console.log("app.js is running");

//JSX - JavaScript XML (looks like html, but is in fact JSX, and is common found in curly braces).

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
