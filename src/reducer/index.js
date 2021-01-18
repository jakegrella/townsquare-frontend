import {
	FETCH_ALLISSUES_START,
	FETCH_ALLISSUES_SUCCESS,
	FETCH_ALLISSUES_FAILURE,
	FETCH_USERISSUES_START,
	FETCH_USERISSUES_SUCCESS,
	FETCH_USERISSUES_FAILURE,
	POST_ALLISSUES_START,
	POST_ALLISSUES_SUCCESS,
	POST_ALLISSUES_FAILURE,
	UPDATE_ISSUES_START,
	UPDATE_ISSUES_SUCCESS,
	UPDATE_ISSUES_FAILURE,
	FETCH_ONEISSUE_START,
	FETCH_ONEISSUE_SUCCESS,
	FETCH_ONEISSUE_FAILURE,
	PUT_UPVOTE_START,
	PUT_UPVOTE_SUCCESS,
	PUT_UPVOTE_FAILURE,
	PUT_DOWNVOTE_START,
	PUT_DOWNVOTE_SUCCESS,
	PUT_DOWNVOTE_FAILURE,
} from '../actions/index.js';

const initialState = {
	issues: [],
	userIssues: [],
	userInfo: [],
	isLoading: false,
	creatingIssue: false,
	createdIssue: false,
	updatingIssue: false,
	updatedIssue: false,
	updatingVote: false,
	udatedVote: false,
	error: '',
};

export const issuesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALLISSUES_START:
			return {
				...state,
				isLoading: true,
				error: '',
			};

		case FETCH_ALLISSUES_SUCCESS:
			//console.log('this is the payload', action.payload)
			return {
				...state,
				issues: [...action.payload],
				isLoading: false,
				error: '',
			};
		case FETCH_ALLISSUES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: 'not loading like that',
			};
		case POST_ALLISSUES_START:
			return {
				...state,
				isLoading: true,
				creatingIssue: true,
				error: '',
			};
		case POST_ALLISSUES_SUCCESS:
			return {
				...state,
				issues: [...state.issues, ...action.payload],
				isLoading: false,
				creatingIssue: false,
				createdIssue: true,
				error: '',
			};
		case POST_ALLISSUES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FETCH_USERISSUES_START:
			return {
				...state,
				isLoading: true,
				creatingIssue: true,
				error: '',
			};
		case FETCH_USERISSUES_SUCCESS:
			return {
				...state,
				userIssues: [...action.payload],
				isLoading: false,
				creatingIssue: false,
				createdIssue: true,
				error: '',
			};
		case FETCH_USERISSUES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case UPDATE_ISSUES_START:
			return {
				...state,
				isLoading: true,
				updatingIssue: true,
				error: '',
			};
		case UPDATE_ISSUES_SUCCESS:
			return {
				...state,
				issues: [...action.payload],
				isLoading: false,
				updatingIssue: false,
				updatedIssue: true,
				error: '',
			};
		case UPDATE_ISSUES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FETCH_ONEISSUE_START:
			return {
				...state,
				isLoading: true,
				error: '',
			};
		case FETCH_ONEISSUE_SUCCESS:
			return {
				...state,
				issues: action.payload,
				isLoading: false,
				error: '',
			};
		case FETCH_ONEISSUE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case PUT_UPVOTE_START:
			return {
				...state,
				isLoading: true,
				updatingVote: true,
				error: '',
			};
		case PUT_UPVOTE_SUCCESS:
			return {
				...state,
				issues: [...action.payload],
				updatingVote: false,
				updatedVote: true,
				error: '',
			};
		case PUT_UPVOTE_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case PUT_DOWNVOTE_START:
			return {
				...state,
				isLoading: true,
				updatingVote: true,
				error: '',
			};
		case PUT_DOWNVOTE_SUCCESS:
			return {
				...state,
				issues: [...action.payload],
				updatingVote: false,
				updatedVote: true,
				error: '',
			};
		case PUT_DOWNVOTE_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
