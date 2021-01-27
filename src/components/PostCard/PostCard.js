import React from 'react';

const PostCard = (props) => {
	const { name, location, description } = props;

	return (
		<div>
			<div className='card-container'>
				<h2>{name}</h2>
				<h3>{location}</h3>
				<p>{description}</p>
			</div>
			<style jsx='true'>{`
				.card-container {
					border-bottom: 2px solid #000;
					padding: 1rem 0;
				}
			`}</style>
		</div>
	);
};

export default PostCard;
