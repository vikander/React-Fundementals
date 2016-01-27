import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

	// State is a collection of values that are meant to be 
	// manged by the components themselves.
	// State are meant of what will change

	constructor() {
		super();
		this.state = {
			txt: 'Random Title',
			longerText: 'Have an awesome Halloween in Havana'
		};
	}

	update(e) {
		this.setState({txt: e.target.value})
	}


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
				<h1>{this.state.txt}</h1>
				<input type="text" onChange={this.update.bind(this)} />				
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


// Props are meant to be passed into components as static values or methods
// Props are static
ReactDOM.render(<App animal="cat" numberOfLives={9} />, document.getElementById('app'));

// Stateless function component (Does not have state)
// const App = () => <h1>Hello brothers and sisters!</h1>

// export default App