import React from 'react';
// import { FaArrowUp } from 'react-icons/fa';

const PostCard = (props) => {
	const { name, location, description } = props;

	return (
		<div>
			<div className='card-container'>
				<h2>{name}</h2>
				<h3>{location}</h3>
				<p>{description}</p>
				{/* <button className='arrow'>{FaArrowUp}</button> */}
				<button className='arrow'>⇧ 12</button>
			</div>
			<style jsx='true'>{`
				.card-container {
					border-bottom: 2px solid #000;
					padding: 1rem 0;
				}
				.arrow {
					margin-top: 1rem;
					font-size: 1.2rem;
					padding: 0 1rem;
					color: #000;
				}
			`}</style>
		</div>
	);
};

export default PostCard;
