import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// IMPORT STYLED COMPONENTS AND CSS MIXINS
import styled from 'styled-components';
import IssueForm from '../PostForm/IssueForm.js';

//import redux/fn
import {
	deleteIssues,
	upVote,
	downVote,
	getAllIssues,
	getUserIssues,
} from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const StyledCard = styled.div`
	width: 60vw;
	margin: 0 auto;
	.card {
		background: #eeeeee;
		border: 1px solid gray;
		padding: 0.5rem;
		margin: 0.5rem;
		display: flex;
		flex-direction: row;
		.issueImage {
			width: 50%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			img {
				width: 100%;
				height: auto;
			}
		}
		.text {
			padding: 0.5rem;
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			h2 {
				width: 50%;
			}
		}
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;

function IssueCard(props) {
	console.log(props);

	const [issue, setIssue] = useState();
	const [form, setForm] = useState(<div></div>);

	const uId = localStorage.getItem('userId');

	function handleDelete() {
		props.deleteIssues(props.issue.id);
	}
	console.log('ISSUE STRUCTURE', issue);
	useEffect(() => {
		setIssue(props.issue);
		props.getUserIssues(uId);
		// props.setBackup(!props.backup);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [issue]);

	let issueButtons = <div></div>;

	useEffect(() => {
		//console.log("Re-rendering");
	}, [form]);

	function showForm() {
		//console.log("On click");
		setForm(<IssueForm issue={issue} flagChange={props.flagChange} />);
	}

	function upVoteNow() {
		props.upVote(issue);
		props.getUserIssues(uId);
		alert('you voted for this issue');
		props.history.push('/userHome');
		console.log(issue);
	}

	function downVoteNow() {
		props.downVote(issue);
		props.getUserIssues(uId);
		alert('you removed your vote for this issue');
		props.history.push('/userHome');
		console.log(issue);
	}

	useEffect(() => {
		// props.getUserIssues(uId);
		// props.getAllIssues();
	}, []);

	if (props.showButtons) {
		issueButtons = (
			<div>
				<Link to='/userHome'>
					<button onClick={handleDelete}>Delete</button>
				</Link>
				<button onClick={showForm}>Edit</button>
				<Link to='/userHome'>
					<button>Home</button>
				</Link>
			</div>
		);
	}

	if (!issue) return <p>Loading...</p>;

	return (
		<StyledCard>
			<div className='card'>
				<div className='issueImage'>
					<img src={issue.imageURL} className='pic' alt='specific issue' />
				</div>
				<div className='text'>
					<Link to={`/issues/${issue.id}`} className='detail-link'>
						<span>
							<em>Click here to edit or delete your issue!</em>
						</span>
						<h2>
							{issue.title} - {issue.category}
						</h2>
						<p>{issue.details}</p>
					</Link>

					<p>By user {issue.user_id} (TODO: Get username by ID)</p>
					<button onClick={upVoteNow}>Upvote: {issue.upvotes}</button>
					<button onClick={downVoteNow}>remove my vote</button>

					{issueButtons}
					{form}
				</div>
			</div>
		</StyledCard>
	);
}
const mapStateToProps = (state) => {
	return {
		state,
	};
};

export default withRouter(
	connect(mapStateToProps, {
		deleteIssues,
		upVote,
		downVote,
		getAllIssues,
		getUserIssues,
	})(IssueCard)
);
