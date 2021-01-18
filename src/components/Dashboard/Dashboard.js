import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../axiosWithAuth/axiosWithAuth';
import LoggedHeader from '../Headers/LoggedHeader';

export default function Dashboard() {
	const [posts, setPosts] = useState();

	useEffect(() => {
		global();
	}, []);

	const global = () => {
		console.log('global');
		axiosWithAuth()
			.get(`/api/posts`)
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log('500 error', err);
			});
	};

	const local = () => {
		console.log('local');
		axiosWithAuth()
			// I do not think this is working correctly right now
			.get(`/api/posts/l/${localStorage.getItem('location')}`)
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log('500 error', err);
			});
	};

	const personal = () => {
		console.log('personal');
		axiosWithAuth()
			.get(`/api/posts/u/${localStorage.getItem('username')}`)
			.then((res) => {
				console.log(res);
				setPosts(res.data);
			})
			.catch((err) => {
				console.log('500 error', err);
			});
	};

	return (
		<div>
			<LoggedHeader />
			<div>
				<button onClick={global}>global</button>
				<button onClick={local}>local</button>
				<button onClick={personal}>personal</button>
			</div>
			<h2>show me the money</h2>
			<div>
				{!posts ? (
					<p>loading posts</p>
				) : (
					posts.map((post) => {
						return (
							<div key={post.post_id}>
								<p>{post.description}</p>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
