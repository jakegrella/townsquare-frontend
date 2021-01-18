// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllIssues, upVote, downVote } from '../actions/index.js';

import IssueCard from './PostCard/IssueCard.js';

// IMPORT STYLED COMPONENTS AND CSS MIXINS
// import styled from 'styled-components';

//first stop for state
//then goes to profile page and card view of individual {id} issue.

const IssuesListPage = (props) => {
	// console.log(props);

	useEffect(() => {
		props.getAllIssues();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!props.issues.length) {
		return <div> Loading...... </div>;
	}

	return (
		<div>
			<header>
				<h1> Welcome to the issues page </h1>
			</header>
			<hr />
			<h2> Issues in your Area: {props.issues.length}</h2>{' '}
			{props.issues.map((item) => {
				return (
					<IssueCard
						issue={item}
						showButtons={false}
						upVote={props.upVote}
						downVote={props.downVote}
					/>
				);
			})}
		</div>
	);
};
const mapStateToProps = (state) => {
	//console.log('state is king', state);
	const { issues } = state;
	return {
		issues,
	};
};

export default connect(mapStateToProps, { getAllIssues, upVote, downVote })(
	IssuesListPage
);
