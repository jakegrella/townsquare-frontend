import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';
import LoggedHeader from './Headers/LoggedHeader';
import { FaGlobe, FaBuilding, FaUser } from 'react-icons/fa';
import PostCard from './PostCard';

const Dashboard = (props) => {
	const [posts, setPosts] = useState();

	const [isActive, setIsActive] = useState({ button: 'global' });

	useEffect(() => {
		// props.fetchUser();
		global();
	}, [props, props.user]);

	const global = () => {
		console.log('global');
		setIsActive('global');
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
		setIsActive('local');
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
		setIsActive('personal');
		// axiosWithAuth()
		// 	.get(`/api/posts/u/${localStorage.getItem('username')}`)
		// 	.then((res) => {
		// 		console.log(res);
		// 		setPosts(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('500 error', err);
		// 	});

		// console.log('idk', ActionCreators.fetchUser(props.user))
		console.log(props.user)
	};

	return (
		<div className='container'>
			<LoggedHeader />
			<nav>
				<button
					onClick={global}
					className={isActive === 'global' ? 'active global-btn' : 'global-btn'}
				>
					<FaGlobe />
				</button>
				<button
					onClick={local}
					className={isActive === 'local' ? 'active local-btn' : 'local-btn'}
				>
					<FaBuilding />
				</button>
				<button
					onClick={personal}
					className={
						isActive === 'personal' ? 'active personal-btn' : 'personal-btn'
					}
				>
					<FaUser />
				</button>
			</nav>
			<div className='new-post-btn-div'>
				<Link className='new-post-btn' to='/create-post'>
					create new post
				</Link>
			</div>
			<div className='post-container'>
				<h2>posts</h2>
				{!posts ? (
					<p>loading posts</p>
				) : (
					posts.map((post) => {
						return (
							<PostCard
								key={post.post_id}
								name={post.username}
								location={post.zipCode}
								description={post.description}
							/>
						);
					})
				)}
			</div>
			<style jsx='true'>{`
				nav {
					display: flex;
					flex-flow: row nowrap;
					justify-content: center;
				}
				nav button {
					background: #fff;
					padding: 1rem 1.5rem 0.5rem;
					font-size: 2rem;
					// border: 2px solid #000;
				}
				.active {
					background: #fcefde;
				}
				nav button:hover {
					background: #fcefde;
				}
				.global-btn {
					border-radius: 30px 0 0 30px;
					border-left: 2px solid #000;
					border-top: 2px solid #000;
					border-bottom: 2px solid #000;
					border-right: 1px solid #000;
				}
				.local-btn {
					border-left: 1px solid #000;
					border-top: 2px solid #000;
					border-bottom: 2px solid #000;
					border-right: 1px solid #000;
				}
				.personal-btn {
					border-radius: 0 30px 30px 0;
					border-left: 1px solid #000;
					border-top: 2px solid #000;
					border-bottom: 2px solid #000;
					border-right: 2px solid #000;
				}

				.new-post-btn-div {
					display: flex;
					justify-content: center;
				}
				.new-post-btn {
					font-size: 1.8rem;
					border: 2px solid #000;
					border-radius: 25px;
					padding: 1rem 2rem;
					background: #000;
					color: #fcefde;
					margin-top: 1rem;
				}
				.new-post-btn:hover {
					background: #444;
					border: 2px solid #444;
				}

				.post-container {
					margin: 1rem 2rem;
				}
			`}</style>
		</div>
	);
}

export default Dashboard;