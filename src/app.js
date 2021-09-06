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

const tempmlateTwo = (
	<div>
		<h1>Carter Hanks</h1>
		<p>Age: 27</p>
		<p>Location: Utah</p>
	</div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(tempmlateTwo, appRoot);
