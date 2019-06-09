import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav'
import Landing from './components/Landing'
import Locations from './components/Locations'
import Machines from './components/Machines'
import Service from './components/Service'
import Vehicles from './components/Vehicles'
import Reporting from './components/Reporting'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Nav />
				</div>
				<Route exact path="/landing" component={ Landing } />
				<Route exact path="/locations" component={ Locations } />
				<Route exact path="/machines" component={ Machines } />
				<Route exact path="/service" component={ Service } />
				<Route exact path="/vehicles" component={ Vehicles } />
				<Route exact path="/reporting" component={ Reporting } />
			</Router>
		);
	}
}

export default App;
