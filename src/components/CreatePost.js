import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';
import LoggedHeader from './Headers/LoggedHeader';

const initNewPost = {
	description: '',
};

const CreatePost = () => {
	const [newPost, setNewPost] = useState(initNewPost);

	const handleChange = (event) => {
		setNewPost({ ...newPost, [event.target.name]: event.target.value });
		console.log(newPost);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('clicked submit btn');
		axiosWithAuth()
			.post(`/api/posts/p/create`)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log('error');
				console.log(err.message);
				console.log(err);
			});
	};

	return (
		<div>
			<LoggedHeader />

			<form>
				<textarea
					type='textarea'
					placeholder='Add your thoughts here.'
					name='description'
					value={newPost.description}
					onChange={handleChange}
				></textarea>
				<button className='submit-btn' onClick={handleSubmit}>
					submit
				</button>
				<Link
					className='cancel'
					to={`/dashboard/${localStorage.getItem('username')}`}
				>
					Cancel
				</Link>
			</form>
			<style jsx='true'>{`
				form {
					display: flex;
					flex-flow: column nowrap;
					align-items: center;
				}

				.submit-btn {
					font-size: 1.8rem;
					border: 2px solid #000;
					border-radius: 25px;
					padding: 1rem 2rem;
					background: #000;
					color: #fcefde;
					margin-top: 1rem;
				}
				.submit-btn:hover {
					background: #444;
					border: 2px solid #444;
				}

				.cancel {
					margin-top: 1rem;
					font-size: 1.2rem;
				}
			`}</style>
		</div>
	);
};

export default CreatePost;
