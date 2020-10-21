import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Display from './Display';
import Form from './Form';

function App() {
	const url = 'https://mern-state-capitol-lab.herokuapp.com';

	const [states, setStates] = React.useState([]);
	const [selectedState, setSelectedState] = React.useState([]);

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

	const handleUpdate = (state) => {
		fetch(url + '/state/' + state._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(state),
		}).then(() => {
			getStates();
		});
	};

	const selectState = (state) => {
		setSelectedState(state);
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
						render={(rp) => (
							<Display {...rp} states={states} selectState={selectState} />
						)}
					/>
					<Route
						exact
						path='/create'
						render={(rp) => (
							<Form
								{...rp}
								label='Submit'
								state={emptyState}
								handleSubmit={handleCreate}
							/>
						)}
					/>
					<Route
						exact
						path='/edit'
						render={(rp) => (
							<Form
								{...rp}
								label='Update'
								state={selectedState}
								handleSubmit={handleUpdate}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default App;
