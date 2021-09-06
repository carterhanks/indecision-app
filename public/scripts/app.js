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

// let userName = "Carter Hanks";
// let userAge = 27;
// let userLocation = "Utah";

var user = {
	name: "Carter Hanks",
	age: 27,
	location: "Utah"
};

var templateTwo =
// <div>
// 	<h1>{userName.toUpperCase() + "!"}</h1>
// 	<p>Age: {userAge}</p>
// 	<p>Location: {userLocation}</p>
// </div> - SAME AS BELOW:
React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name + "!"
	),
	React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	React.createElement(
		"p",
		null,
		"Location: ",
		user.location
	)
);

//TODO - Create app object title/subtitle, use title/subtitle in template, render template

var app = {
	title: "Indecision App",
	subtitle: "Make up your mind."
};

var templateThree = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		app.title
	),
	React.createElement(
		"p",
		null,
		app.subtitle
	)
);

// CONDITIONAL RENDERING:

var user2 = {
	name: "Carter",
	age: 27,
	location: "Utah"
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			"p",
			null,
			"Location: ",
			location
		);
	}
}

var templateFour = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user2.name ? user2.name : "Anonymous"
	),
	user2.age && user2.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user2.age
	),
	getLocation(user2.location)
);

//TODO - only render the subtitle (and p tag around subtitle) if subtitle exists - logical and operator
//TODO - render new p tag - if options.length > 0 "Here are your options" else "No options"

var appTwo = {
	title: "Indecision App",
	subtitle: "Make up your mind.",
	options: ["one", "two"]
};

var templateFive = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		appTwo.title
	),
	appTwo.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	React.createElement(
		"p",
		null,
		appTwo.options.length > 0 ? "Here are your options:" : "No Options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item One"
		),
		React.createElement(
			"li",
			null,
			"Item Two"
		)
	)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateFive, appRoot);
