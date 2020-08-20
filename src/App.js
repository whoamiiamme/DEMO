import React from 'react';
import Nav from './layout/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Symptom from './pages/Symptom';
import About from './pages/About';
import Graph from './pages/Graph';
import Footer from './layout/Footer';

function App(props) {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/symptom' component={Symptom} />
					<Route path='/graph' component={Graph} />
					<Route path='/about' component={About} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
