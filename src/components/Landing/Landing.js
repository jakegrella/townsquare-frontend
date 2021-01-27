import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div>
			<div className='container'>
				<h1>TownSquare</h1>
				<div className='slogan-container'>
					<h2>Your opinions about your community.</h2>
					<h2>Heard.</h2>
				</div>
				<div className='btn-container'>
					<Link to='/login' className='btn'>
						Log In
					</Link>
					<Link to='/signup' className='btn'>
						Sign Up
					</Link>
				</div>
			</div>
			<style jsx='true'>{`
				.container {
					height: 100vh;
					display: flex;
					flex-flow: column nowrap;
					justify-content: space-around;
					align-items: center;
					background: #fcefde;
					padding-top: min(5rem);
					padding-bottom: min(5rem);
				}

				h2 {
					font-size: 4.8rem;
					font-weight: 700;
					margin-top: 1rem;
					text-align: center;
				}

				.slogan-container {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
				}

				.btn-container {
					display: flex;
					flex-flow: column nowrap;
				}
				.btn {
					font-size: 1.8rem;
					border: 2px solid #000;
					border-radius: 25px;
					padding: 1rem 5rem;
					margin-top: 1rem;
				}
				.btn:nth-child(1) {
					background: #000;
					color: #fcefde;
				}
				.btn:hover {
					background: #444;
					border: 2px solid #444;
				}
				.btn:nth-child(2) {
					color: #000;
				}
				.btn:nth-child(2):hover {
					color: #fcefde;
				}
			`}</style>
		</div>
	);
};

export default Landing;
