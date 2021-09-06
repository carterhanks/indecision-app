"use strict";

console.log("app.js is running");

//JSX - JavaScript XML (looks like html, but is in fact JSX, and is common found in curly braces).

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Indecision App"
	),
	" ",
	React.createElement(
		"p",
		null,
		"This is some info"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item One"
		)
	)
);

var tempmlateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Carter Hanks"
	),
	React.createElement(
		"p",
		null,
		"Age: 27"
	),
	React.createElement(
		"p",
		null,
		"Location: Utah"
	)
);

var appRoot = document.getElementById("app");

ReactDOM.render(tempmlateTwo, appRoot);
