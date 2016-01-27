import React from 'react';
class App extends React.Component {
	render() {
		// The element we want to create, props, inner HTML
		// Cannot return several dom nodes, as it would be the equivalent of returning
		// multiple values from a function. Wrapping everything in an enclosing div is 
		// however possible.

		// return React.createElement('h1', null, 'Hello Guys!')
		return ( // Wrap in paranthesis to utilize whitespace
			<div>
				<h1>Hello World</h1>
				<b>Bold</b>
			</div>
		);
	}
}

// Stateless function component (Does not have state)
// const App = () => <h1>Hello brothers and sisters!</h1>

export default App