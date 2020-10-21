import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';

function App() {
	const url = 'https://mern-state-capitol-lab.herokuapp.com';

	const [states, setStates] = React.useState([]);

	const emptyState = {
		name: '',
		img: '',
	};

	const getStates = () => {
		fetch(url + '/state')
			.then((response) => response.json())
			.then((data) => {
				setStates(data);
			});
	};

	React.useEffect(() => getStates(), []);

	const handleCreate = (newState) => {
		fetch(url + '/state/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newState),
		}).then((response) => getStates());
	};

	return (
		<div className='App'>
			<h1>Add Your State and City!</h1>
			<Link to='/create'>
				<button>Add State</button>
			</Link>
			<main>
				<Switch>
					<Route
						exact
						path='/'
						render={(rp) => <Display {...rp} states={states} />}
					/>
					<Route
						exact
						path='/create'
						render={(rp) => (
							<Form
								{...rp}
								label='Add State'
								state={emptyState}
								handleSubmit={handleCreate}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
