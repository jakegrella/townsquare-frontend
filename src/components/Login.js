import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';
// redux
import { connect } from 'react-redux'
import { loginUser } from '../store/actions'

const initialCredentials = {
	username: '',
	password: '',
};

const LogIn = (props) => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState(initialCredentials);

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const user = {
			username: credentials.username,
			password: credentials.password,
		};
		props.loginUser(user).then(() => {
			push(`/${props.user.username}`)
		})
		// if(loggedUser !== undefined) {
		// } else {
		// 	console.log('undefined loggedUser')
		// }
	};

	

	return (
		<>
			{/* <Header /> */}
			<div className='container'>
				<Link to='/'>
					<h1>TownSquare</h1>
				</Link>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='username'
						placeholder='Username'
						value={credentials.username}
						onChange={handleChange}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={credentials.password}
						onChange={handleChange}
					/>
					<button className='btn'>Log In</button>
					<p>
						Don't have an account? <Link to='/signup'>Sign Up</Link>
					</p>
				</form>
			</div>
			<style jsx='true'>{`
				.container {
					height: 100vh;
					display: flex;
					flex-flow: column nowrap;
					justify-content: space-around;
					align-items: center;
					padding-top: min(5rem);
					padding-bottom: min(5rem);
				}

				form {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
				}

				input {
					margin-bottom: 0.5rem;
					width: 100%;
				}

				.btn {
					font-size: 1.8rem;
					border: 2px solid #000;
					border-radius: 25px;
					padding: 1rem 5rem;
					margin-top: 1rem;
					margin-bottom: 1rem;
					background: #000;
					color: #fcefde;
					width: 20rem;
				}
				.btn:hover {
					background: #444;
					border: 2px solid #444;
				}

				p {
					font-size: 1.4rem;
				}
			`}</style>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, { loginUser })(LogIn);
