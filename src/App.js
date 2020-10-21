import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
	const url = 'http://localhost:4500/';

	const [states, setStates] = React.useState([]);

	const getStates = () => {
		fetch(url + '/state/')
			.then((response) => response.json())
			.then((data) => {
				setDogs(data);
			});
	};

	React.useEffect(() => getStates(), []);

	return <div className='App'></div>;
}

export default App;
