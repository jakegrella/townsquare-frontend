import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth';

//style
import StyledSignUp from './StyledSignUp';

// 🎒 Initial Values
const initialFormValues = {
	username: '',
	password: '',
	zipCode: '',
};

const SignUp = () => {
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newUser = {
			username: formValues.username,
			password: formValues.password,
			zipCode: formValues.zipCode,
		};

		axiosWithAuth()
			.post('/auth/register', newUser)
			.then((res) => {
				console.log(res);
				alert(
					`Account successfully created: username: ${formValues.username}, password: ${formValues.password}`
				);
				setFormValues(initialFormValues);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<StyledSignUp>
			{/* <Header /> */}
			<form onSubmit={handleSubmit}>
				<h2>sign up</h2>
				<input
					type='text'
					name='username'
					placeholder='username'
					value={formValues.username}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					placeholder='password'
					value={formValues.password}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='zipCode'
					placeholder='zip code'
					value={formValues.zipCode}
					onChange={handleChange}
				/>
				<Link to='/login'>click here to log in</Link>
				<button>Create User</button>
			</form>
		</StyledSignUp>
	);
};

export default SignUp;
