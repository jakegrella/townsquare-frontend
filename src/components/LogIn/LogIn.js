// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { withFormik, Form, Field } from 'formik';
// import * as yup from 'yup';
// import axios from 'axios';
// import StyledSignUp from '../SignUp/StyledSignUp';

// const UserForm = ({ values, errors, touched, status }) => {
// 	const [user, setUser] = useState({}); //adding so we can see the state after submit but not needed for form.

// 	useEffect(() => {
// 		if (status) {
// 			setUser([...user, status]);
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [user, status]);
// 	return (
// 		<StyledSignUp>
// 			<h2> Log In </h2>
// 			<div className='form'>
// 				<Form>
// 					<div className='input-field'>
// 						<label>
// 							<span> Email </span>
// 							{touched.email && errors.email && <p> {errors.email} </p>}
// 							<Field type='text' name='username' placeholder='username' />
// 						</label>
// 					</div>
// 					<br />
// 					<div className='input-field'>
// 						<label>
// 							<span> Password </span> <br />
// 							{touched.password && errors.password && (
// 								<p> {errors.password} </p>
// 							)}
// 							<Field type='password' name='password' placeholder='password' />
// 						</label>
// 					</div>
// 					<hr />
// 					<Link to='/signup'>Click here to Register</Link>
// 					<div className='button'>
// 						<button type='submit'> Login </button>
// 					</div>
// 				</Form>
// 			</div>
// 		</StyledSignUp>
// 	);
// };

// const FormikUserForm = withFormik({
// 	mapPropsToValues({ username, password }) {
// 		return {
// 			username: username || '',
// 			password: password || '',
// 		};
// 	},
// 	validationSchema: yup.object().shape({
// 		username: yup
// 			.string()
// 			.min('3', 'Username must be 3 characters or more')
// 			.required('You must provide a username.'),
// 		password: yup.string().min('4').required('Minimum 4 letters please.'),
// 	}),

// 	handleSubmit(values, { props }) {
// 		axios
// 			.post(`https://comake-bw-node-jg.herokuapp.com/auth/login`, values)
// 			.then((res) => {
// 				localStorage.setItem('token', res.data.token);
// 				localStorage.setItem('userId', res.data.userId);
// 				localStorage.setItem('message', res.data.message);
// 				props.history.push('/userHome');
// 				console.log('POST res', res.data, values);
// 			})
// 			.catch((err) => alert(err.response.data.message));
// 	},
// })(UserForm);

// export default FormikUserForm;
