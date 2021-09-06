console.log("app.js is running");
//JSX - JavaScript XML (looks like html, but is in fact JSX, and is common found in curly braces).

const template = (
	<div>
		<h1>Indecision App</h1> <p>This is some info</p>
		<ol>
			<li>Item One</li>
		</ol>
	</div>
);

// let userName = "Carter Hanks";
// let userAge = 27;
// let userLocation = "Utah";

const user = {
	name: "Carter Hanks",
	age: 27,
	location: "Utah"
};

const templateTwo = (
	// <div>
	// 	<h1>{userName.toUpperCase() + "!"}</h1>
	// 	<p>Age: {userAge}</p>
	// 	<p>Location: {userLocation}</p>
	// </div> - SAME AS BELOW:
	<div>
		<h1>{user.name + "!"}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

//TODO - Create app object title/subtitle, use title/subtitle in template, render template

const app = {
	title: "Indecision App",
	subtitle: "Make up your mind."
};

const templateThree = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
	</div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
