import React from 'react';

const Display = (props) => {
	const { states } = props;
	const loaded = () => (
		<div style={{ textAlign: 'center' }}>
			{states.map((state) => (
				<article>
					<img src={state.img} />
					<h1>{state.name}</h1>
					{/* <button
						onClick={() => {
							props.selectDog(dog);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteDog(dog);
						}}>
						Delete
					</button> */}
				</article>
			))}
		</div>
	);
	const loading = <h1>Loading...</h1>;

	return states.length > 0 ? loaded() : loading;
};

export default Display;
