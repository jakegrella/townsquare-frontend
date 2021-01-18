import React, { useState, useEffect } from 'react';
import IssueCard from './PostCard/IssueCard.js';
import IssueForm from './PostForm/IssueForm.js';

// IMPORT STYLED COMPONENTS AND MIXINS
import styled from 'styled-components';
import { wrappedMixin } from './mixins';

//redux imports
import { connect } from 'react-redux';
import { getUserIssues } from '../actions/index.js';

const StyledDiv = styled.div`
	${wrappedMixin};
`;

const UserHome = (props, { values, errors, touched, status }) => {
	const welcomeMessage = localStorage.getItem('message');
	const id = localStorage.getItem('userId');

	// console.log("Re-rendering component, user id got from localStorage:", id);

	// const [user, setUser] = useState(); //The user we get back from /api/users/:id
	// const [issues, setIssues] = useState([]); //a list of all the user's issues
	const [backup, setBackup] = useState(false);
	useEffect(() => {
		props.getUserIssues(id);
		setBackup(!backup);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function callMe() {
		//console.log("Called");
	}

	// useEffect(() => {
	// 	//console.log("props.userIssues useEffect");
	// 	setIssues(props.userIssues);
	// }, [props.userIssues]);

	return (
		<StyledDiv>
			<header>
				<h1>
					{!props.userIssues.length
						? 'No Current Submitted Issues At This Time......Make One'
						: welcomeMessage}
				</h1>
				<h3>Current Issues: {props.userIssues.length}</h3>
			</header>
			{/*NEW ISSUE FORM*/}
			<IssueForm flag={callMe} />
			{/*USER'S ISSUE LIST*/}{' '}
			{props.userIssues.map((item) => {
				return (
					<IssueCard
						flag={callMe}
						issue={item}
						showButtons={false}
						backup={backup}
						setBackup={setBackup}
					/>
				);
			})}
		</StyledDiv>
	);
};

const mapStateToProps = (state) => {
	//console.log('make me sick', state);
	const { userIssues } = state;
	return {
		userIssues,
	};
};

export default connect(mapStateToProps, { getUserIssues })(UserHome);
