import axiosWithAuth from '../axiosWithAuth/axiosWithAuth';
export const PUT_DOWNVOTE_START = 'PUT_DOWNVOTE_START';
export const PUT_DOWNVOTE_SUCCESS = 'PUT_DOWNVOTE_SUCCESS';
export const PUT_DOWNVOTE_FAILURE = 'PUT_DOWNVOTE_FAILURE';

export const downVote = (issue) => (dispatch) => {
	dispatch({ type: PUT_DOWNVOTE_START });
	axiosWithAuth()
		.put(`/issues/${issue.id}/downvote`, issue)
		.then((res) => {
			dispatch({ type: PUT_DOWNVOTE_SUCCESS, payload: res.data });
			window.location.reload();
		})
		.catch((err) => {
			dispatch({ type: PUT_DOWNVOTE_FAILURE, payload: err.response });
		});
};

export const PUT_UPVOTE_START = 'PUT_UPVOTE_START';
export const PUT_UPVOTE_SUCCESS = 'PUT_UPVOTE_SUCCESS';
export const PUT_UPVOTE_FAILURE = 'PUT_UPVOTE_FAILURE';

export const upVote = (issue) => (dispatch) => {
	dispatch({ type: PUT_UPVOTE_START });
	axiosWithAuth()
		.put(`/issues/${issue.id}/upvote`, issue)
		.then((res) => {
			dispatch({ type: PUT_UPVOTE_SUCCESS, payload: res.data });
			window.location.reload();
			console.log(res.data);
		})
		.catch((err) => {
			dispatch({ type: PUT_UPVOTE_FAILURE, payload: err.response });
		});
};

//the fetch or initial get information ALL ISSUES
export const FETCH_ALLISSUES_START = 'FETCH_ISSUES_START';
export const FETCH_ALLISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const FETCH_ALLISSUES_FAILURE = 'FETCH_ISSUES_FAILURE';

export const getAllIssues = () => (dispatch) => {
	dispatch({ type: FETCH_ALLISSUES_START });
	//Make axiosWithAuth get request here Jamie Jenks end point is just /issues
	axiosWithAuth()
		.get('/issues')
		.then((res) => {
			console.log('hello from actions', res);
			dispatch({ type: FETCH_ALLISSUES_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log('There was an error in your request from actions', err);
			dispatch({ type: FETCH_ALLISSUES_FAILURE, payload: err.response });
		})
		.finally(() => {});
};

export const FETCH_USERISSUES_START = 'FETCH_USERISSUES_START';
export const FETCH_USERISSUES_SUCCESS = 'FETCH_USERISSUES_SUCCESS';
export const FETCH_USERISSUES_FAILURE = 'FETCH_USERISSUES_FAILURE';

export const getUserIssues = (userId) => (dispatch) => {
	dispatch({ type: FETCH_USERISSUES_START });
	axiosWithAuth()
		.get(`/auth/users/${userId}/issues`)
		.then((res) => {
			console.log('hello from actions', res);
			dispatch({ type: FETCH_USERISSUES_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: FETCH_USERISSUES_FAILURE, payload: err.response });
		})
		.finally(() => {});
};

//post or adding ALL issues TO main list
export const POST_ALLISSUES_START = 'POST_ISSUES_START';
export const POST_ALLISSUES_SUCCESS = 'POST_ISSUES_SUCCESS';
export const POST_ALLISSUES_FAILURE = 'POST_ISUES_FAILURE';
//, userId
export const addIssue = (issues) => (dispatch) => {
	console.log('addIssue is runing', issues);
	dispatch({ type: POST_ALLISSUES_START });
	axiosWithAuth()
		.post('/issues', issues)
		.then((res) => {
			console.log('Working from actions for the addIssue', res.data);
			dispatch({ type: POST_ALLISSUES_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log('erroring', err);
			dispatch({ type: POST_ALLISSUES_FAILURE, payload: err.response });
		});
};

// update issues/:id
export const UPDATE_ISSUES_START = 'UPDATE_ISSUES_START';
export const UPDATE_ISSUES_SUCCESS = 'UPDATE_ISSUES_SUCCESS';
export const UPDATE_ISSUES_FAILURE = 'UPDATE_ISSUES_FAILURE';

export const updateIssue = (issue, issueID) => (dispatch) => {
	console.log('UPDATE ISSUE FUNCTION', issue, issueID); //This logs
	dispatch({ type: UPDATE_ISSUES_START });
	console.log('UPDATE ISSUE FUNCTION AFTER DISPATCH'); //This logs
	axiosWithAuth()
		.put(`/issues/${issueID}`, issue)
		.then((res) => {
			alert('Sucessfully Updated Issue', res.data); //doesn't alert
			dispatch({ type: UPDATE_ISSUES_SUCCESS, payload: res.data });
			console.log('RELOADING PAGE');
			window.location.reload();
		})
		.catch((err) => {
			console.error('ERROR UPDATING ISSUE', err);
			dispatch({ type: UPDATE_ISSUES_FAILURE, payload: err.response });
		});
};

export const FETCH_ONEISSUE_START = 'FETCH_ONEISSUE_START';
export const FETCH_ONEISSUE_SUCCESS = 'FETCH_ONEISSUE_SUCCESS';
export const FETCH_ONEISSUE_FAILURE = 'FETCH_ONEISSUE_FAILURE';

export const grabOneIssue = (issueId) => (dispatch) => {
	dispatch({ type: FETCH_ONEISSUE_START });
	axiosWithAuth()
		.get(`/issues/${issueId}`)
		.then((res) => {
			//console.log("grabOneIssue successful", res.data);
			dispatch({ type: FETCH_ONEISSUE_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			//console.log("grabOneIssue failed", err.response);
			dispatch({ type: FETCH_ONEISSUE_FAILURE, payload: err.response });
		})
		.finally(() => {
			//console.log("grabOneIssue is happening at least");
		});
};

export const deleteIssues = (issueId) => (dispatch) => {
	axiosWithAuth()
		.delete(`/issues/${issueId}`)
		.then((res) => {
			getUserIssues(localStorage.getItem('userId'));
			//console.log('deleted issue', res);
		})
		.catch((err) => {
			alert('error', err.response);
		});
};
