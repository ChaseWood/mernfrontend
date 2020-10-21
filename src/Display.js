import React from 'react';

const Display = (props) => {
	const { states } = props;
	const loaded = () => (
		<div style={{ textAlign: 'center' }}>
			{states.map((state) => {
				console.log(state.capitol[0]);
				if (state.capitol[0]) {
					return (
						<article>
							<img src={state.img} />
							<h1>{state.name}</h1>
							<h2>{state.capitol[0].name}</h2>
							<button
								onClick={() => {
									props.selectState(state);
									props.history.push('/edit');
								}}>
								Edit
							</button>
							{/* <button
						onClick={() => {
							props.deleteDog(dog);
						}}>
						Delete
					</button> */}
						</article>
					);
				}
			})}
		</div>
	);
	const loading = <h1>Loading...</h1>;

	return states.length > 0 ? loaded() : loading;
};

export default Display;
