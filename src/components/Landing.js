import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Headers/Header';
import mock from '../assets/landing-mock.png';
import bg from '../assets/landing-bg.png';

const Landing = () => {
	return (
		<div>
			<div className='container'>
				<Header />
				<div className='slogan-container'>
					<h2 className='slogan-h2'>
						TownSquare
						<br /> gives you a voice
					</h2>
					<h3 className='slogan-h3'>
						The best way to create change is to make sure your voice is heard.
					</h3>
					<Link className='slogan-link' to='/signup'>
						Get Started
					</Link>
				</div>
				<footer className='landing-footer'>
					<p className='footer-p'>© TownSquare 2021</p>
					<Link className='footer-p' to='/'>
						Support
					</Link>
					<Link className='footer-p' to='/'>
						About
					</Link>
				</footer>
				<img className='mock' src={mock} alt='mockup of townsquare app' />
			</div>
			<style jsx='true'>{`
				.container {
					height: 100vh;
					background-image: url(${bg});
					background-size: cover;
				}

				.slogan-container {
					z-index: 2;
					display: flex;
					flex-flow: column nowrap;
					justify-content: left;
					align-items: left;
					font-weight: 700;
					margin: 20rem 0 0 5rem;
					width: 40%;
				}

				.slogan-h2 {
					font-size: 6.4rem;
					margin-bottom: 2rem;
				}

				.slogan-h3 {
					font-size: 2.4rem;
					font-weight: 400;
					font-family: 'M PLUS 1p', sans-serif;
				}

				.slogan-link {
					background: #007d68;
					color: #fff;
					padding: 1.4rem 2rem;
					border-radius: 1000px;
					margin: 4rem 0 0 0;
					width: 40%;
					text-align: center;
					font-weight: 400;
				}

				.landing-footer {
					position: fixed;
					left: 5rem;
					bottom: 3rem;
					display: flex;
					flex-flow: row nowrap;
					z-index: 1;
				}

				.footer-p {
					margin-right: 1rem;
					font-size: 1.6rem;
					color: #333;
				}

				.mock {
					position: fixed;
					right: 0;
					bottom: 0;
					// width: 40%;
					max-height: 80%;
				}
			`}</style>
		</div>
	);
};

export default Landing;
