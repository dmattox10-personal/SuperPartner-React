import React, { Component } from 'react';
import logo from './logo.svg';
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

/*
<Route exact path="/landing" component={ Landing } />
				<Route exact path="/locations" component={ Locations } />
				<Route exact path="/machines" component={ Machines } />
				<Route exact path="/service" component={ Service } />
				<Route exact path="/vehicles" component={ Vehicles } />
				<Route exact path="/reporting" component={ Reporting } />
				*/