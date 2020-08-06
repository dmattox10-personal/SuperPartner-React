import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav'
import Container from './components/Container'

class App extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<Nav />
					<Container />
				</div>
			</div>
		);
	}
}

export default App;
