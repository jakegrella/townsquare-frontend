// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { grabOneIssue } from '../actions/index.js';
// import axios from 'axios';
import IssueCard from './PostCard/IssueCard.js';

const IssuePage = (props) => {
	useEffect(() => {
		const id = props.match.params.id;
		props.grabOneIssue(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.match.params.id]);

	if (!props.issue) {
		return <p> ...Loading Issue </p>;
	}

	return (
		<IssueCard
			issue={props.issue}
			showButtons={localStorage.getItem('userId') === props.issue.user_id}
		/>
	);
};

const mapStateToProps = (state) => {
	const issue = state.issues;
	return {
		issue,
	};
};

export default connect(mapStateToProps, { grabOneIssue })(IssuePage);
