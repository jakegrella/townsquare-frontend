// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth';

// import Header from './Header';

const initialCredentials = {
	id: '',
	username: '',
	password: '',
};

// const initialUsers = [];

const LogIn = () => {
	const { push } = useHistory();
	const [credentials, setCredentials] = useState(initialCredentials);
	// const [users, setUsers] = useState(initialUsers);
	// console.log('credentials', credentials);

	const handleChange = (event) => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post(`/auth/login`, {
				username: credentials.username,
				password: credentials.password,
			})
			.then((res) => {
				console.log('login post res', res);
				localStorage.setItem('token', res.data.token);
				localStorage.setItem('username', res.data.user.username);
				localStorage.setItem('location', res.data.user.location_id);

				// const userID = users.filter((user) => {
				// 	return user.username === credentials.username;
				// });

				// localStorage.setItem('userID', JSON.stringify(userID[0].id));
				// localStorage.setItem('username', userID[0].username);

				push(`/dashboard/${res.data.user.username}`);
			})
			.catch((err) => {
				console.log(err);
			});
		// axiosWithAuth().get(`/api/`)
	};

	// const getUserInfo = () => {
	// 	axiosWithAuth()
	// 		.get('/users')
	// 		.then((res) => {
	// 			console.log(res);
	// 			setUsers(res.data);
	// 			// })
	// 		});
	// };

	// useEffect(() => {
	// 	getUserInfo();
	// }, []);

	return (
		<>
			{/* <Header /> */}
			<form onSubmit={handleSubmit}>
				<h2>log in</h2>
				<input
					type='text'
					name='username'
					placeholder='test username'
					value={credentials.username}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='password'
					placeholder='test password'
					value={credentials.password}
					onChange={handleChange}
				/>
				<Link to='/signup'>sign up here</Link>
				<button>login</button>
			</form>
			{/* <style jsx>{`
				form {
					border: 1px solid red;
				}
			`}</style> */}
		</>
	);
};

export default LogIn;
