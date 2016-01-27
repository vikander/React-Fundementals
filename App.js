import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	render() {
		// The element we want to create, props, inner HTML
		// Cannot return several dom nodes, as it would be the equivalent of returning
		// multiple values from a function. Wrapping everything in an enclosing div is 
		// however possible.

		// return React.createElement('h1', null, 'Hello Guys!')

		let animal = this.props.animal
		let numberOfLives = this.props.numberOfLives
		let country = this.props.country

		return ( // Wrap in paranthesis to utilize whitespace
			<div>
				<h1>Hello World</h1>
				<b>Bold</b>
				<br/>
				<span>
					An {country} {animal} has {numberOfLives} lives
				</span>
			</div>
		);
	}
}

// Define the prop types that we are expecting (Just an object of our component, where each
// key corrsponds to the prop name, and the value is the type, from React)

App.propTypes = {
	animal: React.PropTypes.string,
	numberOfLives: React.PropTypes.number.isRequired
}

App.defaultProps = {
	country: 'African'
}


ReactDOM.render(<App animal="cat" numberOfLives={9} />, document.getElementById('app'));

// Stateless function component (Does not have state)
// const App = () => <h1>Hello brothers and sisters!</h1>

// export default App